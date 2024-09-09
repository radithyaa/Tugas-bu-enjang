function login() {
  const id = document.getElementById(`id`).value;
  const password = document.getElementById(`password`).value;
  const error = document.getElementById(`error`);

  if (id === `admin` && password === `admin`) {
    window.location.href = `./dashboard.html`;
  } else {
    error.classList.remove(`text-transparent`);
  }
}
