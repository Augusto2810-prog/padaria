// AQUI ADICIONAMOS UM EVENTO DE ESCULTAR O CLICK DO MOUSE SOBRE O ICONE DE HAMBURGER

hamburgerbutton.addEventListener("click", function() {
    mobilemenu.classList.add("flex");
    // CRIAMOS UMA FUNÇÃO QUE A OUVIR O CLICK DO MOUSE, ELE ADICIONE UMA CLASS, QUE ESTA FAZENDO NOSSA CAIXA (div) APARECER, OU SEJA VISIVEL
});


// CRIAMOS UMA FUNÇÃO QUE A OUVIR O CLICK DO MOUSE, ELE REMOVE UMA CLASS, QUE ESTA FAZENDO NOSSA CAIXA (DIV) DESAPARECER, OU SEJA, FICAR INVISIVEL.

closeButton.addeventListener ("click", function() {
    mobileMemu.classList.remove ("flex");
});