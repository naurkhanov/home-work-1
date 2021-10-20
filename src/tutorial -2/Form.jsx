import React from 'react';

const Form = (props) => {
  let email, password;

  const handleSave = (e) => {
    if (e.target.id === 'email') {
      password = e.target.value;
    } else {
      email = e.target.value;
    }
  };

  const handleSubmit = () => {
    if (email && password) {
      console.log({ email, password });

      email = '';
      password = '';
    } else {
      alert('Заполни все поля, кожанный!');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        margin: '0 auto',
      }}
    >
      <input
        id="email"
        type="text"
        placeholder="E-Mail"
        style={{ marginBottom: '10px' }}
        onChange={handleSave}
        value={email}
      />
      <input
        id="password"
        type="password"
        placeholder="Пароль"
        style={{ marginBottom: '10px' }}
        onChange={handleSave}
        value={password}
      />
      <button>Войти</button>
    </form>
  );
};

export default Form;
