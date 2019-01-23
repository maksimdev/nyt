import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzymeSerializer from 'enzyme-to-json/serializer';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(enzymeSerializer);