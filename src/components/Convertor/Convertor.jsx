import React, { useState } from "react";
import "./Convertor.css";

export default function Convertor() {
  const [unit, setUnit] = useState("Celsius");
  const [convertedUnit, setConvertedUnit] = useState("Fahrenheit");
  const [temperature, setTemperature] = useState("");
  const [convertedTemp, SetConvertedTemp] = useState("");

  function convertTemperature() {
    if (temperature === "") {
      alert("Can not leave value empty!");
      return;
    }
    if (unit === "Celsius" && convertedUnit === "Kelvin") {
      SetConvertedTemp(+temperature + 273.15);
    }
    if (unit === "Celsius" && convertedUnit === "Fahrenheit") {
      SetConvertedTemp(+temperature * (9 / 5) + 32);
    }
    if (unit === "Fahrenheit" && convertedUnit === "Celsius") {
      SetConvertedTemp((+temperature - 32) * (5 / 9));
    }
    if (unit === "Fahrenheit" && convertedUnit === "Kelvin") {
      SetConvertedTemp((+temperature - 32) * (5 / 9) + 273.15);
    }
    if (unit === "Kelvin" && convertedUnit === "Celsius") {
      SetConvertedTemp(+temperature - 273.15);
    }
    if (unit === "Kelvin" && convertedUnit === "Fahrenheit") {
      SetConvertedTemp((+temperature - 273.15) * (9 / 5) + 32);
    }
    if (unit === convertedUnit) {
      SetConvertedTemp(temperature);
    }
  }
  return (
    <div id="convertor">
      <div className="flex">
        <div className="flex-item">
          <h2>
            {temperature
              ? `${temperature}° in ${unit} is`
              : "Enter a temperature reading"}
          </h2>
          <input
            type="number"
            placehoder="Enter Temperature"
            value={temperature}
            onChange={(e) => {
              setTemperature(e.target.value);
              SetConvertedTemp(" ");
            }}
          />
          <select
            value={unit}
            onChange={(e) => {
              setUnit(e.target.value);
              SetConvertedTemp(" ");
            }}
          >
            <option value={"Celsius"}>Celsius</option>
            <option value={"Fahrenheit"}>Fahrenheit</option>
            <option value={"Kelvin"}>Kelvin</option>
          </select>
        </div>

        <div className="flex-item">
          <h2>
            {convertedTemp === ""
              ? "Select conversion unit and press convert"
              : `${convertedTemp}° in ${convertedUnit} `}
          </h2>

          <select
            value={convertedUnit}
            onChange={(e) => {
              setConvertedUnit(e.target.value);
              SetConvertedTemp(" ");
            }}
          >
            <option value={"Celsius"}>Celsius</option>
            <option value={"Fahrenheit"}>Fahrenheit</option>
            <option value={"Kelvin"}>Kelvin</option>
          </select>
        </div>
      </div>
      <button onClick={convertTemperature}>Convert</button>
    </div>
  );
}
