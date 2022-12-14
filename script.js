

const calcular = document.querySelector(".calcular")


function CalculoIMC() {
    const nome = document.querySelector(".nome").value;
    const altura = document.querySelector(".altura").value;
    const peso = document.querySelector(".peso").value;
    const resultado = document.querySelector(".resultado");


    const IMC = (peso / (altura * altura)).toFixed(1);

    if (IMC < 18.5) {
        resultado.textContent = `${nome} Você está abaixo do seu peso, seu IMC ${IMC}`;
    }
    else if (IMC < 25) {
        resultado.textContent = `${nome} Você está no seu peso ideal, seu IMC ${IMC}`;
    }
    else if (IMC < 30) {
        resultado.textContent = `${nome} Você está acima do seu peso, seu IMC ${IMC}`;
    }
    else if (IMC < 35) {
        resultado.textContent = `${nome} Você está com obesidade grau I, seu IMC ${IMC}`;
    }
    else if (IMC < 40) {
        resultado.textContent = `${nome} Você está com obesidade grau II, seu IMC ${IMC}`;
    } 
    else {
        resultado.textContent = `${nome} Você está com obesidade grau III, seu IMC ${IMC}`;}
}

    

/** < 18.5 Abaixo do peso */

/** < 25 Peso ideal */

//* Entre 25 e 30 acima do peso */

//* Entre 30 e 35 Obesidade 1 */

//* Entre 35 e 40 Obesidade 2 */

//* Acima de 40 Obesidade 3 */








calcular.addEventListener("click", CalculoIMC)