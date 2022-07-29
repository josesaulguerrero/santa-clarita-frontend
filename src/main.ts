import { Router } from './routes/router';
import { Header } from './components/Header';
import './main.css';

const rootNode = document.querySelector('#root')!;
rootNode.appendChild(Header());

Router();
