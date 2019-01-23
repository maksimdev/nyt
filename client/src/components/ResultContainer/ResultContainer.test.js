import React from 'react';
import * as Enzyme from 'enzyme';
import ResultContainer from './ResultContainer';
import Adapter from 'enzyme-adapter-react-16';
import enzymeSerializer from 'enzyme-to-json/serializer';

Enzyme.configure({ adapter: new Adapter() })

expect.addSnapshotSerializer(enzymeSerializer);
describe('ResultContainer', () => {
    const props = {list: []};
    it('should to match snapshot', () => {
        const ResultContainerComponent = Enzyme.shallow(<ResultContainer {...props}/>);
        expect(ResultContainerComponent).toMatchSnapshot();
    });
});