document.querySelectorAll(".modal-contenedor img").forEach(el => {
  el.addEventListener("click",function(ev){
    this.parentNode.classList.add("active");
  })
});
