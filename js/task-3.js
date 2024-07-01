// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');

// nameInput.addEventListener('input', () => {
//   const inputText = nameInput.value.trim();

//   if (inputText === '') {
//     nameOutput.textContent = 'Anonymous'; 
//   } else {
//     nameOutput.textContent = inputText; 
//   }
//   // console.log(inputText);
// });





// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>



// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як імя для привітання. Обовязково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".


// На що буде звертати увагу ментор при перевірці:

// На елементі input#name-input прослуховується подія input
// Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як імя для привітання
// Значення в інпуті очищене від пробілів по краях
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"