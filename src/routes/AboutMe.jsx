import Navbar       from '../components/Navigation/Navbar';
import Title from '../components/Navigation/Title';
import InfoRow        from '../components/AboutMe/InfoRow'
import InfoColumn        from '../components/AboutMe/InfoColumn'
import Subtitle        from '../components/AboutMe/Subtitle'
import InfoRowSimple from '../components/AboutMe/InfoRowSimple';
import InfoColumnSimple from '../components/AboutMe/InfoColumnSimple';
import ColumnBlack1 from '../components/AboutMe/ColumnBlack1';
import InfoColumnBlack from '../components/AboutMe/InfoColumnBlack';

import AboutMePic from '../assets/AboutMePic.png'
import Hobbies1 from '../assets/Hobbies1.png'
import Hobbies2 from '../assets/Hobbies2.png'
import Hobbies3 from '../assets/Hobbies3.png'
import Education from '../assets/Education.png'

import '../styles/AboutMe.css'

export default function AboutMe() {
  return (
    <div className="AboutMe-page">
        <Navbar />
        <div className="first-slide-AB">
            <Title title1={'POR-'} title2={'TAFOLIO'} extra={'presentación'} />
        </div>
        <div className="second-slide-AB">
            <InfoRow picture={AboutMePic} className={'picture1'}>
                <InfoColumn texto1={'Mi nombre es Camila Richter De León'} texto2={'Soy una persona disciplinada, organizada y creativa. Mi principal objetivo es adquirir experiencia laboral para perfeccionar mis habilidades y obtener nuevos conocimientos'} />
                <InfoColumn texto1={'Mis habilidades'} texto2={'Comunicación efectiva, trabajo en equipo, liderazgo, resolución de problemas, responsabilidad, pensamiento crítico, adaptabilidad, creatividad, gestión de tiempo, Microsoft Suite: word, excel y power point'}/>
            </InfoRow>
            <Subtitle className = {'text-subtitle-white-AB'} text = {'ABOUT ME'} />
        </div>
        <div className="third-slide-AB">
            <ColumnBlack1 texto1={'Me gradué de Campoalegre en 2022 como bachiller en ciencias y letras. Adicionalmente obtuve el diploma del Bachillerato Internacional'} picture={Education} /> 
            <InfoColumnBlack />
        </div>
        <div className="fourth-slide-AB">
            <Subtitle className = {'text-subtitle-white-H'} text = {'HOBBIES'} />
            <InfoRowSimple picture2={Hobbies1} picture3={Hobbies2} text={'Soy una persona creativa a quien le gusta aprender siempre cosas nuevas, por esta razón me interesa estar activa en mi aprendizaje siempre, tomando cursos e interactuando con otras personas. Disfruto mucho de leer como pasatiempo.'} />
            <InfoRow picture = {Hobbies3} className={'picture4'} >
                <InfoColumnSimple texto1={'Me gusta hacer ejercicio, especialmente salir a correr, porque es una manera saludable para poder liberarme del estrés.'} texto2={'También disfruto de pintar con acuarelas y recibo clases para mejorar mi técnica mediante la práctica.'} texto3={'Me interesa dejar mi huella en el mundo, por loq ue siempre que tengo oportunidad participo en voluntariados.'} texto4={'Me apasiona viajar y poder conocer sobre la cultura y la historia de los destinos que visito.'}/>
            </InfoRow>
        </div>
    </div>
  );
}