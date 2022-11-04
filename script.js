document.addEventListener("DOMContentLoaded", ()=>{
    var mapArea1 = document.getElementById("branch-1-area");
    var cardInfo1 = document.getElementsByClassName("card-info-1")[0];
    var upBranch = document.getElementsByClassName("branch-1-up")[0];
    var downBranch = document.getElementsByClassName("branch-1-down")[0];

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
