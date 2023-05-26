function iniciar(){
    let convite = document.querySelector('.convite');
    let formulario = document.querySelector('.formulario');

    convite.style.display = 'none';
    formulario.style.display = 'flex';
}

function confereResposta(res){
    //debugger;
    let questao1 = document.querySelector('.ques1');
    let botoes = document.getElementsByName('q1');
    let questao2 = document.querySelector('.ques2');
    
    for(let i = 0; i < botoes.length; i++){
        if(botoes[i].checked){
            console.log(`opção ${i+1} selecionada`);
            console.log(botoes[i].value);
            if(botoes[i].value == res){
                questao2.classList.add('aparece');
                questao1.classList.add('acerto');
            }
            if(botoes[i].value != res){
                questao1.classList.add('error');
                setTimeout(()=>{
                    questao1.classList.remove('error');
                },500);
            }
        }
    }
}
