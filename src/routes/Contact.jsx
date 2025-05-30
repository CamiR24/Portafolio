import Navbar       from '../components/Navigation/Navbar';
import RowContact from '../components/Contact/RowContact';
import ColumnContact from '../components/Contact/ColumnContact';
import Forms from '../components/Contact/forms';

import ContactMe1 from '../assets/ContactMe1.png'
import ContactMe2 from '../assets/ContactMe2.png'

import '../styles/Contact.css'


export default function Contact() {
  return (
    <div className="Contact-page">
        <Navbar />
        <div className="first-slide-contact">
          <div className='title-container'>
            <h1 className='title-contact'>GET IN TOUCH</h1>
          </div>
          <RowContact picture={ContactMe2}>
            <ColumnContact social1={'LINKEDIN'} user1={'Camila Richter De León'} social2={'BEHANCE'} user2={'Camila Richter De León'} link1={'https://www.linkedin.com/in/camila-richter-de-leon-39baa9332/'} link2={'https://www.behance.net/camilarichterdl'}/>
            <ColumnContact social1={'GITHUB'} user1={'CamiR24'} social2={'CORREO'} user2={'camilarichterdl@gmail.com'} link1={'https://github.com/CamiR24'} link2={'https://workspace.google.com/intl/es-419/gmail/'}/>
          </RowContact>
        </div>
        <div className="second-slide-contact">
          <img src={ContactMe1} alt="Section" className='picture9' />
          <Forms />
        </div>
    </div>
  );
}