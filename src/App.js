import logo from './logo.svg';
import './App.css';
import ConteudoLateral from './componentes/ConteudoLateral';
import { Layout } from './componentes/layout/Index';

function App() {
  return (
    <div className='App'>
      <ConteudoLateral />
      <div className='mainContent'>
      <Layout/>
      </div>
      
    </div>
  );
}

export default App;
