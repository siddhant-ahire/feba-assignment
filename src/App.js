/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Col, Container, Grid, Row,  } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Card from './components/Card';
import './styles/main.scss'

const card1 = {
      image:'https://images.indianexpress.com/2020/07/bridal-makeup-dos-and-donts_759.jpg',
      tag:'SUPER VENDOR',
      city:'Mumbai',
      name:'Jssmakeuovers',
      price:15000,
      type:'Bridal Makeup',
      rating:5.2
}
const card2 = {
  image:'https://static-bebeautiful-in.unileverservices.com/easy-bridal-makeup-look-for-an-indian-wedding-600x350-picmobhome.jpg',
  tag:'SUPER VENDOR',
  city:'Jaipur',
  name:'jasmin',
  price:15000,
  type:'Bridal Makeup',
  rating:5.7
}
const card3 = {
  image:'https://www.avcj.com/IMG/450/22450/india-cosmetics-makeup-580x358.jpeg?1554262311',
  tag:'SUPER VENDOR',
  city:'Pune',
  name:'radhika',
  price:14000,
  type:'Bridal Makeup',
  rating:5.6
}
const card4 = {
  image:'https://assets.vogue.in/photos/5ce42bc21dc2678296c78aae/master/pass/bridal-makeup-tips-images-wedding-makeup-tips.jpg',
  tag:'SUPER VENDOR',
  city:'aligad',
  name:'siri',
  price:15000,
  type:'Bridal Makeup',
  rating:5.6
}
const card5 = {
  image:'https://im.idiva.com/content/2019/Mar/idiva_products-from-abh_lead1_980x457.jpg',
  tag:'SUPER VENDOR',
  city:'melbourne',
  name:'tesajji',
  price:1600,
  type:'Bridal Makeup',
  rating:6.6
}

function App() {

  return (
    <Container>
      <Grid fluid>
        <Row className="mt-3">
          <Col md={6} sm={8}>
            <Card {...card1}/>  
          </Col>    
          <Col md={6} sm={8}>
            <Card {...card2}/>  
          </Col>
          <Col md={6} sm={8}>
            <Card {...card3}/>  
          </Col>
          <Col md={6} sm={8}>
            <Card {...card4}/>  
          </Col>  
          <Col md={6} sm={8}>
            <Card {...card5}/>  
          </Col> 
        </Row>
      </Grid>
    </Container>
  );
}

export default App;
