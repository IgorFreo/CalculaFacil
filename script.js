const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function() {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    const alturaQuadrada = altura * altura;
    const imc = peso / alturaQuadrada;

    const imcFormatado = imc.toFixed(2);

    document.getElementById("resultado").textContent = "Seu IMC é: " + imcFormatado;
});

const botaoTMB = document.getElementById("btnCalcularTMB");

botaoTMB.addEventListener("click", function() {
    const idade = Number(document.getElementById("idade").value);
    const pesoTMB = Number(document.getElementById("pesoTMB").value);
    const alturaTMB = Number(document.getElementById("alturaTMB").value);

    const masculino = document.getElementById("masculino").checked;

    let tmb;

    if (masculino) {
        tmb = (10 * pesoTMB) + (6.25 * alturaTMB) - (5 * idade) + 5;
    } else {
        tmb = (10 * pesoTMB) + (6.25 * alturaTMB) - (5 * idade) - 161;
    }

    const tmbFormatada = tmb.toFixed(2);

    document.getElementById("resultadoTMB").textContent = "Sua TMB é: " + tmbFormatada + " kcal/dia";
});

const botaoCalcularSalario = document.getElementById("btnCalcularSalario");

botaoCalcularSalario.addEventListener("click", function() {
    const salario = Number(document.getElementById("salario").value);
    const descontos = Number(document.getElementById("descontos").value);

    const salarioLiquido = salario - descontos;
    const salarioFormatado = salarioLiquido.toFixed(2);

    document.getElementById("resultadoSalario").textContent = "Seu Salário Líquido é: R$ " + salarioFormatado;
});

