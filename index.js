function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
renderBooks(fetchBooks);
function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

// function fetchBooks() {
//   fetch("https://anapioficeandfire.com/api/books")
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Error: " + response.status);
//       }
//     })
//     .then((data) => {
//       // Handle the response data
//       console.log(data);
//     })
//     .catch((error) => {
//       // Handle any errors that occurred during the request
//       console.error(error);
//     });
// }
