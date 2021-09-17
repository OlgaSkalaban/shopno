// Get the modal
var popup = document.getElementById('popup');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('feature-works__image');
var popupImg = document.getElementById("popup__image");
var captionText = document.getElementById("popup__caption");
img.onclick = function(){
    popup.style.display = "block";
    popupImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    popup.style.display = "none";
}