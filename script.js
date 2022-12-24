const form = document.querySelector("[data-form-content]");
const containerBack = document.getElementById("container-back");
const btnForm = document.querySelectorAll("[btn-form]");
const raiting = document.getElementById("rating");

let value = 0;

const hideElements = () => {
  form.classList.add("active");
  containerBack.classList.remove("active");
};

const renderRaiting = () => {
  raiting.innerText = `You selected ${value} out of 5`;
};

const handleSubmit = (e) => {
  e.preventDefault();

  hideElements();
  renderRaiting();
};

form.addEventListener("submit", (e) => {
  handleSubmit(e);
});

const checkClass = (value) => {
  btnForm.forEach((el) => {
    if (parseInt(el.value) !== parseInt(value)) {
      el.classList.remove("active");
    }
  });
};

const handleClick = (e) => {
  localStorage.setItem("valor", e.target.value);
  e.target.classList.toggle("active");
  value = localStorage.getItem("valor");

  checkClass(value);
};

for (i = 0, len = btnForm.length; i < len; i++) {
  btnForm[i].addEventListener("click", (e) => handleClick(e));
}
