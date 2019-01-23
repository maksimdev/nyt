import React from 'react';
import { shallow } from 'enzyme';
import SearchPanel from './SearchPanel';

describe('SearchPanel', () => {
    it('should to match snapshot', () => {
        const SearchPanelComponent = shallow(<SearchPanel />);
        expect(SearchPanelComponent).toMatchSnapshot();
    });
});