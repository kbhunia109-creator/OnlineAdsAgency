document.addEventListener("DOMContentLoaded", function(){

fetch("includes/header.html")
.then(response => response.text())
.then(data => {

    document.getElementById("header-container").innerHTML = data;


    // restart mobile menu
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "1199",
        meanExpand: '<i class="fal fa-plus"></i>'
    });


});

});