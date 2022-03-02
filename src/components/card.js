import axios from "axios";


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const Card = (article) => {

  console.log(article);
  const articleCard = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imageCont  = document.createElement("div");
  const image = document.createElement("img");
  const authName = document.createElement("span");

  articleCard.appendChild(headlineDiv);
  articleCard.appendChild(authorDiv);
  authorDiv.appendChild(imageCont);
  imageCont.appendChild(image);
  authorDiv.appendChild(authName);

  articleCard.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imageCont.classList.add("img-container");
  headlineDiv.textContent = article.headline;
  image.src = article.authorPhoto;
  authName.textContent = `By ${article.authorName}`;

  articleCard.addEventListener("click", () => {
    console.log(article.headline);
  });

  console.log(articleCard);
  return articleCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const parentElement = document.querySelector(selector)
  console.log(selector);
  axios.get(`http://localhost:5000/api/articles`)
    .then(resp => {
      const articleTopics = resp.data.articles;
      
      const allArticles = Object.values(articleTopics).flat();
      console.log(allArticles);
      allArticles.map(article => parentElement.appendChild(Card(article)) ); 
      })

    .catch(err => {
      console.error(err);
    })
    .finally(() => console.log("DONE loading articles in cardAppender"))

}


export { Card, cardAppender }
