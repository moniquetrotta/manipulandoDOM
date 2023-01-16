const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.onsubmit = function (event) {
  event.preventDefault();

  const input = form.querySelector('input');
  const value = input.value;

  if (value == '') return;

  const li = ul.querySelector('li').cloneNode(true);
  li.querySelector('span').textContent = value;
  ul.appendChild(li);

  input.value = '';
};
