import React from 'react';
import Button from './button';

const ImcTable = ({ data, imc, info, infoClass }) => {
  return (
    <div id="result-container">
      <p id="imc-number">
        Seu IMC: <span className={infoClass}>{imc}</span>
      </p>
      <p id="imc-info">Situação atual: {info}</p>
      <h3>Confira as classificações:</h3>

      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Risco de Doenças</h4>
        </div>

        {data.map((item, index) => (
          <div key={index} className="table-data">
            <p>{item.imc}</p>
            <p>{item.classificacao}</p>
            <p>{item.risco}</p>
          </div>
        ))}
      </div>
      <Button
        id={"btn-recalc"}
        text="Calcular Novamente"
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default ImcTable;
