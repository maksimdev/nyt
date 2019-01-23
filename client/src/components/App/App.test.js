import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    it('should to match snapshot', () => {
        const AppComponent = shallow(<App />);
        expect(AppComponent).toMatchSnapshot();
    });
});