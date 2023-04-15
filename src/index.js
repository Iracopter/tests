var n=0;
function changesize() {
    var image = document.getElementById('my_photo'); // отримуємо елемент зображення за його ідентифікатором
    if(n==0){
        image.style.transform = 'scale(1.75)';
        n++;
    }
    else{
        image.style.transform = 'scale(1)';
        n--;
    }
}


function keypress(event){
    var hiddenElement = document.getElementById(event.key);
    hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
};

document.addEventListener('keydown', keypress);
