import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { HomePage } from './HomePage';

document.querySelector('#root').innerHTML = render(<HomePage />);
