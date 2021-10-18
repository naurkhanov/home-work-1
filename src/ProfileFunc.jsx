import React from 'react';

function ProfileFunc({ name, registeredAt }) {
  const firstName = name.split(' ')[0];

  function monthToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'январь,февраль,март,апрель,май,июня,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(
          ','
        )[num];
  }

  const date = `${registeredAt.getDate()} ${monthToStr(
    registeredAt.getMonth()
  )} ${registeredAt.getFullYear()}`;

  console.log(firstName);
  return (
    <>
      <div>
        Привет,<b>{firstName}!</b>
      </div>
      <div>Дата регистрация: {date}</div>
    </>
  );
}

export default ProfileFunc;
