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

## License

Add a license file (MIT is a common default for learning projects).
