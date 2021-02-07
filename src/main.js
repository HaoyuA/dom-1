const div = dom.create('<div id = "newDiv">newDiv</div>');
const div3 = dom.create('<div id = "parent"></div>');
console.log(123);
dom.after(test, div);

dom.wrap(test, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, "title", "Hi welcome");
const title = dom.attr(test, "title");
console.log(`title: ${title}`);
dom.style(test, { color: "blue", border: "1px solid red" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid black");

dom.class.add(test, "red");
dom.class.add(test, "blue");
dom.class.remove(test, "blue");
console.log(dom.class.has(test, "red"));

let fn = () => {
  console.log("hi");
};
dom.on(test, "click", fn);

console.log(dom.find(".red", test)[0]);

console.log(dom.index(test));
