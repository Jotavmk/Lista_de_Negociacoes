import { NegociacaoController } from "./controllers/negociacao_controller.js";

const controller = new NegociacaoController();
const from = document.querySelector('.form');
from.addEventListener('subimit', event => {
    event.preventDefault();
    controller.adiciona();
})