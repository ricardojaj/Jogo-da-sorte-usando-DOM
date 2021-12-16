"use strict";
/**Manipulaçao de DOM
 * O que é o DOM ?
 * (Document Object model) - é uma interface de programaçao para HTML
 *
 * Por meio de metodos é possivel acessar a arvore ( com isso é possivel deletar, trocar e excluir)
 *
 * Por meio dele temos métodos para acessar a arvore de elementos.
 * o DOM fornece uma copia do HTML
 * é possivel manipular eventos pelo dom para afetar o HTML

*/

let secretNum = Math.trunc(Math.random() * 20) + 1;

let scoreNum = 20;
let high = 0;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "EROOU!";
    document.querySelector(".score").textContent = scoreNum = scoreNum - 1;
  } else if (guess === secretNum) {
    /**Se acertar o numero da sorte */

    document.querySelector(".message").textContent = "Voce acertou!";
    document.querySelector(".number").textContent = secretNum;
    /**Manipulando o css com JavaScript */
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (scoreNum > high) {
      high = scoreNum;
      document.querySelector(".highscore").textContent = high;
    }
  } else if (guess > secretNum) {
    /**Se o numero da digitado ser maior que o numero da sorte */
    if (scoreNum > 1) {
      scoreNum = scoreNum - 1;
      document.querySelector(".score").textContent = scoreNum;
      document.querySelector(".message").textContent = "Muito alto!";
    } else {
      document.querySelector(".message").textContent = "Voce perdeu o jogo!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNum) {
    /**Se o numero da digitado ser menor que o numero da sorte */

    if (scoreNum > 1) {
      scoreNum = scoreNum - 1;
      document.querySelector(".score").textContent = scoreNum;
      document.querySelector(".message").textContent = "Muito baixo!";
    } else {
      document.querySelector(".message").textContent = "Voce perdeu o jogo!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

/* definindo funcionalidade do botao 'again' para reniciar o jogo */

document.querySelector(".btn-again").addEventListener("click", function () {
  scoreNum = 20;
  document.querySelector(".score").textContent = scoreNum;
  document.querySelector(".message").textContent = "Start guessing...";
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#FFFFFF";
});
