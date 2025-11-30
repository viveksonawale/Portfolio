# Vivek Ramesh Sonawale - Portfolio

A modern, mobile-first  website built with Next.js 14, Tailwind CSS, and Framer Motion.
Refactored with a premium, dark-themed design featuring serif typography, a tabbed experience section, and advanced interactions (Lenis scroll, Draggable stack).

## 🤖 Chatbot Setup

To enable the AI chatbot ("Vivek Support"), you need an OpenAI API Key.

1.  Create a `.env` file in the root directory.
2.  Add your API key:
    ```env
    OPENAI_API_KEY=sk-your-api-key-here
    ```
3.  Restart the development server.

*Note: Without an API key, the chatbot will respond with a mock message.*

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/viveksonawale/portfolio.git
    cd portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠 Configuration & Customization

### 1. Personal Information
Search for `REPLACE_ME` comments in the code to find areas that need customization.
- **Name & Links**: Update `components/layout/Footer.tsx` and `components/sections/Hero.tsx`.
- **Projects**: Update `components/sections/Projects.tsx` and `app/projects/page.tsx` with your real projects.
- **Experience**: Update `components/sections/Experience.tsx`.

### 2. Contact Form
This portfolio uses [Formspree](https://formspree.io/) for the contact form.
1.  Go to Formspree and create a new form.
2.  Copy your Form ID.
3.  Open `components/sections/Contact.tsx`.
4.  Replace `YOUR_FORM_ID` with your actual Form ID in the `fetch` URL.

### 3. Portrait Image
Replace `public/portrait-vivek.svg` with your actual photo named `portrait-vivek.webp` (or update the filename in `components/sections/Hero.tsx`).

## 📦 Deployment

### Vercel (Recommended)
1.  Push your code to GitHub.
2.  Go to [Vercel](https://vercel.com) and import your repository.
3.  Deploy! Vercel automatically detects Next.js.

### GitHub Pages
To deploy to GitHub Pages, you need to configure `next.config.ts` for static export if you are not using Vercel.
1.  Update `next.config.ts`:
    ```ts
    const nextConfig = {
      output: 'export',
      images: { unoptimized: true }, // Required for GitHub Pages
    };
    export default nextConfig;
    ```
2.  Run `npm run build`.
3.  Deploy the `out` directory to the `gh-pages` branch.

## ✅ QA Checklist

Use this checklist to verify everything is working correctly after deployment:

- [ ] **Contact Form**: Send a test message and verify you receive it via Formspree.
- [ ] **Smooth Scrolling**: Click nav links (About, Projects) and verify smooth scroll to sections.
- [ ] **Mobile Menu**: Open on mobile, check hamburger menu opens/closes and links work.
- [ ] **Responsive Design**: Check layout on Mobile (iPhone SE), Tablet (iPad), and Desktop.
- [ ] **Links**: Verify all social links (GitHub, LinkedIn) and Resume download work.
- [ ] **Theme**: Verify colors look good in both dark (default) and light modes (if enabled).
- [ ] **SEO**: Check if title and meta description appear correctly in browser tab/search.
- [ ] **Performance**: Run Lighthouse audit (aim for >90 Performance & Accessibility).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
