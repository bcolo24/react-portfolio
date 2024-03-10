import '../components/About.css';
import Html from '../assets/Images/html.png';
import Css from '../assets/Images/css.png';
import Javascript from '../assets/Images/javascript.png';
import ReactImage from '../assets/Images/react.png';
import Bootstrap from '../assets/Images/bootstrap.png';
import ApiImage from '../assets/Images/apiImage.png';
import NodeJsImage from '../assets/Images/nodejs.png';
import ExpressImage from '../assets/Images/express.png';
import MongoDbImage from '../assets/Images/mongodb.png';
import MySqlImage from '../assets/Images/mysql.png';
import GraphQlImage from '../assets/Images/graphql.png'
export default function About() {
    return (
      <div>
        <h1>More About Me</h1>
        <h2 className='sub-header'>Skills</h2>
       
        <p className='skills-text'>
          Here are the skills that I have gained through hands-on experience and continuous education! 
        </p> 
        <p className='resume-text'>
          <a href='https://docs.google.com/document/d/1oYP5Jq8_yLs6Zfc-3rC6cmJ-zsm8EsFtWom5j68EFHM/edit?usp=sharing'>Click Here to View My Resume</a>
        </p> 
        <h3 className='small-header'>Front-End</h3>
        <div className='front-end-icons'>
          <figure><img src={Html}></img><figcaption>HTML5</figcaption></figure>
          <figure><img src={Css}></img><figcaption>CSS</figcaption></figure>
          <figure><img src={Javascript}></img><figcaption>JavaScript</figcaption></figure>
          <figure><img src={ReactImage}></img><figcaption>React.js</figcaption></figure>
          <figure><img src={Bootstrap}></img><figcaption>Bootstrap</figcaption></figure>
          <figure><img src={ApiImage}></img><figcaption>APIs</figcaption></figure>
        </div>
        <h4 className='back-end-text'>Back-End</h4>
        <div className='back-end-icons'>
          <figure><img src={NodeJsImage}></img><figcaption>Node.js</figcaption></figure>
          <figure><img src={ExpressImage}></img><figcaption>Express.js</figcaption></figure>
          <figure><img src={MongoDbImage}></img><figcaption>MongoDb</figcaption></figure>
          <figure><img src={MySqlImage}></img><figcaption>MySql</figcaption></figure>
          <figure><img src={GraphQlImage}></img><figcaption>GraphQl</figcaption></figure>
        </div>
      </div>
    );
  }
  