"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

const VERTEX_SRC = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`

const FRAGMENT_SRC = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 touch;
uniform int pointerCount;
uniform float isDark;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)

float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}

float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}

float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}

float clouds(vec2 p) {
  float d=1., t=.0;
  for (float i=.0; i<3.; i++) {
    float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
    t=mix(t,d,a);
    d=a;
    p*=2./(i+1.);
  }
  return t;
}

void main(void) {
  vec2 uv=(FC-.5*R)/MN;
  uv.y-=.35;
  vec2 st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);

  for (float i=1.; i<12.; i++) {
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    col+=.00125/d*(cos(sin(i)*vec3(3.,1.5,2.))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    col=mix(col,vec3(bg*.03,bg*.12,bg*.22),d);
  }

  vec3 darkCol=col;
  vec3 lightBase=vec3(.95,.97,1.);
  vec3 lightCol=lightBase-col*vec3(.55,.38,.15);
  lightCol=max(lightCol,vec3(0));
  lightCol+=col*vec3(.06,.14,.24);

  col=mix(lightCol,darkCol,isDark);
  O=vec4(col,1);
}`

export function ShaderBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const isDarkRef = useRef(1.0)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    isDarkRef.current = resolvedTheme === "dark" ? 1.0 : 0.0
  }, [resolvedTheme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2")
    if (!gl) return

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio)

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      gl!.viewport(0, 0, canvas.width, canvas.height)
    }

    function compile(shader: WebGLShader, source: string) {
      gl!.shaderSource(shader, source)
      gl!.compileShader(shader)
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error("Shader error:", gl!.getShaderInfoLog(shader))
      }
    }

    const vs = gl.createShader(gl.VERTEX_SHADER)!
    const fs = gl.createShader(gl.FRAGMENT_SHADER)!
    compile(vs, VERTEX_SRC)
    compile(fs, FRAGMENT_SRC)

    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program))
      return
    }

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW)

    const position = gl.getAttribLocation(program, "position")
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

    const uResolution = gl.getUniformLocation(program, "resolution")
    const uTime = gl.getUniformLocation(program, "time")
    const uTouch = gl.getUniformLocation(program, "touch")
    const uPointerCount = gl.getUniformLocation(program, "pointerCount")
    const uIsDark = gl.getUniformLocation(program, "isDark")

    let mouseX = 0
    let mouseY = 0
    let pointerDown = false

    function onPointerMove(e: PointerEvent) {
      mouseX = e.clientX * dpr
      mouseY = canvas!.height - e.clientY * dpr
    }
    function onPointerDown() { pointerDown = true }
    function onPointerUp() { pointerDown = false }

    canvas.addEventListener("pointermove", onPointerMove)
    canvas.addEventListener("pointerdown", onPointerDown)
    canvas.addEventListener("pointerup", onPointerUp)
    canvas.addEventListener("pointerleave", onPointerUp)

    resize()

    function loop(now: number) {
      const dark = isDarkRef.current
      gl!.clearColor(0, 0, 0, 1)
      gl!.clear(gl!.COLOR_BUFFER_BIT)
      gl!.useProgram(program)
      gl!.bindBuffer(gl!.ARRAY_BUFFER, buffer)
      gl!.uniform2f(uResolution, canvas!.width, canvas!.height)
      gl!.uniform1f(uTime, now * 1e-3)
      gl!.uniform2f(uTouch, mouseX, mouseY)
      gl!.uniform1i(uPointerCount, pointerDown ? 1 : 0)
      gl!.uniform1f(uIsDark, dark)
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4)
      frameRef.current = requestAnimationFrame(loop)
    }

    frameRef.current = requestAnimationFrame(loop)
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("pointermove", onPointerMove)
      canvas.removeEventListener("pointerdown", onPointerDown)
      canvas.removeEventListener("pointerup", onPointerUp)
      canvas.removeEventListener("pointerleave", onPointerUp)
      cancelAnimationFrame(frameRef.current)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(buffer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full touch-none ${className}`}
    />
  )
}
