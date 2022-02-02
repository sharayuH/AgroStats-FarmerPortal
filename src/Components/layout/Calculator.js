import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import "../../calcy.css";
import "../../Login.css";
import { useState } from "react";

function Calculator() {
  const [data, setData] = useState({
    nitrogenValue: 20,
    potassiumValue: 40,
    phospharousValue: 40,
    cropVal: "",
    areaVal: 0.5,
    resultUrea: 0,
    resultMOP: 0,
    resultDAP: 0
  });

  return (
    <div className="calcy-main">
      <div className="common-title">
        <h1>Fertilizer Calculator</h1>
      </div>
      <div className="calcy-content">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select Crop
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Wheat</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Corn</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Tomato</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="calcy-inner">
          <div>
            <label htmlFor="name">Nitrogen(N) [in kg/ha]: </label>
            <input
              className="calcy-name"
              type="name"
              onChange={(e) =>
                setData({ ...data, nitrogenValue: e.target.value })
              }
              value={data.nitrogenValue}
            />
          </div>
          <div>
            <label htmlFor="name">Phospharous(P) [in kg/ha]: </label>
            <input
              className="calcy-name"
              type="name"
              onChange={(e) =>
                setData({ ...data, phospharousValue: e.target.value })
              }
              value={data.phospharousValue}
            />
          </div>
          <div>
            <label htmlFor="name">Potassium(K) [in kg/ha]: </label>
            <input
              className="calcy-name"
              type="name"
              onChange={(e) =>
                setData({ ...data, potassiumValue: e.target.value })
              }
              value={data.potassiumValue}
            />
          </div>
        </div>
        <div className="calcy-area">
          <div>Area (in hectres)</div>
          <div className="sel">
            <select
              onChange={(e) => {
                setData({ ...data, areaVal: e.target.value });
              }}
              value={data.areaVal}
            >
              <option>0.5</option>
              <option>1.0</option>
              <option>1.5</option>
              <option>2.0</option>
              <option>2.5</option>
              <option>3.5</option>
            </select>
          </div>
        </div>
        <Button
          variant="success"
          id="calculate"
          onClick={(e) => {
            setData({
              ...data,
              resultMOP: (
                (data.potassiumValue * 100 * data.areaVal) /
                60
              ).toFixed(2),
              resultDAP: ((100 * data.phospharousValue) / 46).toFixed(2),
              resultUrea: (
                (100 *
                  (data.nitrogenValue - (18 * data.phospharousValue) / 46)) /
                46
              ).toFixed(2)
            });
          }}
        >
          <h2>Calculate</h2>
        </Button>
        <div className="calcy-result">
          <div className="calcy-inner2">
            <div>
              <label htmlFor="name">Urea </label>
              <div>
                <h1>{data.resultUrea} kg</h1>
              </div>
            </div>
            <div>
              <label htmlFor="name">MOP (Potash)</label>
              <div>
                <h1>{data.resultMOP} kg</h1>
              </div>
            </div>
            <div>
              <label htmlFor="name">DAP (Phosphate)</label>
              <div>
                <h1>{data.resultDAP} kg</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
