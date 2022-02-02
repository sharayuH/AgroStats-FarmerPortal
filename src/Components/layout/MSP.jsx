import React from "react";
import Table from "react-bootstrap/Table";
// import Table from "react-bootstrap/Table";
// import Table from "react-bootstrap/Table";
// import Table from "react-bootstrap/Table";
import crop1 from "./../../images/MSP/jowar.jpg";
import crop2 from "./../../images/MSP/bajra.jpg";
import crop3 from "./../../images/MSP/maize.jpg";
import crop4 from "./../../images/MSP/ragi.jpg";
import crop5 from "./../../images/MSP/wheat.jpg";
import crop6 from "./../../images/MSP/paddy.jpg";
import crop7 from "./../../images/MSP/Barley.jpg";
import crop8 from "./../../images/MSP/Groundnut.jpg";
import crop9 from "./../../images/MSP/soyabean.jpeg";
import crop10 from "./../../images/MSP/sunflower.png";
import crop11 from "./../../images/MSP/sesame.jpg";
import crop12 from "./../../images/MSP/niger_seeds.jpg";
import crop13 from "./../../images/MSP/cotton.jpg";
import crop14 from "./../../images/MSP/gram.jpg";
import crop15 from "./../../images/MSP/tur.png";
import crop16 from "./../../images/MSP/moong.jpg";
import crop17 from "./../../images/MSP/urad.jpeg";
import crop18 from "./../../images/MSP/masur.jpg";

function MSP() {
  return (
    <div className="main-MSP">
      <div className="common-title">
        <h1>Minimum Support Price (MSP)</h1>
      </div>
      <div class="container-MSP">
        <div class="table-content">
          <Table striped bordered hover style={{ width: "80%", margin: "auto" }}>
            <thead style={{ backgroundColor: "green", color: "whitesmoke" }}>
              <tr class="tr1">
                <th>Sr. No.</th>
                <th>Crop Name</th>
                <th width="30%">Crop Image</th>
                <th>MSP(Rs./Quintal)</th>
              </tr>
            </thead>
            <tbody>
              <tr id="tr" height="100px">
                <td>1</td>
                <td>Jowar</td>
                <td>
                  <img
                    id="cropimage1"
                    className="a-block mx-auto w-50 h-50"
                    src={crop1}
                    alt="Jowar"

                  />
                </td>
                <td>2640</td>
              </tr>
              <tr id="tr" height="60px">
                <td>2</td>
                <td>Bajra</td>
                <td>
                  <img
                    // height="100px"
                    // width="100px"
                    id="cropimage2"
                    className="a-block w-50 h-50"
                    src={crop2}
                    alt="Bajra"
                    object-fit="cover"
                  />
                </td>
                <td>2150</td>
              </tr>
              <tr id="tr">
                <td>3</td>
                <td>Maize</td>
                <td>
                  <img
                    id="cropimage3"
                    className="a-block w-50 h-50"
                    src={crop3}
                    alt="Maize"
                  />
                </td>
                <td>1850</td>
              </tr>
              <tr id="tr">
                <td>4</td>
                <td>Ragi</td>
                <td>
                  <img
                    id="cropimage4"
                    className="a-block w-50 h-50"
                    src={crop4}
                    alt="Ragi"
                  />
                </td>
                <td>3295</td>
              </tr>
              <tr id="tr">
                <td>5</td>
                <td>Wheat</td>
                <td>
                  <img
                    id="cropimage5"
                    className="a-block w-50 h-50"
                    src={crop5}
                    alt="Wheat"
                  />
                </td>
                <td>1975</td>
              </tr>
              <tr id="tr">
                <td>6</td>
                <td>Paddy</td>
                <td>
                  <img
                    id="cropimage6"
                    className="a-block w-50 h-50"
                    src={crop6}
                    alt="Paddy"
                  />
                </td>
                <td>1888</td>
              </tr>
              <tr id="tr">
                <td>7</td>
                <td>Barley</td>
                <td>
                  <img
                    id="cropimage7"
                    className="a-block w-50 h-50"
                    src={crop7}
                    alt="Barley"
                  />
                </td>
                <td>1600</td>
              </tr>
              <tr id="tr">
                <td>8</td>
                <td>Groundnut</td>
                <td>
                  <img
                    id="cropimage8"
                    className="a-block w-50 h-50"
                    src={crop8}
                    alt="Groundnut"
                  />
                </td>
                <td>5275</td>
              </tr>
              <tr id="tr">
                <td>9</td>
                <td>Soyabean</td>
                <td>
                  <img
                    id="cropimage9"
                    className="a-block w-50 h-50"
                    src={crop9}
                    alt="Soyabean"
                  />
                </td>
                <td>3880</td>
              </tr>
              <tr id="tr">
                <td>10</td>
                <td>Sunflower seed</td>
                <td>
                  <img
                    id="cropimage10"
                    className="a-block w-50 h-50"
                    src={crop10}
                    alt="Sunflower seed"
                  />
                </td>
                <td>5885</td>
              </tr>
              <tr id="tr">
                <td>11</td>
                <td>Sesame</td>
                <td>
                  <img
                    id="cropimage11"
                    className="a-block w-50 h-50"
                    src={crop11}
                    alt="Sesame"
                  />
                </td>
                <td>6855</td>
              </tr>
              <tr id="tr">
                <td>12</td>
                <td>Nigerseed</td>
                <td>
                  <img
                    id="cropimage12"
                    className="a-block w-50 h-50"
                    src={crop12}
                    alt="Nigerseed"
                  />
                </td>
                <td>6695</td>
              </tr>
              <tr id="tr">
                <td>13</td>
                <td>Cotton</td>
                <td>
                  <img
                    id="cropimage13"
                    className="a-block w-50 h-50"
                    src={crop13}
                    alt="cotton"
                  />
                </td>
                <td>5825</td>
              </tr>
              <tr id="tr">
                <td>14</td>
                <td>Gram</td>
                <td>
                  <img
                    id="cropimage14"
                    className="a-block w-50 h-50"
                    src={crop14}
                    alt="Gram"
                  />
                </td>
                <td>5100</td>
              </tr>
              <tr id="tr">
                <td>15</td>
                <td>Tur(Arhar)</td>
                <td>
                  <img
                    id="cropimage15"
                    className="a-block w-50 h-50"
                    src={crop15}
                    alt="Tur"
                  />
                </td>
                <td>6000</td>
              </tr>
              <tr id="tr">
                <td>16</td>
                <td>Moong</td>
                <td>
                  <img
                    id="cropimage16"
                    className="a-block w-50 h-50"
                    src={crop16}
                    alt="Moong"
                  />
                </td>
                <td>7196</td>
              </tr>
              <tr id="tr">
                <td>17</td>
                <td>Urad</td>
                <td>
                  <img
                    id="cropimage17"
                    className="a-block w-50 h-50"
                    src={crop17}
                    alt="Urad"
                  />
                </td>
                <td>6000</td>
              </tr>
              <tr id="tr">
                <td>18</td>
                <td>Masur</td>
                <td>
                  <img
                    id="cropimage18"
                    className="a-block w-50 h-50"
                    src={crop18}
                    alt="Masur"
                  />
                </td>
                <td>5100</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default MSP;
