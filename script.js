const formulario = document.querySelector("#formulario");

formulario.onsubmit = (event) => {
    event.preventDefault();

    let peso = parseFloat(formulario.peso.value);
    let altura = parseFloat(formulario.altura.value);
    let imc = peso / (altura * altura);

    let resultado = document.querySelector("#resultado-imc")
    resultado.textContent = imc.toFixed(2);
}