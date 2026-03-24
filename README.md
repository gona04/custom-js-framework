# FluxLite.js (formerly **Custom JS Framework**)

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

## Important notes (current limitations)

This is a learning project, so a few framework-level features are intentionally missing:

- No virtual DOM / diffing
- No component system
- No event binding abstraction
- Global dependency on `renderApp()`
- Minimal error handling and state validation

If you plan to grow this project, consider adding:

- Dependency tracking
- Effect/watch API
- Component composition
- Better DOM patching strategy
- Tests

---

## Is the current name good?

### Current name: **Custom JS Framework**

It is understandable, but it is also very generic and hard to remember/search.

### Better naming criteria

A strong name should be:

- Short and memorable
- Related to purpose (reactivity/rendering)
- Distinctive enough for searchability

### Suggested names

- **FluxLite.js** *(recommended)*
- **ReacTiny.js**
- **SparkState.js**
- **MicroRender.js**
- **PulseJS**

If this project stays educational, **FluxLite.js** is a good balance of clarity and branding.

---

## Suggested next steps

1. Fix reactive property definition to bind each key correctly.
2. Add simple unit tests for `reactive()` and `render()`.
3. Add basic styles and a few interactive examples.
4. Add a tiny plugin or component API.

---

## License

Add a license file (MIT is a common default for learning projects).
