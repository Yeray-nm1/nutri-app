function initializeModal() {
  const cerrarBtn = document.getElementById("cerrar-modal");
  const modal = document.getElementById("modal") as HTMLDialogElement;

  if (!cerrarBtn || !modal) return;
  cerrarBtn.removeEventListener("click", handleCloseModal);
  cerrarBtn.addEventListener("click", handleCloseModal);

  function handleCloseModal() {
    modal.close();
  }
}

initializeModal();

document.addEventListener("astro:after-swap", () => {
  initializeModal();
});