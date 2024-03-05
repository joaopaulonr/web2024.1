import React from "react";

function MeusDadosFunction() {
  const nomeCompleto = 'João Paulo Nobre Rodrigues';
  const curso = 'Redes de Computadores';
  const universidade = 'Universidade Federal do Ceará';

  return (
    <div>
      <h1>{nomeCompleto}</h1>
      <h1>{curso}</h1>
      <h1>{universidade}</h1>
    </div>
  );
}

const MeusDadosArrowFunction = () => {
  const nomeCompleto = 'João Paulo Nobre Rodrigues';
  const curso = 'Redes de Computadores';
  const universidade = 'Universidade Federal do Ceará';

  return (
    <div>
      <h1>{nomeCompleto}</h1>
      <h1>{curso}</h1>
      <h1>{universidade}</h1>
    </div>
  );
}

const MeusDadosArrowFunctionNoReturn = () => (
  <div>
    <h1>Seu Nome Completo</h1>
    <h1>Seu Curso</h1>
    <h1>Nome da Sua Universidade</h1>
  </div>
)

class MeusDadosClass extends React.Component {
  render() {
    const nomeCompleto = 'João Paulo Nobre Rodrigues';
    const curso = 'Redes de Computadores';
    const universidade = 'Universidade Federal do Ceará';

    return (
      <div>
        <h1>{nomeCompleto}</h1>
        <h1>{curso}</h1>
        <h1>{universidade}</h1>
      </div>
    );
  }
}

export {MeusDadosFunction, MeusDadosArrowFunction, MeusDadosArrowFunctionNoReturn, MeusDadosClass};

