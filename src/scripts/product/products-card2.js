(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-open-card2]'),
      closeModalBtn: document.querySelector('[data-close-card2]'),
      modal: document.querySelector('[data-product2]'),
    };
   
    refs.openModalBtn.addEventListener('click', toggleModal);
    // refs.closeModalBtn.addEventListener('click', toggleModal);
   
    function toggleModal() {
      refs.modal.classList.toggle('is-open');
    }
  })();