## Put Stuff On Website

**PLEASE DO NOT USE THIS**

a shitty javascript ui framework

### Use (but please do not)

link directly to umd build -
`https://unpkg.com/put-stuff-on-website@1.1.0`
or
`npm i put-stuff-on-website --save` (but don't do this)

### Example

 ```js
import { createStore, render } from "put-stuff-on-website";
const initialState = {
  whatShouldIdoWithThis: "probably not use it"
};

function updater(state, { type, payload }) {
  let newState = Object.assign({}, state);
  switch(type) {
    case "PLEASE_DO_NOT_USE_THIS": {
      newState.busLine = payload;
      break;
    }
    default: {
      newState = state;
    }
  }
  return newState;
}

const store = createStore({ updater, state: initialState });
function App({ whatShouldIDoWithThis }) {
  return {
    tagName: "div",
    props: {
      className: "my-div",
      onclick:  () => store.dispatch({ type: "PLEASE_DO_NOT_USE_THIS", payload: "i said please"})
    },
    children: [
      {
        tagName: "span",
        children: whatShouldIDoWithThis
      }
    ]
  };
  store.subscribe(state =>  render(App({ whatShouldIDoWith: initialState.whatShouldIDoWithThis }), #root));
  render(App({ whatShouldIDoWith: initialState.whatShouldIDoWithThis }), #root);
} 
```

### Projects Using This
* - https://github.com/conorhastings/basic-bus (note this is my project, you still shouldn't use this)
