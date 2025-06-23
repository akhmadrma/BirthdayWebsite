import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TimeInterval from "./TimeInterval/TimeInterval";
import Slider from "./SliderPhoto/SliderPhoto";
import data from "./SliderPhoto/data";
import "./SliderPhoto/SliderPhoto.css";


function App() {
  ;

  return (
    <div className="App">
      <Container className="mt-5">
        {/* Header */}
        <Row>
          <TimeInterval/>
        </Row>
        <Row>
          <div className="center">
            <Slider data={data} activeSlide={2} />
          </div>
          
        </Row>

        {/* Description */}
        <Row className="d-flex justify-content-center align-items-center text-center min-vh-100 mb-4">
          <Col>
            <Card className="p-4 bg-light">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vehicula purus sit amet varius consequat. Morbi malesuada massa
                placerat placerat tristique. Aliquam erat volutpat. Curabitur
                dolor ipsum, vestibulum non varius nec, hendrerit vel ex.
                Aliquam gravida, ante eget feugiat ultricies, nunc leo faucibus
                orci, non vehicula purus massa quis metus.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
