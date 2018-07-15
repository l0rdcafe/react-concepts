/* eslint-disable no-debugger */

import h from "virtual-dom/h";
import diff from "virtual-dom/diff";
import patch from "virtual-dom/patch";
import helpers from "./helpers";

let state = { items: ["nice", "jacket"] };
let time;

function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getNextString() {
  const words = "I'm saying the truth you jacket wearing nice maker doge".split(" ");
  return words[Math.floor(Math.random() * words.length)];
}

function render(data) {
  /*
  const span = `<span id="count">Words: ${data.items.length}</span>`;
  const lis = data.items.map((item, i) => `<li id="${i}">${item}</li>`);
  return `${span}<ul>${lis.join("")}</ul>`;
         */

  return [
    h("div", {}, [
      h("span", { id: "count" }, data.items.length),
      h("ul", {}, data.items.map((item, i) => h("li", { id: i }, item)))
    ])
  ];
}

function updateTimeUI() {
  helpers.qs("#time-pos").innerHTML = `Position ${time.pos + 1} of ${time.history.length}`;
  const backBtn = helpers.qs("#back");
  const nextBtn = helpers.qs("#next");

  if (time.pos <= 0) {
    backBtn.setAttribute("disabled", true);
  } else {
    backBtn.removeAttribute("disabled");
  }

  if (time.pos >= time.history.length - 1) {
    nextBtn.setAttribute("disabled", true);
  } else {
    nextBtn.removeAttribute("disabled");
  }
}

function saveState() {
  time = time || { history: [], pos: -1 };
  time.history.splice(time.pos + 1);
  time.history.push(deepcopy(state));
  time.pos += 1;
  updateTimeUI();
}

function create(el) {
  const elm = helpers.newEl(el.tagName.toLowerCase());
  Object.keys(el.properties).forEach(key => {
    elm.setAttribute(key, el.properties[key]);
  });

  el.children.forEach(child => {
    if (child.text) {
      elm.innerHTML = child.text;
    } else {
      elm.appendChild(create(child));
    }
  });
  return elm;
}

let tree = render(state);
let root = tree.map(create)[0];
const ui = helpers.qs("#ui");
ui.appendChild(root);

function updateUI(loading) {
  if (!loading) {
    saveState();
  }

  /*
  helpers.qs("#ui").innerHTML = render(state);
      */

  const vTree = render(state);
  console.log(vTree);
  const patches = diff(tree, vTree);
  console.log(patches);
  root = patch(root, patches);
  tree = vTree;
}

helpers.$delegate(helpers.qs("#ui"), "li", "click", e => {
  state.items.splice(e.target.id, 1);
  updateUI();
});

helpers.$on(helpers.qs("#add"), "click", () => {
  state.items.push(getNextString());
  updateUI();
});

updateUI();

helpers.$on(helpers.qs("#back"), "click", () => {
  time.pos -= 1;
  updateTimeUI();
  state = deepcopy(time.history[time.pos]);
  updateUI(true);
});

helpers.$on(helpers.qs("#next"), "click", () => {
  time.pos += 1;
  updateTimeUI();
  state = deepcopy(time.history[time.pos]);
  updateUI(true);
});
