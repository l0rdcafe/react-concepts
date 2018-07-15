function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

function qsa(selector, scope) {
  return (scope || document).querySelectorAll(selector);
}

function newEl(elm) {
  return document.createElement(elm);
}

function $on(target, type, cb, useCapture) {
  target.addEventListener(type, cb, !!useCapture);
}

function $delegate(target, selector, type, handler) {
  const useCapture = type === "blur" || type === "focus";
  $on(target, type, dispatchEvent, useCapture);

  function dispatchEvent(event) {
    const targetElement = event.target;
    const potentialElements = qsa(selector, target);
    const hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

    if (hasMatch) {
      handler.call(targetElement, event);
    }
  }
}

export default { qs, qsa, $on, newEl, $delegate };
