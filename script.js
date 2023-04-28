
function gerarTabuada() {

    const numeroTabuada = document.getElementById("numeroTabuada").value;
    const resultado = document.getElementById("resultado");

    var total = '';
    for (var n = 0; n <= 10; n++) {
        total += numeroTabuada  +  "  x  "  +  n  +  "  =  "  +
            numeroTabuada * n + "<br/>";
        resultado.innerHTML = total;
    };
};
