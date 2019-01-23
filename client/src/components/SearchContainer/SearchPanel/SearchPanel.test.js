import React from 'react';
import * as Enzyme from 'enzyme';
import SearchPanel from './SearchPanel';
import Adapter from 'enzyme-adapter-react-16';
import enzymeSerializer from 'enzyme-to-json/serializer';

Enzyme.configure({ adapter: new Adapter() })

expect.addSnapshotSerializer(enzymeSerializer);
describe('SearchPanel', () => {
    it('should to match snapshot', () => {
        const SearchPanelComponent = Enzyme.shallow(<SearchPanel />);
        expect(SearchPanelComponent).toMatchSnapshot();
    });
});