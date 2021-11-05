import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, Card, TextField, Typography } from '@mui/material';

const useStyles = makeStyles({
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    minHeight: 350,
  },
  cardFrom: {
    marginTop: 30,
    padding: 20,
  },
});

const Form = ({ setComments }) => {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    text: '',
  });
  const handleAddComment = () => {
    setComments((prev) => [
      ...prev,
      {
        name: userData.name,
        email: userData.email,
        createdAt: new Date().toLocaleDateString(),
        text: userData.text,
      },
    ]);

    setUserData({ name: '', email: '', text: '' });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setUserData({
      ...userData,
      [id]: value,
    });
  };

  return (
    <Card variant="outlined" className={classes.cardFrom}>
      <Typography variant={'h5'}>Обратная связь:</Typography>
      <Box className={classes.formWrapper}>
        <TextField
          value={userData.name}
          onChange={handleChange}
          id="name"
          label="Имя"
          variant="outlined"
        />
        <TextField
          value={userData.email}
          onChange={handleChange}
          id="email"
          label="Почта"
          variant="outlined"
        />
        <TextField
          value={userData.text}
          onChange={handleChange}
          id="text"
          label="Текст..."
          multiline
          rows={4}
        />
        <Button onClick={handleAddComment} variant="contained">
          Отправить
        </Button>
      </Box>
    </Card>
  );
};

export default Form;
