(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-open-card3]'),
      closeModalBtn: document.querySelector('[data-close-card3]'),
      modal: document.querySelector('[data-product3]'),
    };
   
    refs.openModalBtn.addEventListener('click', toggleModal);
    // refs.closeModalBtn.addEventListener('click', toggleModal);
   
    function toggleModal() {
      refs.modal.classList.toggle('is-open');
    }
  })();