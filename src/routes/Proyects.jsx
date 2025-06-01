import Navbar       from '../components/Navigation/Navbar';
import Title        from '../components/AboutMe/Title'
import RowProyects from '../components/Proyects/RowProyects';
import ProyectColumn from '../components/Proyects/ProyectColumn';
import RowProyectAlone from '../components/Proyects/RowProyectAlone';

import CSS from '../assets/CSS.png'
import REACT from '../assets/REACT.png'
import VITE from '../assets/VITE.png'
import Entrapp from '../assets/Entrapp.png'

import '../styles/AboutMe.css'
import '../styles/Proyects.css'

export default function Proyects() {
  return (
    <div className="Proyects-page">
        <Navbar />
        <div className="first-slide">
            <Title title={'PRO-YECTOS'} extra={'destacados'} />
        </div>
        <div className="third-slide">
            <RowProyects >
                <ProyectColumn picture={CSS} title={'CSS'} description={'Diseño solamente usando CSS - 2025'} link={'https://23183.dernait.my/lab4/lab4.html'} />
                <ProyectColumn picture={REACT} title={'REACT'} description={'Juego de memoria con REACT - 2025'} link={'https://23183.dernait.my/lab7/index.html'} />
                <ProyectColumn picture={VITE} title={'VITE'} description={'Calculadora con VITE - 2025'} link={'https://23183.dernait.my/proyecto1/'} />
            </RowProyects>
        </div>
        <div className="second-slide">
            <RowProyectAlone text={'Este es un proyecto desarrollado en equipos para la clase de Ingeniería de Software. Nuestro product owner solicitó un software para manejo de recursos humanos, con la principal preocupación del conteo de horas extra debido al poco funcionamiento del hardware utilizado actualmente. Se propuso una alternativa a este problema y se implementaron otras funcionalidades, como la lista de los empleados de cada una de las empresas de conglomerado, manejo de la información personal de cada empleado, la opción de dar de baja, permitir que se soliciten permisos de vacaciones mediante la página web y generar reportes de desempeño. Para este proyecto se utilizó Javascript para el backend, React para desarrollar el frontend y Postgresql para la base de datos. Se desarrollaron dos repositorios en Github, uno para manejo de frontend y otro para manejo de backend, debido a cuestiones de escalabilidad y futuras implementaciones.'} title={'ENTRAPP'} picture={Entrapp} />
        </div>
    </div>
  );
}