import React, { Component } from 'react';

class ProfileClass extends Component {
  firstname = this.props.name.split(' ')[0];

  monthToStr(num) {
    return num > 12 || num < 1
      ? null
      : 'январь,февраль,март,апрель,май,июня,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(
          ','
        )[num];
  }

  dateToStr = `${this.props.registeredAt.getDate()} ${this.monthToStr(
    this.props.registeredAt.getMonth()
  )} ${this.props.registeredAt.getFullYear()}`;

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <div>
          Привет, <b>{this.firstname}</b>
        </div>
        <div>Дата регистрации: {this.dateToStr}</div>
      </div>
    );
  }
}

export default ProfileClass;
