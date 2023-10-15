const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Total categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const subCategories = item.querySelectorAll('li');
    
  console.log(`Category: ${title}`);
  console.log(`Number of items: ${subCategories.length}`);
});