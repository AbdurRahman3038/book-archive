const searchBook = () => {
  const searchInput = document.getElementById('search-input');
  const searchText = searchInput.value;

  if (searchText === '') {
    const bookAmount = document.getElementById('book-amount');
    bookAmount.style.display = "block";
    bookAmount.innerText = "Please type a Book Name!!!";

    document.getElementById('display-books').innerHTML = '';
  }
  else {
    searchInput.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data.docs));
  }

}


const displaySearchResult = books => {
  document.getElementById('display-books').innerHTML = '';

if(books.length === 0){
  const bookAmount = document.getElementById('book-amount');
  bookAmount.style.display = "block";
  bookAmount.innerText = "No Result Found!!!";
}

  else{
    const bookAmount = document.getElementById('book-amount');
  bookAmount.style.display = "block";
  bookAmount.innerText = `Number of Books found ${books.length} out of 9900`;



  books.forEach(book => {

    // const bookFilter = book.filter(searchBook => searchBook.title === document.getElementById('search-input') )
    //         console.log(bookFilter);

    const displayBooks = document.getElementById('display-books');

    const div = document.createElement('div');
    div.classList.add('col');

    const imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

    div.innerHTML = `
        <div class="card h-100">
            <img style=" height: 400px" src="${imageUrl}" class="card-img-top img-fluide" alt="...">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <h6 class="card-title">${book.author_name}</h6>
              <p class="card-text">${book.publisher}</p>
              <p class="card-text">${book.first_publish_year}</p>
              
            </div>
          </div>
        `;

    displayBooks.appendChild(div);
  });

  }
}

// const displayBookAmount = books =>{

//   books.forEach(book =>{
//     const displayAmount = document.getElementById('book-amount');
//     const div = document.createElement('div');
//           div.classList.add('w-25 mx-auto');
//           div.innerHTML =`
//           <p>Number of Books Found ${book} </p>
//           `;
//   });
// }