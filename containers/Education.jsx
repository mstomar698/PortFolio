import React from 'react';
import EducationCard from '../components/EducationCard';
//import { educationInfo } from "../portfolio";
import { Container, Row, Col } from 'reactstrap';

const educationInfo = [
  {
    schoolName: 'Jaypee University of Engineering and Technology',
    subHeader: 'B-Tech in Computer Science',
    duration: 'September 2020 - May 2024',
    desc: 'I am a 3rd year student at JUET',
    descBullets: ['My current CGPA is 8.3'],
  },
];

const Education = () => {
  return (
    <main>
      <div className="position-relative background-section">
        <section className="section pb-0 my-5">
          <Container>
            <div className="d-flex px-3">
              <div>
                <div className="icon  icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-books text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white"> Education</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center ">
              {educationInfo.map((info) => {
                return (
                  <Col className="order-lg-1 " lg="6" key={info.schoolName}>
                    <EducationCard education={info} />
                  </Col>
                );
              })}
            </Row>
          </Container>
          {/* // svg seperator
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
        </div>*/}
        </section>
      </div>
    </main>
  );
};

export default Education;
