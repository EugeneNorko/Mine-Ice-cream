(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-open-card1]'),
      closeModalBtn: document.querySelector('[data-close-card1]'),
      modal: document.querySelector('[data-product1]'),
    };
   
    refs.openModalBtn.addEventListener('click', toggleModal);
    // refs.closeModalBtn.addEventListener('click', toggleModal);
   
    function toggleModal() {
      refs.modal.classList.toggle('is-open');
    }
  })();