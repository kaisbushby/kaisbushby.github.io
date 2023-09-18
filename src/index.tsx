import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Routing } from 'Routing';

const container = document.getElementById('app')

if(container == null) throw new Error("Root Element is missing")

const root = ReactDOM.createRoot(container)

root.render(
  <BrowserRouter>
    <Routing/>
  </BrowserRouter>
);
