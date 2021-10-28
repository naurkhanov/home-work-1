import React from 'react';

let tasks = [
  'Прочитать 10 страниц книги',
  'Выучить все хуки',
  'Покушать пиццу',
];
const App = () => {
  const ulEl = document.querySelector('ul');
  const inputEl = document.querySelector('input');

  const removeTask = (index) => {
    tasks = tasks.filter((_, i) => index !== i);
    renderUl();
  };

  const renderUl = () => {
    ulEl.innerHTML = '';
    tasks.forEach((el, index) => {
      const li = document.createElement('li');
      const removeBtn = document.createElement('button');

      removeBtn.innerText = 'X';
      removeBtn.onclick = () => removeTask(index);
      li.innerHTML = el;
      li.appendChild(removeBtn);
      ulEl.appendChild(li);
    });
  };

  const handleClickAdd = () => {
    const { value } = inputEl;
    tasks.push(value);
    inputEl.value = '';
    renderUl();
  };

  document.querySelector('#add-btn').onclick = handleClickAdd();

  renderUl();

  return (
    <div>
      <ul>
        <li></li>
      </ul>
      <input type="text" placeholder="Текст задачи" />
      <button id="add-btn">Добавить</button>
    </div>
  );
};

export default App;
