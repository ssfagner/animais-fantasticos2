export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // fazer referencia ao objeto
    // da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaDoModal = this.cliqueForaDoModal.bind(this);
  }

  // Abre ou fecha o Modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // Adiciona o evento de toggle ao Modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Fecha o Modal ao clicar do lado de fora
  cliqueForaDoModal(event) {
    if (event.target === this.containerModal) this.toggleModal(event);
  }

  // Adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaDoModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
