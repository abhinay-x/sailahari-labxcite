# Sailahari Website

SEO-optimized Next.js website with CMS integration.

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- A CMS backend (Strapi, Sanity, etc.) or API endpoint
- Resend account (for contact form emails)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
# CMS Configuration
CMS_API_URL=http://localhost:1337/api
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337/api

# Resend Email Configuration
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=noreply@sailahari.com
TO_EMAIL=info@sailahari.com
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Building for Production

```bash
npm run build
npm start
```

## CMS Setup

This website is designed to work with any headless CMS that provides a REST API. The default configuration expects a Strapi-like API structure.

### Expected CMS Structure

**Products Collection:**
- `slug` (text, unique)
- `name` (text)
- `description` (richtext)
- `specifications` (richtext, optional)
- `image` (media, single)
- `images` (media, multiple, optional)
- `category` (relation, optional)
- `featured` (boolean)

**Services Collection:**
- `title` (text)
- `overview` (richtext)
- `slug` (text, unique)

**About (Single Type):**
- `background` (richtext)
- `vision` (text)
- `mission` (text)
- `values` (JSON array)

You can customize the API endpoints in `/lib/api.ts` to match your CMS structure.

## Features

- ✅ SEO-optimized with dynamic meta tags
- ✅ Static Site Generation (SSG) with Incremental Static Regeneration (ISR)
- ✅ Responsive design with Tailwind CSS
- ✅ CMS integration ready (Strapi, Sanity, etc.)
- ✅ Contact form with Resend email service
- ✅ Image optimization with Next.js Image component
- ✅ Product search and filtering
- ✅ Dynamic product detail pages with static generation

## Project Structure

```
├── pages/                 # Next.js pages (routing)
│   ├── index.tsx         # Home page
│   ├── about.tsx         # About Us page
│   ├── services.tsx      # Services page
│   ├── products/         # Products pages
│   │   ├── index.tsx     # Product catalogue
│   │   └── [slug].tsx    # Product detail page
│   ├── contact.tsx       # Contact page
│   └── api/              # API routes
│       └── send-inquiry.ts
├── components/           # Reusable React components
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeadMeta.tsx
│   └── ...
├── lib/                  # Utility functions and API helpers
│   └── api.ts            # CMS API integration
├── styles/               # Global styles
│   └── globals.css
└── public/               # Static assets
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The website uses ISR (Incremental Static Regeneration), so content will automatically update without full redeployments.

## Customization

- Update company information in `components/Footer.tsx` and `components/ContactDetails.tsx`
- Modify colors and styling in `tailwind.config.js`
- Adjust SEO defaults in `components/HeadMeta.tsx`
- Customize API endpoints in `lib/api.ts`

