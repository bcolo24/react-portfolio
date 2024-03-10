import React from 'react';
import emailjs from 'emailjs-com';
import '../components/Contact.css';
import github from '../assets/Images/icons8-github-50.png';
import gmail from'../assets/Images/icons8-gmail-40.png';
import linkedin from '../assets/Images/icons8-linkedin-50.png';
import phone from '../assets/Images/icons8-phone-50.png';


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_vf5410t', 'template_bkjpqdm', e.target, 'D7q9lT9IXbJx5YAZF')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }
    
    return (
        <>
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name:</label>
                <input type="text" name="from_name" />
                <label>Email:</label>
                <input type="email" name="from_email" />
                <label>Subject:</label>
                <input type="text" name="subject" />
                <label>Message:</label>
                <textarea name="html_message" />
                <input type="submit" value="Send" />
            </form>
            
            <div className='icons'>
                <a href='https://github.com/bcolo24'><img className="github-image" src={github}></img></a>
                <a href='https://www.google.com/'><img className="gmail-image" src={gmail}></img></a>
                <a href='https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin'><img className="linkedin-image" src={linkedin}></img></a>
                <figure><img className="phone-image" src={phone}></img><figcaption>Phone Number: 123-456-7890</figcaption></figure>
                
            </div>

        </>

    );
}
