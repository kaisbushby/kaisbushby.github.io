import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from 'Routing';
import "./globalStyles.scss"

const container = document.getElementById('app')

if (container == null) throw new Error("Root Element is missing")

const root = ReactDOM.createRoot(container)

root.render(
  <div className='app-window'>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </div>
);
