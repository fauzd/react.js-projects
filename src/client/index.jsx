import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Header } from '../shared/Header';


window.addEventListener('load',() => {
ReactDOM.hydrateRoot(document.getElementById('react_root'), <Header />);
});