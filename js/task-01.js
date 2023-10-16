const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Total categories: ${items.length}`);

items.forEach(item => {
  const title = item.firstElementChild;
  const subCategories = item.lastElementChild.children;

  console.log(`Category: ${title.textContent}`);
  console.log(`Number of items: ${subCategories.length}`);
});