function updatep() {
    let para = document.getElementById("saletext");
    if(window.innerWidth <= 768){
        para.textContent = "Adobe Summer Sale!";
    }
    else {
      para.textContent = "Adobe Summer Sale! Save on select plans including All Apps, Photoshop, and more. Ends Jul 30.";
    }
}
    window.addEventListener("load", updatep);
    window.addEventListener("resize", updatep);