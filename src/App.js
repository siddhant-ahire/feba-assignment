/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Affix, Button, Col, Container, Content, Divider, Footer, Grid, Header, Nav, Navbar, Row, } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Card from './components/Card';
import CARD_DATA from './card.data';
import Drawere from './components/Drawer';
import logo from './images/logo.png';
import './styles/utility.scss'

function App() {
  return (
    <Container >
      <Header>
        <Navbar appearance="inverse" style={{ display: "flex", alignItems: 'center', backgroundColor: "white", borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#e5e5e5', borderBottomStyle: 'solid', minHeight: 66 }}>
          <Navbar.Header style={{ marginLeft: 20, display: 'flex', alignItems: 'center' }}>
            <Drawere />
            <img src={logo} style={{ width: 55, height: 26, marginLeft: 20 }} />
            <span style={{ color: '#333333', fontSize: 28, marginLeft: 10, fontWeight: "bold" }}>Feba</span>
          </Navbar.Header>
        </Navbar>
        <Affix>
          <Nav appearance="subtle" style={{ display: "flex", alignItems: 'center', backgroundColor: "white", borderBottom: 1, borderBottomWidth: 1, borderBottomColor: '#e5e5e5', borderBottomStyle: 'solid', minHeight: 66 }}>
            <Nav.Item>
              <Button style={{ borderRadius: 20, height: 40, border: "1px solid #e5e5e5", backgroundColor: "transparent" }}>
                <span style={{ fontSize: 15 }}>City: All</span>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button style={{ borderRadius: 20, height: 40, border: "1px solid #e5e5e5", backgroundColor: "transparent" }}>
                <span style={{ fontSize: 15 }}>Category: Bridal Makeup Artist</span>
              </Button>
            </Nav.Item>
          </Nav>
        </Affix>
      </Header>
      <Content>

        <Grid fluid>
          <Row>
            <Col>
              <div style={{ paddingLeft: 20, marginTop: 20 }}>
                <span style={{ fontSize: 17, fontWeight: 'bold' }}>
                  Bridal Makeup Artist
            </span><br />
                <p style={{ fontSize: 15 }}>
                  Showing <span style={{ fontWeight: 'bold' }}>170+ results</span>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            {
              CARD_DATA.map(({ id, ...otherCollectionProps }) => (
                <Col lg={6} md={8} sm={12} key={id}>
                  <Card {...otherCollectionProps} />
                </Col>
              ))
            }
          </Row>
        </Grid>
      </Content>
      <Footer style={{ textAlign: 'center', paddingBottom: 30 }}>
        <Divider />
        <h5> Copyright &#169; House Of Couton </h5>
      </Footer>
    </Container>
  );
}

export default App;
