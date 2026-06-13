# Emerging 100 ATL — Internal Playbook

The official internal committee playbook for **Emerging 100 Atlanta** — the premier young professionals auxiliary of the 100 Black Men of Atlanta, Inc.

## Overview

React + Vite single-page application serving as the central hub for all Emerging 100 ATL committee documentation, resources, and playbooks for the 2025–2027 term.

## Features

- **15 Committee Pages** — Overview, leadership, goals, responsibilities, and resources for every committee
- **Full HTML Playbooks** — Comprehensive per-committee playbooks (goals, RACI charts, timelines, checklists) served as static files
- **Resources Hub** — Master hub, event checklists, 141 transition questions, and new chair guide in one place
- **Scroll progress bar** — Gold progress indicator at the top of the page
- **Committee search** — Live search/filter on the home page committee grid
- **In-page tab navigation** — Sticky tab nav with active section tracking on every committee page
- **Back to top** — Floating button appears after scrolling
- **SEO** — Open Graph, Twitter Card, and primary meta tags

## Committees

| Committee | Playbook |
|---|---|
| B.E.S.T. Academy | ✓ |
| Collegiate 100 | ✓ |
| Communication | ✓ |
| Community Service | ✓ |
| Corporate Roundtable | ✓ |
| Data & Systems | ✓ |
| Emerging Development | ✓ |
| Emerging Leaders Awards & Gala | ✓ |
| Finance | ✓ |
| Health & Wellness | ✓ |
| Newsletter | ✓ |
| Operation Community Uplift | ✓ |
| Partnerships & Fundraising | ✓ |
| Process & Governance | ✓ |
| Social Fundraising | ✓ |

## Tech Stack

- **React 18** + **Vite**
- **React Router v6** (client-side routing)
- **CSS custom properties** — `--navy`, `--gold`, `--gray-*`
- **Google Fonts** — Inter (body), Playfair Display (headings)
- **IntersectionObserver** — active section tracking + scroll animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
```

Output goes to `dist/`. Deploy as a static site (Netlify, Vercel, GitHub Pages, etc.).

## Project Structure

```
src/
  assets/          # Logo images, photos
  components/      # Navbar, Footer, CommitteePage, ScrollProgress, BackToTop
  pages/
    Home.jsx       # Landing page with animated stats + committee grid
    About.jsx      # Mission, values, executive board
    Resources.jsx  # Hub for all playbook files and shared docs
    committees/    # 15 committee page components
public/
  playbooks/       # 19 standalone HTML playbook files
  favicon.png
  logo.png
```

---

*For members of Emerging 100 ATL only. Greatness Starts Here.*
