let main = document.querySelector("main");
let modal_img = document.querySelector("#modal")
let modal_tittle = document.querySelector(`#modal-tittle`)
let modal_category = document.querySelector("#modal-category")

let fetchAPI = async()=> {
    let reponse = await fetch("https://api.github.com/users");
    let data = await reponse.json();
    displayData(data);
};
fetchAPI(); //--> for fetching data from API

// below function is to create elements dynamically and display the data on the UI 

function displayData(data) {
    console.log(data);
    data.map((obj)=>{
        console.log();
        let {login,avatar_url,title,id} = obj // destructuring object

        // --> creating <article> tag

        let article = document.createElement("article")

        // --> setting attribute for <article> tag
        article.setAttribute("class","profile-container")

        // ----> creating <img> tag <-----
        let img = document.createElement("img");
        img.setAttribute("src", avatar_url);
        img.setAttribute("class","user-image")

        // -----> creating <section> tag and setting class attribute <-----
        let section = document.createElement("section")
        section.setAttribute("class", "product-details")

        // -----> creating <h1> tag and setting  attribute <-----
        let productTitle = document.createElement("h1")
        productTitle.innerText=title

        // -----> creating <h2> tag and setting  attribute <-----
         
        let productId = document.createElement("h2")
        productId.innerText=id

        section.append(productTitle,productId)
        article.append(img,section);
        
        // ------> creating <aside> tag for button<------
        let rightside = document.createElement("aside")
        rightside.setAttribute("class","right-side")

        // ------> creating <button> tag and setting attribute<------
        let viewMoreBtn = document.createElement("button")
        viewMoreBtn.innerText="view more"

        viewMoreBtn.addEventListener("click",()=>{
            console.log("clicked");
            modal_img.setAttribute("src",avatar_url)
            modal_tittle.innerHTML=title
            modal_category.innerText=category 
        })

        rightside.append(viewMoreBtn)
        section.append(leftside, rightside);

        article.append(img,section);
        
        main.append(article)
    });
    
} 




