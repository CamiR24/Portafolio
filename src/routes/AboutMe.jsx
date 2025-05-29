import Navbar       from '../components/Navigation/Navbar';
import Title        from '../components/AboutMe/Title'
import InfoRow        from '../components/AboutMe/InfoRow'
import InfoColumn        from '../components/AboutMe/InfoColumn'
import Subtitle        from '../components/AboutMe/Subtitle'

import AboutMePic from '../assets/AboutMePic.png'

import '../styles/AboutMe.css'

export default function AboutMe() {
  return (
    <div className="AboutMe-page">
        <Navbar />
        <div className="first-slide">
            <Title title={'POR-TAFOLIO'} extra={'presentación'} />
        </div>
        <div className="second-slide">
            <InfoRow picture={AboutMePic}>
                <InfoColumn texto1={'Mi nombre es Camila Richter De León'} texto2={'Soy una persona disciplinada, organizada y creativa. Mi principal objetivo es adquirir experiencia laboral para perfeccionar mis habilidades y obtener nuevos conocimientos'} />
                <InfoColumn texto1={'Mis habilidades'} texto2={'Comunicación efectiva, trabajo en equipo, liderazgo, resolución de problemas, responsabilidad, pensamiento crítico, adaptabilidad, creatividad, gestión de tiempo, Microsoft Suite: word, excel y power point'}/>
            </InfoRow>
            <Subtitle className = {'text-subtitle-white-AB'} text = {'ABOUT ME'} />
        </div>
        <div className="third-slide">
            <InfoColumn /> 
            <InfoColumn />
        </div>
        <div className="fourth-slide">
            <Subtitle className = {'text-subtitle-white-H'} text = {'HOBBIES'} />
            <InfoRow />
            <InfoRow />
        </div>
    </div>
  );
}