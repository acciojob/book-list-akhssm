document.addEventListener("DOMContentLoaded", () => {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const isbnInput = document.getElementById("isbn");
  const submitBtn = document.getElementById("submit");
  const bookList = document.getElementById("book-list");

  submitBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

    if (!title || !author || !isbn) {
      alert("Please fill in all fields");
      return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="delete">X</button></td>
    `;
    bookList.appendChild(row);

    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
  });

  bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.closest("tr").remove();
    }
  });
});
