# Color Organizer React App

[![CI/CD Example](https://github.com/AungAung-Drlinuxer/color-organizer-test/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/AungAung-Drlinuxer/color-organizer-test/actions/workflows/ci-cd.yml) [![Daily QOTD Update](https://github.com/AungAung-Drlinuxer/color-organizer-test/actions/workflows/qotd.yml/badge.svg)](https://github.com/AungAung-Drlinuxer/color-organizer-test/actions/workflows/qotd.yml)

A modern React application for organizing, rating, and managing your favorite colors. This project demonstrates best practices in React development, automated testing, and a robust CI/CD pipeline using GitHub Actions with deployment to GitHub Pages.

---

## 🚀 Live Demo

Check out the latest deployed version here:  
[https://aungaung-drlinuxer.github.io/color-organizer-test/](https://aungaung-drlinuxer.github.io/color-organizer-test/)

---

## 📜 Quote of the Day

<!--START_QUOTE-->
A goal is a dream with a deadline. - Napoleon Hill
<!--END_QUOTE-->

---

## Features

- **Add New Colors:** Enter a title and select a color to add to your collection.
- **Rate Colors:** Click stars to rate each color from 1 to 5.
- **Remove Colors:** Easily delete any color from your list.
- **Persistent Data:** Initial color data is loaded from a JSON file.
- **Modern UI:** Clean, responsive interface using React and react-icons.
- **Automated Testing:** Uses React Testing Library for reliable component tests.
- **CI/CD:** Automated build, test, and deploy on every push to `main`.

---

## Getting Started

### Prerequisites

- Node.js (18.x or later recommended)
- npm

### Local Development

1. **Clone the repository:**

    ```bash
    git clone https://github.com/aungaungmyomyint/color-organizer-test.git
    cd color-organizer-test
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The app will be available at [http://localhost:3000/color-organizer](http://localhost:3000/color-organizer)

### Running Tests

- To run all tests:

    ```bash
    npm test
    ```

  Tests use React Testing Library and cover rendering and core UI components.

### Building for Production

- To create a production build:

    ```bash
    npm run build
    ```

  The optimized build will be output to the `build/` directory.

---

## CI/CD with GitHub Actions

This project uses a two-stage workflow defined in `.github/workflows/ci-cd.yml`:

1. **Build Job:**
    - Checks out code
    - Sets up Node.js 18.x
    - Installs dependencies with `npm ci`
    - Builds the app
    - Runs tests
    - Uploads the production build as an artifact
2. **Deploy Job:**
    - Downloads the build artifact
    - Deploys to GitHub Pages using [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)
    - Publishes to the `gh-pages` branch for public access

Deployment is automatic on every push to `main`.

---

## Project Structure

- `src/` — React source code (components, context, hooks, and styles)
- `public/` — Static assets and the main HTML template
- `.github/workflows/` — CI/CD pipeline configuration
- `color-data.json` — Initial color data

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

- [Aung Aung Myo Myint](https://github.com/aungaungmyomyint)
