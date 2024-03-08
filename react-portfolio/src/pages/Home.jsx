import React, { useEffect } from 'react';
import Image from '../assets/Images/beth.jpg';
import '../components/Home.css';
import { TypeAnimation } from 'react-type-animation';

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
      <h1 className='fade-in'>
      <TypeAnimation
       preRenderFirstString={true}
        sequence={[
          500,
          'Bethany Colon- Web Developer', // Types 'One'
          1000, // Waits 1s
          'Bethany Colon- Full Stack Web Developer', // Deletes 'One' and types 'Two'
          
        ]}
        speed={30}
        deletionSpeed={30}
        wrapper="span"
        cursor={true}
        repeat={2}
        style={{ fontSize: '1em', display: 'inline-block' }}/></h1>
        <img src={Image} alt="Picture of Bethany Colon" className='fade-in' />
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