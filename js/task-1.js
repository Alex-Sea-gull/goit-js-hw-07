const quantityLiItem = document.querySelectorAll(".form-item")
console.log(`Number of categories: ${quantityLiItem.length}`);

quantityLiItem.forEach(category => {
    const title = category.querySelector('.form-titles').textContent;
    const items = category.querySelectorAll('.form-list-item');

    console.log(`category: ${title}`);
    console.log(`Elements: ${items.length}`);
})


// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

