import "./dom";
import { List, Item, Collection, data, tableData } from "./app";
import { showCol, addColNav } from "./dom";

addColNav.addEventListener("click", () => {
  let colTitle = "";
  while (!colTitle) {
    colTitle = prompt("New collection title: \n");
  }
  new Collection(colTitle);
});
new Collection("First Collection");

console.clear();
