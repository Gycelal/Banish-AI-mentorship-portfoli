# Mohammed Banish — Personal Portfolio & AI Education Website

A modern, minimal, and responsive personal portfolio and AI education website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**.

## 🚀 Features

- **Interactive Hero Presentation:**
  - Switches smoothly between Presentation 1 (Full-length photo: *“Learn AI to Thrive in Studies and Beyond”*) and Presentation 2 (Half-length educator portrait: *“Build Skills Today. Shape Your Future Tomorrow”*).
  - Subtle 7-second auto-transition with manual tab buttons, Next/Previous controls, and pause/play toggle.
  - Transparent PNGs formatted with proper aspect ratios so head and feet are never cropped.
- **Curriculum Hours Visual Distribution Bar:**
  - Modernized signature stacked distribution bars comparing 12h, 24h, and 48h packages across Computer Skills, AI Tools, Canva Design, CapCut Video, and Final Showcase.
- **Course Packages (Starter, Standard, Pro):**
  - Clean card presentation with duration, weekly pacing, module breakdown, outcomes, and direct WhatsApp enquiry buttons prefilled with package details.
- **What Students Learn (Curriculum):**
  - 4 foundational pillars (Computer Skills, AI Tools, Canva Design, CapCut Video Editing) highlighting free software tools + Pro 48h extensions.
  - Pedagogical pillars: 100% Free Software, Project-Based Learning, Safety & Ethics First, Parent Showcase.
- **Meet Your Teacher & Academic Journey:**
  - Bio of Mohammed Banish (M.Sc. Computer Science, University of Calicut).
  - Impact counters: 3+ Years Teaching, 300+ Students Mentored, 20+ Teachers Trained, 2 Published Research Papers.
  - Verified education & career timeline.
- **Accreditations & Certificates:**
  - Filterable grid with 12 verified credentials across Cisco Networking Academy, Canva Digital Teaching, Edapt AI for Educators, Ehackify, NCC, and Duolingo English.
- **Published Research:**
  - Scholarly cards for *“Phishing in the Digital Age”* (2025) and *“Review of the Enhanced Salp Swarm Algorithm”* (2023), linking research to student cyber safety.
- **Direct Contact & Demo Class Booking:**
  - Instant WhatsApp enquiry with prefilled student details, direct mailto email link, and Instagram link.
  - Interactive demo class request form.

## 🛠️ Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── banishfull.png
│   └── banishhalf.png
├── src/
│   ├── assets/
│   │   ├── banishfull.png   # Full-length image (head to foot)
│   │   └── banishhalf.png   # Half-length educator portrait
│   ├── components/
│   │   ├── Navbar.jsx       # Responsive sticky navigation with mobile drawer
│   │   ├── Hero.jsx         # Interactive 2-presentation hero with auto/manual toggle
│   │   ├── Courses.jsx      # Starter (12h), Standard (24h), Pro (48h) cards
│   │   ├── Curriculum.jsx   # What students learn across the 4 core pillars
│   │   ├── About.jsx        # Bio, impact stats, and qualifications timeline
│   │   ├── Certificates.jsx # Filterable verified certificates grid
│   │   ├── Research.jsx     # Published papers and classroom impact
│   │   ├── Contact.jsx      # WhatsApp, email, Instagram, and demo booking form
│   │   ├── Footer.jsx       # Footer with languages and back-to-top button
│   │   └── Icons.jsx        # Custom SVG icons
│   ├── data/
│   │   └── portfolioData.js # Centralized content for easy editing
│   ├── App.jsx              # Main application layout
│   ├── index.css            # Tailwind directives and custom animation styles
│   └── main.jsx             # React entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 💻 Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
