// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  let newCats = [...cats, name];

  return newCats;
}

function prependCat(name) {
  let newCats = [name, ...cats];
  return newCats;
}
function removeLastCat() {
  return cats.slice(0, 2);
}
function removeFirstCat() {
  return cats.slice(1);
}
