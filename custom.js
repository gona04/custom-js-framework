function render(element, content) {
    console.log(element);
    const app = document.querySelector(element);
    if(app !== null) {
        app.innerHTML = content;
    }
}