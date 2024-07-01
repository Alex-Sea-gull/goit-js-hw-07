// "use strict";

// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     alt: "Alpine Spring Meadows",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     alt: "Nature Landscape",
//   },
//   {
//     url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     alt: "Lighthouse Coast Sea",
//   }
// ];

// const imageContainerElement = document.querySelector('.gallery');

// const createImageMarkup = images => {
//   const markup = images.map(image => `
//     <li class="gallery-item">
//       <img src="${image.url}" alt="${image.alt}">
//     </li>
//   `)
//     .join('');
//   // console.log(markup);
//   return markup
// }
// imageContainerElement.innerHTML = createImageMarkup(images);
// console.log(imageContainerElement.innerHTML);




/* Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery. <ul class="gallery"></ul>Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.


Ти можеш створити й додати HTML-елементи,
використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML(). Усі елементи галереї повинні додаватися в DOM за одну операцію додавання. Додай мінімальне оформлення галереї флексбоксами через CSS класи.

На що буде звертати увагу ментор при перевірці: Створена й додана в DOM галерея із трьох зображень Галерея додана у список ul.gallery і являє собою 3 елементи <li>,
в які вкладені елементи <img>Для створення елементів <img>використані дані з масиву обєктів images Усі елементи галереї додані в DOM за одну операцію додавання Є мінімальне оформлення галереї флексбоксами через CSS класи */

// const UlElement = document.createElement("li")
// for (let i = 1; i <= 6; i += 1) {
//   const liElement = document.createElement('li');
//   liElement.textContent = `Li number ${i}`;
//   // console.log(liElement);

//   const imgElement = document.createElement('img');
//   imgElement.src = images.url;
//   imgElement.alt = images.alt;
//   // console.log(imgElement);


//   UlElement.append(liElement);
// }

// console.log(UlElement);