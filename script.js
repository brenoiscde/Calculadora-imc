const formulario = document.querySelector("#formulario");

formulario.onsubmit = (event) => {
    event.preventDefault();

    let peso = parseFloat(formulario.peso.value);
    let altura = parseFloat(formulario.altura.value);
    let imc = peso / (altura * altura);

    let resultado = document.querySelector("#resultado-imc");
    resultado.textContent = imc.toFixed(2);

    // Remove a borda de todas as divs
    const situacoes = document.querySelectorAll(".situacao");
    situacoes.forEach(situacao => {
        situacao.style.border = "none";
    });

    // Adiciona a borda apropriada com base no IMC
    if (imc > 40) {
        document.querySelector("#grau3").style.border = "5px solid red";
    } else if (imc > 35 && imc <= 39.9) {
        document.querySelector("#grau2").style.border = "5px solid red";
    } else if (imc > 30 && imc <= 34.9) {
        document.querySelector("#grau1").style.border = "5px solid red";
    } else if (imc >= 18.6 && imc <= 24.9) {
        document.querySelector("#peso-normal").style.border = "5px solid red";
    } else {
        document.querySelector("#abaixo-peso").style.border = "5px solid red";
    }
};
