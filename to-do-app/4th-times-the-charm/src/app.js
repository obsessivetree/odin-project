function* gen(num) {
  while (true) {
    yield num++;
  }
}
const colGen = gen(0);
const listGen = gen(0);
const itemGen = gen(0);

function Item(parentId, desc = "New Item") {
  return {
    id: itemGen.next().value,
    parentId: parentId,
    desc,
  };
}

function List(parentId, title = "New List") {
  return {
    id: listGen.next().value,
    title,
    items: {},
    parentId,
  };
}
function Collection(name) {
  const idNum = colGen.next().value;
  console.log(idNum);
  name !== null ? (name = `Collection ${idNum + 1}`) : (name = name);
  return {
    id: idNum,
    name,
    lists: {},
  };
}

let data = { 0: Collection("My First List") };
// data[0].lists[0] = List(0, "My First List");
// data[0].lists[0].items[0] = Item(0, "Item 1");
// let col = Collection("Col Name");
// let list = List("List Title", col.id);
// let item = Item("description", list.id);
// data[col.id] = col;
// col.lists[list.id] = list;
// list.items[item.id] = item;
// console.table(data);

export { Collection, List, Item, data };
