const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputEtanol = document.querySelector('#etanol-price');
    const inputGasolina = document.querySelector('#gasolina-price');

    const etanol = Number(inputEtanol.value / 100);
    const gasolina = Number(inputGasolina.value / 100);

    const calculo = getCalculo(gasolina);
    const resultado = getResultado(calculo, etanol);
    const msg = (`${resultado}`);

    console.log(calculo)
    setResultado(msg);
})

function getCalculo(gasolina){
    const calculo = gasolina * 0.7
    return calculo;
};

function getResultado(calculo, etanol){
    const resultado = [`Abasteça com <strong>ETANOL</strong>`, `Abasteça com <strong>GASOLINA</strong>`];

    if (calculo < etanol){return resultado[1]}
    else{return resultado[0]}
};

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.classList.add('paragrafo-resultado')
    p.innerHTML = msg;
    resultado.appendChild(p);
}