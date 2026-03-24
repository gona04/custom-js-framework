# Custom JS Framework

A tiny educational JavaScript micro-framework that demonstrates two core UI ideas:

1. **Rendering HTML into a mount point**
2. **Reactive state updates that trigger re-renders**

This project is intentionally minimal and great for learning how modern UI frameworks work under the hood.

---

## Why this exists

`custom.js` and `user/app.js` implement a very small framework-like runtime:

- `render(selector, html)` updates DOM content in a target element.
- `reactive(state)` returns an object whose property updates trigger `renderApp()`.
- `renderApp()` is your app-specific renderer.

In short: **state changes → UI re-renders**.

---

## Current project structure

```text
.
├── custom.js       # framework runtime (render + reactive)
├── index.html      # app entry point and script loading
├── user/app.js     # example app using the runtime
└── style.css       # optional styling file (currently empty)
```

---

## Quick start

Because this is plain HTML/CSS/JS, there is no build step.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Run a local server (recommended)

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## How the demo works

1. Initial state is set to `Hello Universe`.
2. `renderApp()` renders `<h1>` with `state.message`.
3. After 1 second, state changes to `Hello World`.
4. Reactive setter triggers `renderApp()`, and the DOM updates.

---

## License

Add a license file (MIT is a common default for learning projects).
