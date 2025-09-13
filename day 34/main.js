// function printNames(){
//     document.write("Erona");
//     document.write("<br>");
//     setTimeout(function(){document.write("Lora");}, 3000);
//     document.write("Anna");

// }

// printNames();

var colors= ['pink', 'orange', 'blue', 'purple', 'black'];

function changeColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}

var names=['Lora','Ilma','Elma','Erona','Nita'];

function changeNames(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)]
}

setInterval(changeColor, 1000);
setInterval(changeNames,1000);