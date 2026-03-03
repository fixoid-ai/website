# Fixoid – AI Solutions Website

The official website for **Fixoid**, showcasing our AI-powered projects, services, and team. Built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (dark/light mode)

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone git@github.com:fixoid-ai/website.git
   cd website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Visit [http://localhost:3000](http://localhost:3000) to view the website.

   The page auto-updates as you edit files.

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server          |
| `npm run lint`  | Run ESLint to check for code issues  |

## Project Structure

```
website/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout (fonts, theme provider)
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/               # Reusable UI components
│   ├── hero.tsx          # Hero section
│   ├── about.tsx         # About section
│   ├── services.tsx      # Services section
│   ├── portfolio.tsx     # Portfolio / projects section
│   ├── team.tsx          # Team section
│   ├── testimonials.tsx  # Client testimonials
│   └── ...
├── lib/                  # Utility functions
├── public/               # Static assets (logo, SVGs)
└── package.json          # Dependencies and scripts
```

## Deployment

### Vercel (Recommended)

Deploy instantly with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js):

1. Push the repository to GitHub
2. Import the project on Vercel
3. Vercel auto-detects Next.js and deploys

### Self-Hosted

```bash
npm run build
npm run start
```

The production server runs on port 3000 by default. Set the `PORT` environment variable to change it.
