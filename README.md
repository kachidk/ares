# README.md

# ⚔ Ares

## 1. Features

- [Next.js](https://nextjs.org/)
- Next 12, React 17
- Typescript
- [Tailwind CSS](https://tailwindcss.com/) A utility-first CSS framework
- Absolute Imports
- PWA via [next-pwa](https://github.com/shadowwalker/next-pwa)
- State management via [zustand](https://github.com/pmndrs/zustand)

## 2. Pre-packed

### 2.1. UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/) A utility-first CSS framework

### 2.2. Icons

- [react-icons](https://react-icons.github.io/react-icons/)

### 2.3. Libraries

- [Emotion JS](https://emotion.sh/docs/introduction) CSS-IN-JS
- [react-use](https://github.com/streamich/react-use) Collection of essential React Hooks
- [Zustand](https://github.com/pmndrs/zustand) A small, fast and scalable bearbones state-management
  solution
- [clsx](https://github.com/lukeed/clsx) A tiny (228B) utility for constructing className strings
  conditionally
- [next-pwa](https://github.com/shadowwalker/next-pwa) Zero Config PWA Plugin for Next.js

### 2.4. Dev Tools

- [TypeScript](https://www.typescriptlang.org/)

## 3. Install (Setup)

### 3.1. GitHub Template

[Create a repo from this template on GitHub](https://github.com/kachidk/ares/generate)

### 3.2. Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit kachidk/ares my-ares-app
cd my-ares-app

```

## 4. After Install

- [ ] Clean up the READMEs

## 5. Folder Structure (Recommended)

You can use this structure as a template as your project scales.

### 5.1. `./public/*`

- `assets`: This folder should be used for storing static assets, i.e. images, svgs, fonts, etc.

### 5.2. `./src/*`

- `components`: This folder should be used for storing dumb components (components without complex
  side effects) used globally across multiple pages i.e. buttons, cards, etc.
- `containers`: This folder contains components with complex side effects, i.e. Imagine a component
  that gets inputs from the user to determine the location, with the component also exposing an
  `onSuccess` callback prop to perform an action after successfully getting the location.
- `data`: The `data` folder is similar to the `assets` folder, but used for storing data files such
  as JSON files and constants used globally throughout the application.
- `features`: This folder works by grouping and colocating by feature. It should contain all the
  logic, tests, styles, components, hooks, etc. related to that feature i.e. authentication to be
  exported as pages, keeping the `pages` directory tidy.
- `hooks`: This folder is for storing custom hooks used globally across multiple pages.
- `layouts`: This is just a special folder for placing any layout-based components, i.e. header,
  sidebar, etc.
- `lib`: This folder contains configurations for the various different libraries you use in your
  project, i.e. `axios`.
- middleware
- `pages`: This folder should contain one file per page and the reason for this is that all the
  logic for the features on the pages are in the features folder.
- `services`: This folder contains all your code for interfacing with any external API. i.e.
  `react-query`.
- `store`: The is where you store all your state management files i.e. contexts, redux, etc.
- `styles`: This folder is used for storing styles used globally throughout the application i.e.
  your tailwind CSS file can be here, as well as global CSS variables.
- `types`: This folder should store global types. And also store custom declarations that go in the
  global namespace, or augment existing declarations in the global namespace.
- `utils`: This folder is for storing all utility functions; store only pure functions, without
  complex side effects, i.e. date formatters.

<p align='center'>
Inspired by <a href="https://vitesse.netlify.app/">Vitesse<a/>
</p>
