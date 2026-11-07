# BIOZOOM
### Interactive Human Digestive System Learning Website

BioZoom is an interactive, mobile-first educational website designed to help students learn about the human digestive system. Users can explore how food travels through seven digestive organs, discover key facts, watch organ-specific animations, and test their knowledge through interactive quizzes.

**Live Demo:** [https://biozoom.aritsada.workers.dev](https://biozoom.aritsada.workers.dev)

---

## Features

- **Interactive Start Page** — Includes a dropdown navigation menu and a drag-and-drop pizza activity to introduce the learning experience.
- **Knowledge Box** — Explore seven topics covering the digestive system: Mouth, Esophagus, Stomach, Small Intestine, Liver and Gallbladder, Large Intestine, and Anus.
- **Organ Fact Pages** — Learn about each organ's functions, digestive enzymes, and the nutrients or substances involved in digestion, with an accompanying video for each topic.
- **Interactive Mini Quizzes** — Three questions after each organ topic, with instant feedback for correct and incorrect answers (21 questions in total).
- **Timed Digestive Quiz** — A quiz game featuring a countdown timer for each question, score tracking, and a final results screen.
- **Responsive Design** — Mobile-first layout with a custom illustrated background and interactive visual elements.

---

## Tech Stack

- **HTML5** — Website structure and content
- **CSS3** — Responsive layouts using Flexbox, Grid, and transitions
- **Vanilla JavaScript** — DOM manipulation, interactive features, quiz logic, timers, and URL-based navigation using `URLSearchParams`
- **Cloudflare Workers** — Deployment and hosting

---

## Project Structure

```text
.
├── index.html          # Home page and navigation menu
├── KnowledgeBox.html   # Digestive system topic list
├── page.html           # Organ facts and mini quizzes
├── quiz.html           # Timed digestive system quiz
├── pizza.html          # Interactive pizza introduction
├── css/
│   └── style.css       # Shared styles
├── js/
│   ├── data.js         # Organ facts and quiz questions
│   ├── feedback.js     # User feedback and interactive responses
│   └── nav.js          # Navigation functionality
└── assets/             # Images and videos
```

---

## Run Locally

No build tools or installation steps are required.

1. Clone the repository.
2. Open the project folder.
3. Run a local static server:

```bash
npx serve .
```

4. Open the local URL provided in the terminal.

Alternatively, open `index.html` directly in your browser.

---

## What I Learned

- Structuring a multi-page website using HTML, CSS, and JavaScript.
- Managing navigation and passing data between pages using URL parameters.
- Implementing data-driven content rendering and interactive quiz functionality.
- Developing countdown timers, score tracking, and instant answer feedback.
- Designing responsive and user-friendly interfaces for mobile devices.
- Deploying and hosting a static website using Cloudflare.

---

## Future Improvements

- Rebuild the project using React and Vite for a more component-based architecture.
- Add a learning progress tracker.
- Introduce a leaderboard to encourage engagement and competition.

---

## Author

**Aritsada Mabaru**

- GitHub: [@aarisdaa](https://github.com/aarisdaa)
