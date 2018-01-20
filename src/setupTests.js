import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(serializer);
