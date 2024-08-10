let state = reactive({message: `Hello Universe`});
function renderApp() {
    render('#container', `<h1> ${state.message} </h1>`);
}

renderApp();

//The above messge will not change after setTImeout
setTimeout(() => {
    state.message = `Hello World`;
    console.log(`Message changed to ${state.message}`);
},1000)