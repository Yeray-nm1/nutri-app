function initializeContactForm() {
  const form = document.getElementById("form-contact") as HTMLFormElement;
  const modal = document.getElementById("modal") as HTMLDialogElement;
  if (!form || !modal) return;
  form.removeEventListener("submit", handleFormSubmit);
  form.addEventListener("submit", handleFormSubmit);
}

async function handleFormSubmit(e: Event) {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const modal = document.getElementById("modal") as HTMLDialogElement;
  const data = new FormData(form);

  await fetch("https://formsubmit.co/ajax/yeray.navarro@outlook.com", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data,
  });

  form.reset();
  modal.showModal();
}

initializeContactForm();

document.addEventListener("astro:after-swap", () => {
  initializeContactForm();
});