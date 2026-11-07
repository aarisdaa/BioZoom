# BIOZOOM

An interactive, mobile-first learning website about the human digestive system, built for students. Learners follow food through seven organs, read short facts, watch an animation for each organ, and test themselves with quizzes.

**Live demo:** https://zoombio.pages.dev

## Features

- **Start page** with a dropdown menu, then a drag-the-pizza activity that leads into the lessons
- **Knowledge Box** with seven organ topics: mouth, esophagus, stomach, small intestine, liver and gallbladder, large intestine, anus
- **Fact pages** showing what each organ does, the enzymes involved, and what gets digested, with a video for each organ
- **Mini quiz after every fact** (3 questions per organ, 21 in total) with instant correct/wrong feedback
- **Timed Digestive Quiz** with scoring, a per-question countdown, and a final result screen
- Responsive layout with a custom illustrated background

## Tech stack

- HTML5, CSS3 (Flexbox, Grid, transitions)
- Vanilla JavaScript (DOM manipulation, `URLSearchParams` routing, timers)
- Google Fonts (Prompt)
- Deployed on Cloudflare Pages

## Project structure

```
.
├── index.html          # Home page and menu
├── KnowledgeBox.html   # Topic list (links to page.html?fact=0..6)
├── page.html           # Fact viewer with per-organ quiz
├── quiz.html           # Timed quiz game
├── pizza.html          # Drag-the-pizza intro activity
├── css/style.css       # Shared styles
├── js/data.js          # Facts and quiz questions
└── assets/             # Images and videos
```

## Run locally

No build step is needed. Open `index.html` directly, or serve the folder with any static server:

```bash
npx serve .
```

Then open the printed local address in your browser.

## What I learned

- Structuring a multi-page static site and passing state through URL parameters
- Building quiz logic with data-driven rendering, timers and score tracking
- Designing a child-friendly, mobile-first UI
- Deploying a static site with Cloudflare Pages

## Possible improvements

- Rebuild with React and Vite
- Add a progress tracker and a leaderboard

## Author

Aritsada Mabaru — [GitHub](https://github.com/aarisdaa)
