

var randy = document.getElementById('menuBurger');
var kandy = document.getElementById('toggleDiv');
var ismael = document.getElementById('displayNone');

kandy.style.display = 'none';

randy.addEventListener('click', function(){
    if(kandy.style.display == 'none'){
        kandy.style.display = 'block';
    }else{
        kandy.style.display = 'none';
    }
});

kandy.addEventListener('click', function(){ 
    kandy.classList.toggle("active");
    if(kandy.style.display == 'block'){
        kandy.style.display = 'none';
    }else{
        kandy.style.display = 'block';
    }
})