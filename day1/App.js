// 1. simple js to modify real dom using document API
/*
    let rootElement = document.createElement("h1");
    rootElement.innerText = "Hello World !";
    let bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.appendChild(rootElement);

    function toggleElement() {
      console.log("function got called");
      let rootElement = document.getElementById("root");
      console.log(rootElement);
      rootElement.style.display =
        rootElement.style.display === "none" ? "block" : "none";
    }
    */

//2. React code to DOM manipulation
let heading = React.createElement("h1", {}, "Hello There From React Bhai !");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
console.log(heading);

root.render(heading);

// 3. Way to create multiple children to element
// <div id="parent">
// <h1 id="heading">This is the Heading</h1>
// <div id="detailed-info">
//  <p id="info-container">This contains the detailed info about the news</p>
// </div>
// </div>
//
let new_document = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "heading" }, "This is the HeadLine"),
  React.createElement(
    "div",
    { id: "detailed-info" },
    React.createElement(
      "p",
      { id: "info-container" },
      "This contains the detailed info about the news"
    )
  ),
]);

root.render(new_document);
