function gerarJogo() {
    var numero = document.getElementById('numero');
    var comprimento = parseInt(numero.value);
    var vet = [comprimento];
    var digitos = 0;

    switch (comprimento) {
        case 5:
            digitos = 80;
            break;
        case 6:
            digitos = 60;
            break;
        case 10:
            digitos = 60;
            break;
        case 15:
            digitos = 25;
            break;
        case 20:
            digitos = 100;
            break;
    }

    while (vet.length < comprimento) {
        var num = Math.trunc(Math.random() * digitos + 1);

        if (!vet.includes(num)) {
            vet.push(num);
        }
    }

    vet = vet.sort((a, b) => a - b);

    var aux = "";
    for (var j = 0; j < comprimento - 1; j++) {
        aux += vet[j] + "-";
    }
    document.getElementById('numerosGerados').innerHTML = aux + vet[comprimento - 1];
    document.getElementById('mensagemBoaSorte').innerHTML = "Que a sorte esteja com você!";

}
