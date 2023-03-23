let modal =  document.querySelector('#modal-create');
let menu =  document.querySelector('#menu');
let burger = document.querySelector('#burger');

document.addEventListener('click', event => {

    if (event.target.id == 'createbtn'){
        modal.classList.add('hidden');
    }
    else if (event.target.id == 'modal-disable' || event.target.id =='modal-btn__cansel' ||  event.target.id =='modal-btn__create') {
        modal.classList.remove('hidden');
    }
});


burger.onclick = function(){
    if(menu.classList == 'side-menu__list hidden'){
        menu.classList.remove('hidden');
        burger.classList.remove('open');
    }
    else{
        menu.classList.add('hidden');
        burger.classList.add('open');
    }
};
