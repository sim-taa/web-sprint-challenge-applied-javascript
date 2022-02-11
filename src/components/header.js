const Header = (title, date, temp) => {
  const heading = document.createElement("div"); // <div></div>
  const spanning1 = document.createElement("span"); // <span></span>
  const titling = document.createElement("h1"); // <h1></h1>
  const spanning2 = document.createElement("span"); // <span></span>

  spanning1.textContent = date;
  titling.textContent = title;
  spanning2.textContent  = temp;

  heading.appendChild(spanning1); // <div><span></span></div>
  heading.appendChild(titling); // <div><span><h1></h1></span>
  heading.appendChild(spanning2);

  heading.classList.add("header");
  spanning1.classList.add("date");
  spanning2.classList.add("temp");
  

  return heading;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>no
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}


const headerAppender = (selector) => {
  //const selector = ".entry"; //this is from the example, seems very wrong
  //const entryPoint = document.querySelector(selector); //this is from the example, seems very wrong
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

}

export { Header, headerAppender }
