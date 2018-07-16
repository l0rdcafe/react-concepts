/* eslint-disable no-debugger */

import h from "virtual-dom/h";
import diff from "virtual-dom/diff";
import patch from "virtual-dom/patch";
import helpers from "./helpers";

let state = { items: ["nice", "jacket"] };
let time;
let root = helpers.qs("#ui");
let tree = [];

function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getNextString() {
  const words = "I'm saying the truth you jacket wearing nice maker doge".split(" ");
  return words[Math.floor(Math.random() * words.length)];
}

function render(data) {
  return h("div", {}, [
    h("span", { id: "count" }, data.items.length),
    h("ul", {}, data.items.map((item, i) => h("li", { id: i }, item)))
  ]);
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

function updateUI(loading) {
  if (!loading) {
    saveState();
  }

  const newTree = render(state);
  const patches = diff(tree, newTree);
  root = patch(root, patches);
  tree = newTree;
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
