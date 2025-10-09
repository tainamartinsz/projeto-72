// Captura elementos
const dinheiro = document.getElementById("inpDinheiro");
const taxa = document.getElementById("inpTaxa");
const calculo = document.getElementById("btnCalculo");
const limpar = document.getElementById("BtnLimpar");
const resultado = document.getElementById("inpResult");

function calcular() {
    const ataxa = taxa.value.trim();

    if (ataxa === "" || isNaN(ataxa)) {
        alert("Erro: apenas números são aceitos no campo de taxa!");
        taxa.value = "";
        taxa.focus();
        resultado.value = "";
        return;
    }

    const numero = parseFloat(ataxa);

    if (numero === 0) {
        alert("A taxa não pode ser zero!");
        taxa.focus();
        resultado.value = "";
        return;
    }
    const totalAnos = 72 / numero;
    const anosInteiros = Math.floor(totalAnos);
    const meses = Math.round((totalAnos - anosInteiros) * 12);
    let display = "";
    if (anosInteiros > 0) display += anosInteiros + " ano" + (anosInteiros > 1 ? "s" : "");
    if (meses > 0) {
        if (display !== "") display += " e ";
        display += meses + " mes" + (meses > 1 ? "es" : "");
    }

    resultado.value = display;
}

calculo.onclick = calcular;

function limparcampos() {
    resultado.value = "";
    taxa.value = "";
    dinheiro.value = "";
}

limpar.onclick = limparcampos;
