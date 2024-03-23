// function proccesCall(recipient, onAvailable, onNotAvailable) {
//   const isRecipientAvailable = Math.random() > 0.6;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name},очікуйте...`);
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний,залиште повідомлення.`);
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний,записуємо голограму.`);
// }

// proccesCall("Mango", takeCall, activateAnsweringMachine);
// proccesCall("Poli", takeCall, leaveHoloMessage);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const avarageRating = (totalRating / books.length).toFixed(1);

// console.log(avarageRating);

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }
/*==========================================*/

// numbers.forEach(function (number, i) {
//   console.log(`Індекс ${number}, значення ${numbers[i]}`);
// });

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Ківі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
//   { name: "Ківі", score: 62 },
// ];

// МЕТОДЫ Map() AND FILTER()

// const namesStudent = students
//   .map((student) => student.name)
//   .filter((i, index, array) => array.indexOf(i) === index);
// console.log(namesStudent);

// const studentScore = students
//   .map((student) => student.score)
//   .filter((score) => score >= 60)
//   .sort((a, b) => b - a);
// console.log(studentScore);

// const okName = students.findIndex((student) => student.name === "Манго");
// console.log(okName);

/*======================THIS===================*/

// const polina = {
//   username: "Polina",

//   showName() {
//     console.log(this.username);
//   },
// };
// polina.showName();

// ===============CALL===================

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username} у наш готель ${this.hotel}.`);
// }

// const mango = {
//   username: "Манго",
//   hotel: "Plaza",
// };
// const poly = {
//   username: "Полі",
//   hotel: "Delfin",
// };

// greetGuest.call(mango, "Ласкаво просимо");
// greetGuest.call(poly, "З прибуттям");

// ==================BIND================
// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter("Манго"));

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// console.log(gmailGreeter("Полі"));

// =====CALLBACK BIND=============

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   callback();
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer));

// const saveBtn = document.querySelector(".btn");

// const handleBtn = (event) => {
//   console.log(event);
// };
// saveBtn.addEventListener("click", handleBtn);
// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// const handleInput = (event) => {
//   output.textContent = event.currentTarget.value;
// };

// textInput.addEventListener("input", handleInput);
