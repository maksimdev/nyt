import React from 'react';
import * as Enzyme from 'enzyme';
import SearchContainer from './SearchContainer';
import Adapter from 'enzyme-adapter-react-16';
import enzymeSerializer from 'enzyme-to-json/serializer';

Enzyme.configure({ adapter: new Adapter() })

expect.addSnapshotSerializer(enzymeSerializer);
describe('SearchContainer', () => {
    it('should to match snapshot', () => {
        const SearchContainerComponent = Enzyme.shallow(<SearchContainer />);
        expect(SearchContainerComponent).toMatchSnapshot();
    });
});