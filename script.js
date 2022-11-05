document.addEventListener("DOMContentLoaded", ()=>{
    var mapArea1 = document.getElementById("branch-1-area");
    var cardInfo1 = document.getElementsByClassName("card-info-1")[0];

    mapArea1.addEventListener("mouseover", ()=>{
        cardInfo1.style.display = "block";
    })

    mapArea1.addEventListener("mouseout", ()=>{
        cardInfo1.style.display = "none";
    })

    imageMapResize();
    
})

$(document).ready(function() {
        $('#image-map').maphilight();
});
