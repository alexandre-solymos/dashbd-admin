function MenuToggle() {
  var element = document.querySelector("body");
  element.classList.toggle("open-menu");
}


function Active(e) {
  var elements = document.querySelector(".active");
  if(elements !==null){
    elements.classList.remove("active");
  }
 e.target.className = "active";
}
