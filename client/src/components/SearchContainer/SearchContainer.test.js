import React from 'react';
import { shallow } from 'enzyme';
import SearchContainer from './SearchContainer';

describe('SearchContainer', () => {
    it('should to match snapshot', () => {
        const SearchContainerComponent = shallow(<SearchContainer />);
        expect(SearchContainerComponent).toMatchSnapshot();
    });
});