import React from "react";

const CelsiusParaFahrenheit = ({ c }) => {
  const temperatura = (c * 1.8) + 32;
  
  return (
    <div>
      <h1>Conversão de Temperatura de °C para °F</h1>
      <p>A Conversão de {c} °C é {temperatura} °F</p>
    </div>
  );
}

const FahrenheitParaCelsius = ({ f }) => {
  const temperatura = (f - 32) * 0.5;
  
  return (
    <div>
      <h1>Conversão de Temperatura de °F para °C</h1>
      <p>A Conversão de {f} °F é {temperatura} °C</p>
    </div>
  );
}

const Kelvin = ({ k }) => {
  const temperaturaC = k - 273.15;
  const temperaturaF = (k - 273.15) * 1.8 + 32;

  return {
    tempC: temperaturaC,
    tempF: temperaturaF
  };
}

export { CelsiusParaFahrenheit, FahrenheitParaCelsius, Kelvin };
