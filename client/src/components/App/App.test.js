import React from 'react';
import * as Enzyme from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import enzymeSerializer from 'enzyme-to-json/serializer';

Enzyme.configure({ adapter: new Adapter() })

expect.addSnapshotSerializer(enzymeSerializer);
describe('App', () => {
    it('should to match snapshot', () => {
        const AppComponent = Enzyme.shallow(<App />);
        expect(AppComponent).toMatchSnapshot();
    });
});