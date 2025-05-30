import Navbar       from '../components/Navigation/Navbar';
import Title        from '../components/AboutMe/Title'
import LanguagesColumn1 from '../components/Technical/LanguagesColumn1';
import LanguagesColumn2 from '../components/Technical/LanguagesColumn2';
import ExtraColumn from '../components/Technical/ExtraColumn';

import Extra from '../assets/Extra.png'
import docker from '../assets/docker.png'

import '../styles/AboutMe.css'
import '../styles/Technical.css'


export default function Technical() {
  return (
    <div className="Technical-page">
        <Navbar />
        <div className="first-slide">
            <Title title={'LEN-GUAJES'} extra={'programación'} />
        </div>
        <div className="third-slide-technical">
          <LanguagesColumn1 />
          <LanguagesColumn2 />
        </div>
        <div className="second-slide-technical">
          <ExtraColumn picture={docker} header={'DOCKER'} description={'Esta es una tecnología que empecé a utilizar recientemente, especialmente con mis trabajos grupales. En la Universidad nos dieron una capacitación sobre la herramienta, debido a que es muy útil para el desarrollo de software.'}/>
          <img src={Extra} alt="Section" className='extra-picture' />
        </div>
    </div>
  );
}