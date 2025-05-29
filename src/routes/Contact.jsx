import Navbar       from '../components/Navigation/Navbar';
import RowContact from '../components/Contact/RowContact';
import ColumnContact from '../components/Contact/ColumnContact';
import Forms from '../components/Contact/forms';

import ContactMe1 from '../assets/ContactMe1.png'
import ContactMe2 from '../assets/ContactMe2.png'

import '../styles/Contact.css'


export default function Contact() {
  return (
    <div className="AboutMe-page">
        <Navbar />
        <div className="first-slide-contact">
          <div className='title-container'>
            <h1 className='title-contact'>GET IN TOUCH</h1>
          </div>
          <RowContact picture={ContactMe2}>
            <ColumnContact social1={'LINKEDIN'} user1={'Camila Richter De León'} social2={'BEHANCE'} user2={'Camila Richter De León'}/>
            <ColumnContact social1={'GITHUB'} user1={'CamiR24'} social2={'CORREO'} user2={'camilarichterdl@gmail.com'}/>
          </RowContact>
        </div>
        <div className="second-slide-contact">
          <img src={ContactMe1} alt="Section" className='picture9' />
          <Forms />
        </div>
    </div>
  );
}