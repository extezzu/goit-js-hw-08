console.group("task 1");
const list = document.querySelectorAll('#categories > li.item').length;
console.log(`Number of categories: ${list}`);

const items = document.querySelectorAll(`#categories > li.item`);
items.forEach(item => {
const title = item.querySelector(`h2`).textContent.trim();
const count = item.querySelectorAll(`ul > li`).length;
console.log(`Category: ${title}`);
console.log(`Elements: ${count}`);
});
console.groupEnd();