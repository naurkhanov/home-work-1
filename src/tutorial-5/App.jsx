import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Comments from './Components/Comments';
import Form from './Components/Form';

const useStyles = makeStyles({
  wrapper: {
    width: 500,
    margin: '40px auto',
  },
});

const App = () => {
  const classes = useStyles();

  const [comments, setComments] = React.useState(
    JSON.parse(localStorage.getItem('comments')) || []
  );

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className={classes.wrapper}>
      <Comments comments={comments} setComments={setComments} />
      <Form setComments={setComments} />
    </div>
  );
};

export default App;
