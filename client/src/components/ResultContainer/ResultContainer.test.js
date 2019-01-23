import React from 'react';
import { shallow } from 'enzyme';
import ResultContainer from './ResultContainer';

describe('ResultContainer', () => {
    const props = {list: []};
    it('should to match snapshot', () => {
        const ResultContainerComponent = shallow(<ResultContainer {...props}/>);
        expect(ResultContainerComponent).toMatchSnapshot();
    });
});