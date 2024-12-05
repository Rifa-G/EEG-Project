# React + Vite

For my MVP, I developed a nicotine tracking application that is related to my industry insight presentation and interview pitch for EEG. The full concept is a nicotine tracking platform combined with machine learning. The full platform would provide users with medically-validated advice based on their inputs, while the algorithm would learn user smoking patterns to offer targeted quitting strategies.

However, before investing in the complete solution, I wanted to validate basic user engagement through this MVP. The current version focuses on two metrics: user willingness to track their nicotine usage and interest in the full platform. The application collects data points whenever users interact with the demo tracking calendar and maintains a waitlist of emails from interested users.

The MVP features a clean, intuitive interface where users can log their daily nicotine consumption, distinguishing usage between cigarette, vape, or none. Each interaction with the demo calendar triggers a notification to the backend — to measure engagement. Users interested in the entire platform can join a waitlist by providing their email for future updates.

The front end is built using CSS and JavaScript. The MVP includes a calendar for tracking usage, toggle options between cigarettes and vapes, and an integrated waitlist registration system. This connects to Evan's Node.js backend, which handles data storage and event logging.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
