function iniciar(){
    let convite = document.querySelector('.convite');
    let formulario = document.querySelector('.formulario');

    convite.style.display = 'none';
    formulario.style.display = 'flex';
}

function confere1(){
    //debugger;
    let questao1 = document.querySelector('.ques1');
    let botoes = document.getElementsByName('q1');
    let questao2 = document.querySelector('.ques2');
    
    for(let i = 0; i < botoes.length; i++){
        if(botoes[i].checked){
            console.log(`opção ${i+1} selecionada`);
            console.log(botoes[i].value);
            if(botoes[i].value == '3'){
                questao2.classList.add('aparece');
                questao1.classList.add('acerto');
            }
            if(botoes[i].value != '3'){
                questao1.classList.add('error');
                setTimeout(()=>{
                    questao1.classList.remove('error');
                },500);
            }
        }
    }
}
function confere2(){
    //debugger;
    let questao1 = document.querySelector('.ques2');
    let botoes = document.getElementsByName('q2');
    let questao2 = document.querySelector('.ques3');

    questao1.style.opacity = 1;
    questao1.style.visibility = 'visible';
    questao1.classList.remove('aparece');
    
    for(let i = 0; i < botoes.length; i++){
        if(botoes[i].checked){
            console.log(`opção ${i+1} selecionada`);
            console.log(botoes[i].value);
            if(botoes[i].value == '3'){
                questao2.classList.add('aparece');
                questao1.classList.add('acerto');
            }
            if(botoes[i].value != '3'){
                questao1.classList.add('error');
                setTimeout(()=>{
                    questao1.classList.remove('error');
                },500);
            }
        }
    }
}
function confere3(){
    //debugger;
    let questao1 = document.querySelector('.ques3');
    let botoes = document.getElementsByName('q3');
    let questao2 = document.querySelector('.ques4');

    questao1.style.opacity = 1;
    questao1.style.visibility = 'visible';
    questao1.classList.remove('aparece');
    
    for(let i = 0; i < botoes.length; i++){
        if(botoes[i].checked){
            console.log(`opção ${i+1} selecionada`);
            console.log(botoes[i].value);
            if(botoes[i].value == '1'){
                questao2.classList.add('aparece');
                questao1.classList.add('acerto');
            }
            if(botoes[i].value != '1'){
                questao1.classList.add('error');
                setTimeout(()=>{
                    questao1.classList.remove('error');
                },500);
            }
        }
    }
}

function confere4(){
    //debugger;
    let questao1 = document.querySelector('.ques4');
    let botoes = document.getElementsByName('q4');

    questao1.style.opacity = 1;
    questao1.style.visibility = 'visible';
    questao1.classList.remove('aparece');
    
    for(let i = 0; i < botoes.length; i++){
        if(botoes[i].checked){
            console.log(`opção ${i+1} selecionada`);
            console.log(botoes[i].value);
            if(botoes[i].value == '2'){
                questao1.classList.add('acerto');
                //função que chama as mundanças de aparecimento do convite 
            }
            if(botoes[i].value != '2'){
                questao1.classList.add('error');
                setTimeout(()=>{
                    questao1.classList.remove('error');
                },500);
            }
        }
    }
}