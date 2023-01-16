const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.onsubmit = function (event) {
  event.preventDefault();

  const input = form.querySelector('input');
  const value = input.value;

  const li = document.createElement('li');

  ul.appendChild(li);
};
