function createStore({ updater, state, subscribers = [] }) {
  function dispatch(action) {
    state = updater(state, action);
    subscribers.forEach(subscriber => subscriber(state));
  }

  function subscribe(fn) {
    subscribers.push(fn);
    return function() {
      if (subscribers.indexOf(fn) !== -1) {
        subscribers.splice(subscribers.indexOf(fn), 1);           
      }
    }
  }

  function getState() {
    return state;
  }

  return { getState, subscribe, dispatch };
}

function createElement({ tagName, props = {}, children = [], parent }) {
  children = !Array.isArray(children) ? [children] : children;
  const element = document.createElement(tagName);
  Object.keys(props).forEach(prop => {
    element[prop] = props[prop];
  });
  if (parent) {
    parent.appendChild(element);
  }
  if (children.length) {
    children.forEach(child => {
      if (typeof child === "string" || typeof child === "number") {
        element.innerText = child;
      }
      else {
        createElement(Object.assign({}, child, { parent: element }));
      }
    });
  }
  return element;
}

function render(component, selector) {
  document.querySelector(selector).appendChild(createElement(component));
}

export { createStore, createElement, render };

