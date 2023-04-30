const form = document.getElementById('form-deposito');

let validarForm = false;

function validarNumeros (valorA, valorB){
    return valorB > valorA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    let valorA = parseFloat(document.getElementById('numero-a').value);
    let valorB = parseFloat(document.getElementById('numero-b').value);

    const messagesuccess = 'Operação Correta: <b>Valor do número A menor que Valor do número B</B>';
    const containermessagesuccess = document.querySelector('.success-message');
    
    validarForm = validarNumeros(valorA, valorB);
    
    if (validarForm){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesuccess.innerHTML = messagesuccess;
        containermessagesuccess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        valorA.value = '';
        valorB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesuccess.style.display = 'none';
    }    
})