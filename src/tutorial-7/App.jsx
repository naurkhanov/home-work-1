import React from 'react';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClearFields = () => {
    reset({ firstNam: '', lastName: '', email: '', password: '', about: '' });
  };

  return (
    <div className="containerTutorial">
      <div className="wrapper">
        <TextField
          name="firstNam"
          label="Имя"
          variant="outlined"
          {...register('firstNam', {
            validate: (value) => value !== 'admin' || 'Nice try',
          })}
          helperText={
            formState.errors.firstNam && formState.errors.firstNam.message
          }
          error={!!formState.errors.firstNam}
        />
        <TextField
          name="lastName"
          label="Фамилия"
          variant="outlined"
          {...register('lastName', {
            required: 'Это обязательное поле',
          })}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
        />
      </div>
      <div className="wrapper">
        <TextField
          name="email"
          label="Почта"
          variant="outlined"
          {...register('email', {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
              message: 'Это неверная почта',
            },
          })}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
        />
        <TextField
          name="password"
          label="Пароль"
          variant="outlined"
          type="password"
          {...register('password', {
            required: 'Это обязательное поле',
          })}
          helperText={
            formState.errors.password && formState.errors.password.message
          }
          error={!!formState.errors.password}
        />
      </div>
      <div className="btnWrap">
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Войти
        </Button>
        <Button onClick={handleClearFields} variant="contained">
          Очистить
        </Button>
      </div>
    </div>
  );
};

export default App;
