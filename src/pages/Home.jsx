import React, { useEffect } from 'react';
import Image from '../assets/Images/beth.jpg';
import '../components/Home.css';
import { TypeAnimation } from 'react-type-animation';
import Pickleball from '../assets/Images/pickleball.png';
import NewYork from '../assets/Images/NY.png';
import Coding from '../assets/Images/icons8-coding-100.png'
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
      <h1 className='home-header fade-in'>
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
        <img src={Image} alt="Picture of Bethany Colon" className='myPic fade-in' />
      <p className='body-text fade-in'>
        Welcome to my personal portfolio website! My name is Bethany Colon, and this website serves as a showcase of my
        work, skills, and experiences. If you have any questions, don't hesitate to reach out. Thank you for
        visiting!
      </p>

      <p className='about-me fade-in'>A bit About Me:</p>
      <p className='about-me fade-in'>I'm a 22 year old from New York State who loves to watch movies and play pickleball with my friends! After High School, I attended Nursing School for 3 years from 2019-2022. I knew I wasn't passionate about the field, so after I left the program I spent time doing online coding courses. From there, I attended Southern New Hampshire University online for a Bachelor's Degree in Computer Science. After a year, I knew I wanted to specialize in Website Development. So, I took a break from the degree to attend UPenn's Full-Stack Coding Bootcamp.</p>
      <div className='home-icons fade-in'>
      <img src={Pickleball}></img>
      <img src={NewYork}></img>
      <img src={Coding}></img>
      </div>
    </div>
  );
}