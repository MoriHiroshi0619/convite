function iniciar(){
    let convite = document.querySelector('.convite');
    let formulario = document.querySelector('.formulario');

    convite.style.display = 'none';
    formulario.style.display = 'flex';
}

function confere1(event){
    //debugger;
    let botoes = document.getElementsByName('q1');
    
    for(let i = 0; i < botoes.length; i++){
        if(botoes[i].checked){
            console.log(`opção ${i+1} selecionada`);
        }
    }
}
