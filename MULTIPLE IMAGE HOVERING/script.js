var items = document.querySelectorAll(".items");

items.forEach(function(item){
    var img = item.querySelector("img");

    item.addEventListener("mousemove", function(e){
        img.style.opacity = 1;
        img.style.left = e.offsetX + "px";
        img.style.top = e.offsetY + "px";
    });

    item.addEventListener("mouseenter", function(){
        img.style.opacity = 1;
    });

    item.addEventListener("mouseleave", function(){
        img.style.opacity = 0;
    });
});
