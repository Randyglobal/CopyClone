alert('Welcome To Google');

var randy = document.getElementById('seca');
var better = document.getElementById('second');
var Abasty = document.getElementById('third');
var content = document.getElementById('instant');
var context = document.getElementById('Privacy');
var imbia = document.getElementById('safe');
var cori = document.getElementById('build');
var secure = document.getElementById('security');
var manage = document.getElementById('password');
var work = document.getElementById('project');
var itoe = document.getElementById('client');
var kiddy = document.getElementById('sever');
var private = document.getElementById('access');
var set = document.getElementById('tool');
var logo = document.getElementById('place');
var bill = document.getElementById('in');
var hunder = document.getElementById('check');   
var password = document.getElementById('manager');
work.style.display = 'flex';
itoe.style.display = 'none';
kiddy.style.display = 'none'
private.style.display = 'flex';
set.style.display = 'none';
logo.style.display = 'none';
bill.style.display = 'flex';
hunder.style.display = 'none';
password.style.display = 'none'



randy.addEventListener('click', function(){
    if (work.style.display == 'none'){
        work.style.display = 'flex';
        itoe.style.display = 'none';
        itoe.style.position = 'absolute';
        kiddy.style.display = 'none';
        kiddy.style.position = 'absolute';}
    // }else{
    //     work.style.display = 'none';
    // }

})


better.addEventListener('click', function(){
    if (itoe.style.display == 'none'){
        itoe.style.display = 'flex';
        work.style.display = 'none';
        kiddy.style.display = 'none';
        kiddy.style.position = 'absolute';
       
    }
    // else{
    //     itoe.style.display = 'none';
    //     itoe.style.position = 'absolute';
    // }

})

Abasty.addEventListener('click', function(){
    if (kiddy.style.display == 'none'){
        kiddy.style.display = 'flex';
        work.style.display = 'none';
        itoe.style.display = 'none';
        itoe.style.position = 'absolute';
    }
    // else{
    //     kiddy.style.display = 'none';
    //     kiddy.style.position = 'absolute';
    // }

})


content.addEventListener('click', function(){
    if (private.style.display == 'none'){
        private.style.display = 'flex';
        logo.style.display = 'none';
        logo.style.position = 'absolute';
        set.style.display = 'none';
        set.style.position = 'absolute';
    }
    // else{
    //     private.style.display = 'none';
    // }

})


context.addEventListener('click', function(){
    if (set.style.display == 'none'){
        set.style.display = 'flex';
        private.style.display = 'none';
        logo.style.display = 'none';
        logo.style.position = 'absolute';
    }
    // else{
    //     set.style.display = 'none';
    //     set.style.position = 'absolute';
    // }

})

imbia.addEventListener('click', function(){
    if (logo.style.display == 'none'){
        logo.style.display = 'flex';
        private.style.display = 'none';
        set.style.display = 'none';
        set.style.position = 'absolute';
    }
    // else{
    //     logo.style.display = 'none';
    //     logo.style.position = 'absolute';
    // }

})

cori.addEventListener('click', function(){
    if (bill.style.display == 'none'){
        bill.style.display = 'flex';
        hunder.style.display = 'none';
        hunder.style.position = 'absolute';
        password.style.display = 'none';
        password.style.position = 'absolute';
    }
    // else{
    //     bill.style.display = 'none';
    // }

})


secure.addEventListener('click', function(){
    if (hunder.style.display == 'none'){
        hunder.style.display = 'flex';
        bill.style.display = 'none';
        password.style.display = 'none';
        password.style.position = 'absolute';
    }
    // else{
    //     hunder.style.display = 'none';
    //     hunder.style.position = 'absolute';
    // }

})

manage.addEventListener('click', function(){
    if (password.style.display == 'none'){
        password.style.display = 'flex';
        bill.style.display = 'none';
        hunder.style.display = 'none';
        hunder.style.position = 'absolute';
    }
    // else{
    //     password.style.display = 'none';
    //     password.style.position = 'absolute';
    // }
})

