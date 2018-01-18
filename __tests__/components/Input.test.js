import React from 'react';
import Input from 'js/components/input/inputContainer';
import { shallow } from 'enzyme';

describe('Testing component methods', () => {
  const wrapper = shallow(<Input />);
  it('changeTemp', () => {
    //changes min state
    let e = {
      target: {
        id: 'minimum',
        value: 10
      }
    };
    wrapper.instance().changeTemp(e);
    expect(wrapper.state().minTemp).toEqual(10);
    //changes max state
    e = {
      target: {
        id: 'maximum',
        value: 120
      }
    };
    wrapper.instance().changeTemp(e);
    expect(wrapper.state().maxTemp).toEqual(120);
    //min temp changes max temp
    e = {
      target: {
        id: 'minimum',
        value: 121
      }
    };
    wrapper.instance().changeTemp(e);
    expect(wrapper.state().maxTemp).toEqual(122);
    //max temp changes min temp
    e = {
      target: {
        id: 'maximum',
        value: 100
      }
    };
    wrapper.instance().changeTemp(e);
    expect(wrapper.state().minTemp).toEqual(99);

  });
  it('changeTime', () => {
    //changes departure time
    let e = {
      target: {
        id: 'departure',
        value: 0
      }
    };
    wrapper.instance().changeTime(e);
    expect(wrapper.state().leaveTime).toEqual(0);
    //changes return time
    e = {
      target: {
        id: 'return',
        value: 10
      }
    };
    wrapper.instance().changeTime(e);
    expect(wrapper.state().returnTime).toEqual(10);
    //departure time change return time
    e = {
      target: {
        id: 'departure',
        value: 10
      }
    };
    wrapper.instance().changeTime(e);
    expect(wrapper.state().returnTime).toEqual(11);
    //return time changes departure time
    e = {
      target: {
        id: 'return',
        value: 8
      }
    };
    wrapper.instance().changeTime(e);
    expect(wrapper.state().leaveTime).toEqual(7);
    //working min edge case
    e = {
      target: {
        id: 'return',
        value: 0
      }
    };
    wrapper.instance().changeTime(e);
    expect(wrapper.state().leaveTime).toEqual(0);
    //working max edge case
    e = {
      target: {
        id: 'departure',
        value: 23
      }
    };
    wrapper.instance().changeTime(e);
    expect(wrapper.state().returnTime).toEqual(23);
  });
  it('changeChance', () => {
    const e = {
      target: {
        value: 40
      }
    };
    wrapper.instance().changeChance(e);
    expect(wrapper.state().chance).toEqual(40);
  });
});
