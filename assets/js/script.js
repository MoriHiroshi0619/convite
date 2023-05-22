function iniciar(){
    let convite = document.querySelector('.convite');
    let formulario = document.querySelector('.formulario');

    convite.style.display = 'none';
    formulario.style.display = 'flex';
}

function confere1(){
    let botoes = document.querySelector('.q1');

    if(botoes[0].checked){
        console.log('1');
    }else if(botoes[1].checked){
        console.log('2');
    }else if(botoes[2].checked){
        console.log('3');
    }else{
        console.log('4');
    }
}
