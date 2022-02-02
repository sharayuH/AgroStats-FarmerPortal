import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../../App.css";
// import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import s1 from "./../../images/Schemes/PMFBY.jpg";
import s2 from "./../../images/Schemes/PMKMDY.png";
import s3 from "./../../images/Schemes/PMKSY.jpg";
import s4 from "./../../images/Schemes/PKVY.jpg";
import s5 from "./../../images/Schemes/RKVY.jpg";
import s6 from "./../../images/Schemes/KCC.jpg";
class Schemes extends Component {
  render() {
    return (
      <div className="main-schemes">
        <div className="common-title">
          <h1>Schemes and Policies</h1>
        </div>
        <div className="scheme-content p-2">
          <>
            <CardDeck>
              <Card id="cards">
                <Card.Img variant="top" src={s1} />
                <Card.Body>
                  <Card.Title>
                    Pradhan Mantri Fasal Bima Yojna (PMFBY)
                  </Card.Title>
                  <Card.Text>
                    The Pradhan Mantri Fasal Bima Yojana (PMFBY) launched on 18
                    February 2016 by Prime Minister Narendra Modi is an
                    insurance service for farmers for their yields. It aims to
                    reduce the premium burden on farmers and ensure early
                    settlement of crop assurance claim for the full insured sum.
                  </Card.Text>
                  <Card.Link
                    href="https://pmfby.gov.in/"
                    target="_blank"
                    id="card-link"
                  >
                    Link to more information on PMFBY
                  </Card.Link>
                </Card.Body>
              </Card>
              <br />
              <Card id="cards">
                <Card.Img variant="top" src={s2} />
                <Card.Body>
                  <Card.Title>
                    Pradhan Mantri Kisaan Maan-dhan Yojna (PMKMDY)
                  </Card.Title>
                  <Card.Text>
                    The Pradhan Mantri Kisan Maan Dhan Yojana is brought into
                    action to serve as an old age pension plan for the farmers
                    in the country
                  </Card.Text>
                  <Card.Link
                    href="https://vikaspedia.in/schemesall/schemes-for-farmers/pm-kisan-maan-dhan-yojana"
                    target="_blank"
                  >
                    Link to more information on PMKMDY
                  </Card.Link>
                </Card.Body>
              </Card>
              <br />
            </CardDeck>
            <CardDeck>
              <Card id="cards">
                <Card.Img variant="top" src={s3} />
                <Card.Body>
                  <Card.Title>
                    Pradhan Mantri Krishi Sinchayee Yojna (PMKSY)
                  </Card.Title>
                  <Card.Text>
                    Government has conceived the Pradhan Mantri Krishi Sinchayee
                    Yojana (PMKSY) with the objective of extending the coverage
                    of irrigation in a focused manner, with end-to-end solution
                    on source creation, distribution, management, field
                    application and extension activities
                  </Card.Text>
                  <Card.Link href="https://pmksy.gov.in/" target="_blank">
                    Link to more information on PMKSY
                  </Card.Link>
                </Card.Body>
              </Card>
              <br />
              <Card id="cards">
                <Card.Img variant="top" src={s4} />
                <Card.Body>
                  <Card.Title>
                    Paramparagat Krishi Vikas Yojana (PKVY)
                  </Card.Title>
                  <Card.Text>
                    The Paramparagat Krishi Vikas Yojana (PKVY), an initiative
                    to promote organic farming in the country, was launched by
                    the NDA government in 2015.
                  </Card.Text>
                  <Card.Link
                    href="https://vikaspedia.in/agriculture/policies-and-schemes/crops-related/krishi-unnati-yojana/paramparagat-krishi-vikas-yojana"
                    target="_blank"
                  >
                    Link to more information on PKVY
                  </Card.Link>
                </Card.Body>
              </Card>
              <br />
            </CardDeck>
            <CardDeck>
              <Card id="cards">
                <Card.Img variant="top" src={s6} />
                <Card.Body>
                  <Card.Title>Kisan Cradit Card (KCC)</Card.Title>
                  <Card.Text>
                    Government has conceived the Pradhan Mantri Krishi Sinchayee
                    Yojana (PMKSY) with the objective of extending the coverage
                    of irrigation in a focused manner, with end-to-end solution
                    on source creation, distribution, management, field
                    application and extension activities
                  </Card.Text>
                  <Card.Link href="#" target="_blank">
                    Link to more information on KCC
                  </Card.Link>
                </Card.Body>
              </Card>
              <br />
              <Card id="cards">
                <Card.Img variant="top" src={s5} />
                <Card.Body>
                  <Card.Title>Rashtriy Krishi Vikas Yojana (RKVY)</Card.Title>
                  <Card.Text>
                    RKVY scheme was initiated in 2007 as an umbrella scheme for
                    ensuring holistic development of agriculture and allied
                    sectors by allowing states to choose their own agriculture
                    and allied sector development activities as per the
                    district/state agriculture plan.
                  </Card.Text>
                  <Card.Link href="https://rkvy.nic.in/#" target="_blank">
                    Link to more information on RKVY
                  </Card.Link>
                </Card.Body>
              </Card>
              <br />
            </CardDeck>
          </>
        </div>
        <div class="container-news"></div>
      </div>
    );
  }
}

export default Schemes;
