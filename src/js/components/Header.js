import React, {Component} from 'react';
import logoImg from 'images/bicycle.svg';

export default class Header extends Component {

  render () {
    const {title} = this.props;

    return (
      <div className='app-header relative'>
        <h1 className='app-title text-center'>{title}</h1>
        <img className="app-logo" src={logoImg} alt="app-logo" />
      </div>
    );
  }
}
