import React from "react";

const MeusDadosProps = ({nome, curso, universidade}) => {
    return (
        <div>
          <h1>{nome}</h1>
          <h1>{curso}</h1>
          <h1>{universidade}</h1>
        </div>
      );
}

export default MeusDadosProps;