let main= document.querySelector("main");
let modal_img=document.querySelector("#modal-img")
let modal_title=document.querySelector("#modal-title")
let modal_category = document.querySelector("#modal-category")
let modal_desc=document.querySelector("#modal-desc")
let modal_container=document.querySelector("#modal-container")
let close_btn=document.querySelector("#closeBtn")

let fetchData= async()=>{
    let response= await fetch("https://mocki.io/v1/e39d6fb8-08d2-441a-9f6c-188ef517d232")
    console.log(response);
    let data = await response.json();
    console.log(data);
    displayData(data);
}
fetchData(); //* 

function displayData(data)
{
    console.log(data);
    data.map((obj)=>{
        console.log(obj);
let {login,avatar_url,id,node_id,type}=obj ;

let article= document.createElement("article")

article.setAttribute("class","profile-container");



 //! creatig <img> tag and setting class attribute
let img = document.createElement("img");
img.setAttribute("src",avatar_url);
img.setAttribute("class","user-image");

//! creating <section> tag and setting attribute
let section=document.createElement("section")
section.setAttribute("class","product-details");

//! creating <h1> tag and setting attribute
let productTitle = document.createElement("h1")
productTitle.innerText=login;
let loginid = document.createElement("h1");
loginid.innerHTML=`<i>&dollar;${id}</i>`;

let leftside=document.createElement("aside")
leftside.setAttribute("class","left-side")
leftside.append(productTitle,loginid)

let rightside=document.createElement("aside")
rightside.setAttribute("class","right-side")


let button1=document.createElement("button");
// btn.setAttribute("class","button1");
button1.innerText="VIEW MORE";
button1.addEventListener("click",()=>{
    console.log("clicked");
    modal_img.setAttribute("src",avatar_url)
    modal_title.innerText=node_id;
    modal_category.innerText=type;
    modal_desc.innerText=login;
    modal_container.style.display="block"
    main.style.overflow="hidden"
    // main.style.filter="blur(5px)"
    close_btn.addEventListener("click",()=>{
        console.log("clicked");
        modal_container.style.display="none"

    })

})

rightside.append(button1);
section.append(leftside,rightside);
article.append(img,section);
main.append(article);
    })
}