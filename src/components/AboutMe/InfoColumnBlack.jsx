import React from 'react'
import Subtitle from './Subtitle';

const InfoColumnBlack = () => {
    return(
        <div className= 'infocolumnblack'>
            <Subtitle className = {'text-subtitle-black-EDU'} text = {'EDUCATION'} />
            <h2 className='under-subtitle1'>UVG 2023 - ACTUALIDAD</h2>
            <h3 className='under-subtitle2'>FACULTAD DE INGENIERÍA</h3>
            <div className= 'row-inside'>
                <p className='text-black1'>Inicié la carrera de Ingeniería en Ciencias de la Computación y Tecnologías de la Información en el año 2023. Actualmente curso el tercer año de la carrera. Me apasiona el diseño de aplicaciones y páginas web, es decir, el desarrollo de frontend.</p>
                <p className='text-black1'>Cursos: Curso de Java - Nivel Básico Project Development Using JAVA for Beginners - 2024 Aspectos Básicos de Android con Compose Figma to WordPress: learn to design and build Website Curso de BETHEME el temas más vendido para WORDPRESS</p>
            </div>
            <h3 className='under-subtitle3'>IDIOMAS</h3>
            <p className='textbold-black2'>ESPAÑOL (NATIVO) - INGLÉS (C1) - ALEMÁN (A2)</p>
        </div>
    );
}

export default InfoColumnBlack