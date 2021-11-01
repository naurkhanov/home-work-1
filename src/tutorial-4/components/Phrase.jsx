import React from 'react';

const Phrase = ({ phrases }) => {
  return (
    <div className="list">
      {phrases.map((phrase) => {
        return (
          <div className="block" key={phrase}>
            <h3>{phrase}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Phrase;
