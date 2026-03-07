"use client"

import React, { useState, type FormEvent } from "react"
import { User, Mail, X, ArrowRight } from "lucide-react"

interface ContactFormProps {
  onClose: () => void
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 3000)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center py-10 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Thank you!</h2>
            <p className="mt-2 text-slate-500">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form
            className="flex flex-col items-center text-sm text-slate-800"
            onSubmit={handleSubmit}
          >
            <p className="text-xs bg-indigo-100 text-indigo-600 font-medium px-3 py-1 rounded-full">
              Contact Us
            </p>
            <h2 className="text-3xl font-bold py-4 text-center text-slate-900">
              Let&apos;s Get In Touch.
            </h2>
            <p className="text-sm text-gray-500 pb-8 text-center">
              Or just reach out manually to us at{" "}
              <a
                href="mailto:fixoid.ai@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                fixoid.ai@gmail.com
              </a>
            </p>

            <div className="w-full">
              <label className="font-medium text-slate-700">Full Name</label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                <User className="h-5 w-5 text-slate-500 shrink-0" />
                <input
                  type="text"
                  name="name"
                  className="h-full px-2 w-full outline-none bg-transparent text-slate-800 placeholder:text-slate-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <label className="font-medium text-slate-700">Email Address</label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                <Mail className="h-5 w-5 text-slate-500 shrink-0" />
                <input
                  type="email"
                  name="email"
                  className="h-full px-2 w-full outline-none bg-transparent text-slate-800 placeholder:text-slate-400"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <label className="font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                rows={4}
                className="w-full mt-2 p-3 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all text-slate-800 placeholder:text-slate-400"
                placeholder="Enter your message"
                required
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition-colors font-medium"
              >
                Submit Form
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
