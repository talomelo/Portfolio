window.onload = function() {
    document.querySelector(".menu-mobile").addEventListener("click", function() {
        if(document.querySelector(".menu-option ul").style.display == 'flex') {
            document.querySelector(".menu-option ul").style.display = 'none';
        } else {
            document.querySelector(".menu-option ul").style.display = 'flex';
        }
    })
} 