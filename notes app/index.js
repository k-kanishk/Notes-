const classofbox= document.querySelector(".box");

const classofbtn= document.querySelector(".button");
let classofinp=document.querySelectorAll(".inp")


classofbtn.addEventListener('click', ()=>{
let inp= document.createElement("p");
let img=document.createElement("img");
inp.className="inp";
img.className="imgdlt";
inp.setAttribute("contenteditable","true");
img.src="./images/delete.png";
classofbox.appendChild(inp).appendChild(img);
})



classofbox.addEventListener('click', function(e){
if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
}
})