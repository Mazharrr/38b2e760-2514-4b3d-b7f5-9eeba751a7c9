//Vendor
import React, {Component} from 'react';
//Components
import Header from 'js/components/Header';
import Weather from 'js/components/weather/Weather';

export default class App extends Component {

  render () {
    return (
        <div className='root'>
          <Header
            title="Commute Helper"/>
          <Weather />
        </div>

    );
  }

}
