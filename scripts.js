const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.onsubmit = function (event) {
  event.preventDefault();

  const input = form.querySelector('input');
  const value = input.value;

  ul.innerHTML += `<li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between"><span>${value}</span><button class="text-red-700 delete">ⅹ</button></li>`;

  input.value = '';
};
