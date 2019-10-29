import React from "react";
import { Button, Container } from "reactstrap";
import { Row, Col } from 'react-bootstrap';
import 's-grid-settings';

//import header video


// core components
function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
       style={{
//          backgroundImage: "url(" + require("img/landing-page/landing-page-header.mp4") + ")"
          backgroundColor: "#FFF200"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <section class="s-grid-top">
              <div className="motto text-left">
                <h1>Into the world of</h1>
                <h1>startups and investors</h1>
                <h3>Network, raise funding, and invest</h3>
                <br />
              </div>
            </Col>
            <Col >
              <div className="motto text-center">
              <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="btn-round mr-1"
                color="default"
                target="_blank"
                outline
                >
                Invest
              </Button>
              <Button
                className="btn-round"
                color="default"
                type="button"
                outline>
                Raise Funding
              </Button>
            </div>
            </Col>

        </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
