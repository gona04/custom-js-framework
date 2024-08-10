function render(element, content) {
    console.log(element);
    const app = document.querySelector(element);
    if(app !== null) {
        app.innerHTML = content;
    }
}

function reactive(obj) {
    //Get a list of all the keys
    const keys = Object.keys(obj);
    
    reactiveObj = {};
    keys.forEach((key) => {
        let value = obj[key];
        Object.defineProperty(reactiveObj, keys, {
            get() {
                console.log(`Getting value ${value}`);
                return value;
            },
            set(newValue){
                console.log(`new value is ${newValue}`);
                value = newValue;
                renderApp();
            }
        })
    })
    return reactiveObj;
}