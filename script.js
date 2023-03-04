console.log("hi");
let myDiv = document.getElementById("div-container");


const searchInput = document.getElementById("search-field");
const searchInputValue = searchInput.value;

const searchButton = document.getElementById("search-now");
searchButton.addEventListener('change', myAsyncFunction )

async function myAsyncFunction(){
const response = await

fetch ("https://www.googleapis.com/books/v1/volumes?q=percy+jackson")
    const data = await response.json();
    if (data) {
        document.getElementById("div-container").style.display = "none";
      }
      
    let newHtml = data.items
    .filter((item) => item.volumeInfo.title.includes(searchInputValue) || item.volumeInfo.authors.includes(searchInputValue))
    .map((book, i) =>{
        console.log("book details",book.volumeInfo.title,i);
        return`
       <div>
      <img src ="${book.volumeInfo.imageLinks.smallThumbnail}"/>
       </div>`;
    });
    myDiv.innerHTML = newHtml;
}
setTimeout(myAsyncFunction, 2000);


// fetch ("https://www.googleapis.com/books/v1/volumes?q=percy+jackson")
// .then((response) => response.json())
// .then((data)=>{
//     let search = searchInput.value;
//     // console.log("books", data.books);
//     let newHtml = data.items.map((book, i) =>{
//         console.log("book details",book.volumeInfo.title,i);
//         return`
//        <div>
//       <img src ="${book.volumeInfo.imageLinks.smallThumbnail}"/>
//        </div>`;
//     });
//     myDiv.innerHTML = newHtml;
// });