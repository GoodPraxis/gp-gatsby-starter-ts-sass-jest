// eslint-disable-next-line
import { configure } from 'enzyme';
// eslint-disable-next-line
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // @TODO: Change after update

configure({ adapter: new Adapter() });
