# TSN Education — MERN Stack

Full MERN stack implementation of [tech-canvas-india.lovable.app](https://tech-canvas-india.lovable.app), generated from UI components.

## Project Structure

```
tsn-mern/
├── backend/
│   ├── server.js              # Express entry point
│   ├── .env.example           # Environment variables template
│   ├── models/
│   │   ├── Course.js
│   │   ├── Enrollment.js
│   │   ├── Testimonial.js
│   │   └── FAQ.js
│   ├── controllers/
│   │   ├── courseController.js
│   │   ├── enrollmentController.js
│   │   ├── testimonialController.js
│   │   └── faqController.js
│   └── routes/
│       ├── courseRoutes.js
│       ├── enrollmentRoutes.js
│       ├── testimonialRoutes.js
│       └── faqRoutes.js
│
└── frontend/
    └── src/
        ├── App.jsx
        ├── api.js                  # Axios API helper
        ├── index.css               # Global styles + design tokens
        └── components/
            ├── Navbar/             Navbar.jsx + Navbar.css
            ├── Hero/               Hero.jsx + Hero.css
            ├── Curriculum/         Curriculum.jsx + Curriculum.css
            ├── Mentor/             Mentor.jsx + Mentor.css
            ├── Testimonials/       Testimonials.jsx + Testimonials.css
            ├── Pricing/            Pricing.jsx + Pricing.css (with modal)
            ├── FAQ/                FAQ.jsx + FAQ.css (accordion)
            └── Footer/             Footer.jsx + Footer.css
```

## UI Components Implemented

| Component | Description |
|-----------|-------------|
| **Navbar** | Fixed, scrolled glass effect, mobile hamburger menu |
| **Hero** | Full headline, CTA buttons, tech tag pills |
| **Curriculum** | Dynamic course cards grid fetched from API |
| **Mentor** | Two-column layout with stats + skill tags |
| **Testimonials** | Card grid fetched from API |
| **Pricing** | 3-tier cards with enrollment modal form |
| **FAQ** | Animated accordion fetched from API |
| **Footer** | Brand + nav links |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/courses | List all courses |
| POST | /api/courses | Create course |
| PUT | /api/courses/:id | Update course |
| DELETE | /api/courses/:id | Delete course |
| GET | /api/testimonials | List featured testimonials |
| POST | /api/testimonials | Add testimonial |
| GET | /api/faq | List all FAQs |
| POST | /api/faq | Add FAQ |
| POST | /api/enrollments | Submit enrollment |
| GET | /api/enrollments | List all enrollments |
| PATCH | /api/enrollments/:id/status | Update status |

## Setup

### Backend
```bash
cd backend
cp .env.example .env        # fill in your MONGO_URI
npm install
npm run dev                 # starts on :5000
```

### Frontend
```bash
cd frontend
npm install
npm start                   # starts on :3000, proxied to :5000
```

## Design Tokens
All CSS variables are in `frontend/src/index.css`:
- `--bg` dark background `#0a0a0a`
- `--accent` lime yellow `#e8ff57`
- `--font-display` Syne (headings)
- `--font-body` DM Sans (body)
