import './App.css';
// import {
//   MeusDadosFunction,
//   MeusDadosArrowFunction,
//   MeusDadosArrowFunctionNoReturn,
//   MeusDadosClass,
// } from './components/atividade00/01MeusDados';
import MeusDadosProps from './components/atividade00/02MeusDados';

function App() {
  const DadosSobreMim = {
    nome: 'João Paulo Nobre Rodrigues',
    curso: 'Redes de Computadores',
    universidade: 'Universidade Federal do ceará'
  }

  return (
    //utilizei o spread operator para não precisar passar propriedade por propriedade.    
    <div className="App">      
      <MeusDadosProps{...DadosSobreMim} />
    </div>
  );
}
export default App;
