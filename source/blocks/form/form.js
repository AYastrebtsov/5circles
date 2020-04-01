
const inputs = document.querySelectorAll('.form__text');
const passwords = document.querySelectorAll('.form__password');

const textValidation = (field) => {
  if (field.value.length === '' || field.value.length <= 2) {
    field.classList.add('form__text--invalid');
    field.setCustomValidity('Введённое значение должно быть больше 2 символов');
  } else {
    field.classList.remove('form__text--invalid');
    field.setCustomValidity('');
  }
};

const passwordValidation = (field) => {
  if (field.value.length < 6) {
    field.classList.add('form__text--invalid');
    field.setCustomValidity('Значение должно быть не короче 6 символов');
  } else {
    field.classList.remove('form__text--invalid');
    field.setCustomValidity('');
  }
};

inputs.forEach((element) => {
  element.addEventListener('input', () => {
    textValidation(element);
  });
});

passwords.forEach((element) => {
  element.addEventListener('input', () => {
    passwordValidation(element);
  });
});
