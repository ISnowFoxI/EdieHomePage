function navLinksVis (){ 
    let navLinks = document.getElementById("navigation")
    console.log(navLinks.style.display)
    if(navLinks.style.display=="block") { 
        navLinks.style.display="none";
    }
    else {
        navLinks.style.display="block";
    }
}
    


