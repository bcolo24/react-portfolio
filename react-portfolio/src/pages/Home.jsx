import React, { useEffect } from 'react';
import Image from '../assets/Images/beth.jpg';
import '../components/Home.css';

export default function Home() {
    useEffect(() => {
      // Add the 'active' class after the component mounts
      const elementsToFadeIn = document.querySelectorAll('.fade-in');

      elementsToFadeIn.forEach((element) => {
        element.classList.add('active');
      });
  
    }, []);

    return (
      <div>
        <h1 className='fade-in'>Bethany Colon- Full Stack Web Developer</h1>
        
        <img src={Image} alt="Picture of Bethany Colon" className='fade-in'/>
        <p className='fade-in'>
        Welcome to my personal portfolio website! My name is Bethany Colon, and I'm a passionate web developer with a love for
        creating meaningful and engaging projects. This website serves as a showcase of my
        work, skills, and experiences. Feel free to explore and learn more about me and
        the projects I've been involved in. If you have any questions or if there's
        anything specific you're looking for, don't hesitate to reach out. Thank you for
        visiting!
        </p>
      </div>
    );
  }