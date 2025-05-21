iimport viteLogo from '/vite.svg';

import { data } from './data/data'; // ajuste o caminho conforme seu projeto
import { useState } from 'react';
import ImcCalc from './components/ImcCalc'; // assumindo default export
import ImcTable from './components/ImcTable'; // letra maiúscula

import './App.css';

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = parseFloat(weight.replace(",", "."));
    const heightFloat = parseFloat(height.replace(",", "."));

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    console.log(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.imc[0] && imcResult <= item.imc[1]) {
        setInfo(item.classificacao);
        setInfoClass(item.risco);
      }
    });

    setImc(imcResult);
  };

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} />
      )}
    </div>
  );
}

export default App;
