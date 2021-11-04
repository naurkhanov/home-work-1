import React, { useState } from 'react';
import './App.css';
import Phrase from './components/Phrase';
import EmptyBlock from './components/EmptyBlock';

const adjectivesArr = [
  'абсолютный',
  'адский',
  'азартный',
  'активный',
  'ангельский',
  'астрономический',
  'баснословный',
  'безбожный',
  'безбрежный',
  'безвозвратный',
  'безграничный',
  'бездонный',
  'бездушный',
  'безжалостный',
  'замечательно',
  'замечательный',
  'записной',
  'запредельный',
  'заядлый',
  'звериный',
  'зверский',
  'зеленый',
  'злой',
  'злостный',
  'значительный',
  'неоспоримый',
  'неотразимый',
  'неоценимый',
  'непередаваемый',
];

const nounsArr = [
  'лгун',
  'день',
  'конь',
  'олень',
  'человек',
  'программист',
  'ребёнок',
  'конец',
  'город',
  'дурак',
];

const App = () => {
  const [phrases, setPhrases] = useState([]);

  const handleGeneratePhrase = () => {
    const firstRandom =
      adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
    const secondRandom =
      adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
    const thirdRandom = nounsArr[Math.floor(Math.random() * nounsArr.length)];

    setPhrases([...phrases, `${firstRandom} ${secondRandom} ${thirdRandom}`]);
  };

  const handleClean = () => {
    setPhrases([]);
  };

  return (
    <div className="wrapper">
      {phrases.length > 0 ? <Phrase phrases={phrases} /> : <EmptyBlock />}
      <div className="button-wrapper">
        <button className="btn btn_generate" onClick={handleGeneratePhrase}>
          Сгенерировать
        </button>
        <button className="btn btn_clear" onClick={handleClean}>
          Очистить
        </button>
      </div>
    </div>
  );
};

export default App;
