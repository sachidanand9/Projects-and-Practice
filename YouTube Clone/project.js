let main = document.querySelector("main");
let right= document.querySelector("#right-side")
let left=document.querySelector("#left-side")
let space=document.querySelector(".vidspc")
let detail=document.querySelector(".viddetail")
let closeButton = document.querySelector(".close-button");



let fetchAPI = async () => {
  let response = await fetch(
    "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
  );
  let data = await response.json();
  displayData(data);
};
fetchAPI();
function displayData(data) {
  console.log(data);
  data.map((obj) =>{
let{thumbnailUrl,title,uploadTime,views,videoUrl,description,subscriber}=obj;
// todo------- creating right side to display all types
let rightside=document.createElement("article")
rightside.setAttribute("class","content")

// todo-----we will Add thumbnails of videos
let thumbnail=document.createElement("img")
thumbnail.setAttribute("src",thumbnailUrl)
thumbnail.setAttribute("class","thumbnail")

// todo------we will add title
// ? first we need to create a container

let viddetail=document.createElement("section")
viddetail.setAttribute("class","video-detail")

//todo-----now we will add title

let t1=document.createElement("h1")
t1.setAttribute("class","video-title")
t1.innerText=title

// decription of video
let d1=document.createElement("p")
d1.setAttribute("src",description)
d1.setAttribute("class","video-desc")
d1.innerText=description

let sub=document.createElement("h1")
sub.setAttribute("class","subs")
sub.innerText= `subscriber : ${subscriber}`

// todo ---- we add views to the details
let view=document.createElement("h5")
view.setAttribute("class","view-stat")
view.innerText=`Views: ${views} `
// todo------we will now data upload date and time
let date=document.createElement("h5")
date.setAttribute("src",uploadTime)
date.setAttribute("class","video-date")
date.innerText= `Date : ${uploadTime}`

// todo ---- now we add button to watch the video
let button=document.createElement("button")
button.innerText="Watch video"
// todo we will add event to the button
button.addEventListener("click",()=>{
  let video = document.createElement("video");
  video.setAttribute("src", videoUrl);
  video.setAttribute("class", "video");
  video.setAttribute("controls", true); 
 


  space.appendChild(video);
  space.appendChild(t1);
  space.appendChild(view);
  space.appendChild(date);
  space.appendChild(sub);

  space.appendChild(d1); // Append description
  let closeButton=document.createElement("button")
closeButton.innerText="close video"

  closeButton.addEventListener("click", () => {
    // Remove any existing video element
   space.innerText=''
  })
  space.appendChild(closeButton);


})
// todo----we will add space on left side

rightside.append(thumbnail);
rightside.append(viddetail);
viddetail.append(t1,view,date);
viddetail.append(button);
right.appendChild(rightside);


  })
}