import React from "react";
import CarouselPage from "../header/CarouselPage";
import AddPost from "../components/AddPost";
import ProfileList from "../components/ProfileList";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import { Avatar } from "@mui/material";
import Barad from "../assets/img/team-1.jpg";
import Contact from "../pages/Contact";

const Profile = () => {
  return (
    <>
      <CarouselPage />
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column container-tab-l">
              <div className="avatar">
                <Card>
                  <Card.Body>
                    <Avatar
                      className="img"
                      alt="Remy Sharp"
                      src={Barad}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Card.Title>Wellcome</Card.Title>
                    <Card.Text>Barad Pourzamany</Card.Text>
                    {/* <Button variant="primary">Edit</Button> */}
                  </Card.Body>
                </Card>
              </div>
              <Nav.Item className="tab-item">
                <Nav.Link eventKey="1">PROFILE</Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab-item">
                <Nav.Link eventKey="2">Your Post</Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab-item">
                <Nav.Link eventKey="3" disabled>
                  Your Course
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab-item">
                <Nav.Link eventKey="4" disabled>
                  Your projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab-item">
                <Nav.Link eventKey="5">Wallet</Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab-item">
                <Nav.Link eventKey="6">Account</Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab-item">
                <Nav.Link eventKey="7">Contact & Suppurt</Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab-item">
                <Nav.Link eventKey="8">Exit</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="1">{<ProfileList />}</Tab.Pane>
              <Tab.Pane eventKey="2">{<AddPost />}</Tab.Pane>
              <Tab.Pane eventKey="3">{/* <Sonnet /> */}</Tab.Pane>
              <Tab.Pane eventKey="4">{/* <Sonnet /> */}</Tab.Pane>
              <Tab.Pane eventKey="5">{/* <Sonnet /> */}</Tab.Pane>
              <Tab.Pane eventKey="6">{/* <Sonnet /> */}</Tab.Pane>
              <Tab.Pane eventKey="7">{<Contact />}</Tab.Pane>
              <Tab.Pane eventKey="8">{/* <Sonnet /> */}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default Profile;
