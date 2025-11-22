# AI Engineer Portfolio

A modern, professional portfolio website for a junior AI engineer built with Next.js and Tailwind CSS.

## Features

- **Homepage** with hero section, profile photo, and elevator pitch
- **Projects Section** with filtering by tags (NLP, Computer Vision, ML, etc.)
- **Skills & Certifications** showcasing technical expertise
- **Resume Section** with downloadable PDF
- **About & Contact** pages with contact form
- **Blog/Insights** section for articles and tutorials
- **Testimonials** from mentors and collaborators
- **Dark Mode Toggle** with white base theme
- **Responsive Design** for mobile, tablet, and desktop
- **SEO Optimized** metadata and structure

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **React 19** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
client/
├── app/
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── contact/        # Contact page
│   ├── projects/       # Projects page
│   ├── resume/         # Resume page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Footer.tsx      # Footer component
│   ├── Navigation.tsx  # Navigation bar
│   ├── Testimonials.tsx # Testimonials section
│   ├── ThemeProvider.tsx # Theme context
│   └── ThemeToggle.tsx  # Dark mode toggle
└── public/             # Static assets
```

## Customization

### Personal Information

1. Update profile information in:
   - `app/page.tsx` - Homepage content
   - `app/about/page.tsx` - About page content
   - `app/resume/page.tsx` - Resume content

2. Replace placeholder images:
   - `public/profile.jpg` - Your profile photo
   - Project images in `app/projects/page.tsx`

3. Update social links:
   - Navigation component
   - Footer component
   - Contact page

### Styling

The theme uses CSS variables defined in `app/globals.css`. White is the base theme with dark mode available via toggle.

### Projects

Edit the projects array in `app/projects/page.tsx` to add your own projects.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## SEO Optimization

- Update metadata in `app/layout.tsx`
- Add your actual content with relevant keywords
- Ensure all images have alt text
- Add structured data if needed

## License

This project is open source and available for personal use.
