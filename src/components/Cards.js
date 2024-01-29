import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from 'react-bootstrap';


function Cards() {
  return (
    <div className='cards'>
      <h1>Journey to Learning: Add New Courses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/kurs4.jpg'
              text='React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.'
              label='React'
            
            />
            <CardItem
              src='images/kurs2.jpg'
              text='Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation freeing you to create without sweating the small things.'
              label='Laravel'
            
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/kurs3.jpg'
              text='Discover the power of objects with C#'
              label='C#'
             
            />
            <CardItem
              src='images/kurs1.jpg'
              text='Python is a programming language that lets you work quickly
              and integrate systems more effectively.'
              label='Python'
              
            />
            <CardItem
              src='images/kurs5.jpg'
              text='A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic.'
              label='PHP'
             
            />
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button className="btn btn-success" style={{width:200,borderRadius:20,backgroundColor:'black'}} >Load More</Button>
      </div>
    </div>
  );
}

export default Cards;