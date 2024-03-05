import './App.css';
// import {
//   MeusDadosFunction,
//   MeusDadosArrowFunction,
//   MeusDadosArrowFunctionNoReturn,
//   MeusDadosClass,
// } from './components/atividade00/01MeusDados';
//import MeusDadosProps from './components/atividade00/02MeusDados';
import {
  CelsiusParaFahrenheit,
  Kelvin,
  FahrenheitParaCelsius
}from './components/atividade00/03Temperatura'
function App() {
  // 2º questão
  // const DadosSobreMim = {
  //   nome: 'João Paulo Nobre Rodrigues',
  //   curso: 'Redes de Computadores',
  //   universidade: 'Universidade Federal do ceará'
  // }

  // return (
  //   //utilizei o spread operator para não precisar passar propriedade por propriedade.    
  //   <div className="App">      
  //     <MeusDadosProps{...DadosSobreMim} />
  //   </div>
  // );

  // 3º Questão
  const temperaturaC = 70
  const temperaturaF = 32
  const temperaturaK = 298

  return (
    <div className="App"> 
      <CelsiusParaFahrenheit c={temperaturaC} />
      <FahrenheitParaCelsius f={temperaturaF} />
      <p>{JSON.stringify(Kelvin({ k: temperaturaK }))}</p>
    </div>
    
  )


}
export default App;
