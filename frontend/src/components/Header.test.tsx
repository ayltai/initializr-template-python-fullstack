import { render, } from '../utils/test';
import { Header, } from './Header';

describe('<Header />', () => {
    it('renders correctly', () => expect(render(<Header />)).toMatchSnapshot());
});
