// -----> by using second api<---
let main = document.querySelector("main");
let fetchAPI = async () => {
  let response = await fetch(
    "https://mocki.io/v1/3e8b8404-82e7-480c-b514-5c6aeb6fe629"
  );
  let data = await response.json();
  displayData(data);
};
fetchAPI();
function displayData(data) {
  console.log(data);
  data.map((obj) => {
    console.log(obj);
    let { title, image, price,description } = obj;
    let article = document.createElement("article");
    let img = document.createElement("img");

    article.setAttribute("class", "profile-container");
    img.setAttribute("src", image);
    img.setAttribute("class", "user-image");

    //! creating <section> tag and class attributes
    let section = document.createElement("section");
    section.setAttribute("class", "product-details");

    //! creating <h1> tag and setting attribute
    let productTitle = document.createElement("h1");
    productTitle.setAttribute("class", "prod-title-1");
    productTitle.innerText = title;

    //! creating <h2> tag and setting attribute
    let priceTitle = document.createElement("h2");
    priceTitle.setAttribute("class", "prod-title-2");
    priceTitle.innerHTML = `<i>&dollar;  ${price}</i>`;

    //!creating <aside> tag for price and title
    let leftAside = document.createElement("aside");
    leftAside.setAttribute("class", "left-side");

    //!creating <aside> atg for button
    let rightAside = document.createElement("aside");
    rightAside.setAttribute("class", "right-side");

    //!creating <button> actually
    let viewMorebtn = document.createElement("button");
    viewMorebtn.innerText = "VIEW MORE";

    //! creating a pop up container
    let popupContainer = document.createElement("div");
    popupContainer.setAttribute("class", "popup");
    popupContainer.style.display = "none"; // initially hide

    //! creating a pop up content
    let popupContent = document.createElement("div");
    popupContent.setAttribute("class", "popup-content");

    //! creating a close button for the popup
    let closeButton = document.createElement("span");
    closeButton.setAttribute("class", "close");
    closeButton.innerHTML = "&times;";

    //! creating a <p> tag for description in the popup
    let popupDescription = document.createElement("p");
    popupDescription.innerText = description

    section.append(leftAside, rightAside);
    leftAside.append(productTitle, priceTitle);
    rightAside.append(viewMorebtn);
    popupContent.append(closeButton, popupDescription);
    popupContainer.append(popupContent);
    article.append(img, section, popupContainer);
    main.append(article);

    //! Adding event listener to the VIEW MORE button to display the popup
    viewMorebtn.addEventListener("click", function() {
      popupContainer.style.display = "block";
    });

    //! Adding event listener to the close button to close the popup
    closeButton.addEventListener("click", function() {
      popupContainer.style.display = "none";
    });
  });
}