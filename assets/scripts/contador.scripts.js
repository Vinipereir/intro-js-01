let contador = 0;

function atualizarContador (){
    document.getElementById("counter").innerText = contador;
}

function decrement (){
    contador--
    atualizarContador()
}

function increment (){
    contador++
    atualizarContador()
}

function reset() {
   contador = contador *0 
    atualizarContador()
}
