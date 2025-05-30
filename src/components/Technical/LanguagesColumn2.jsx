import React from 'react'
import LanguagesRowComplex from './LanguagesRowComplex';
import LanguagesRowSimple from './LanguagesRowSimple';

import CSS_icon from '../../assets/CSS_icon.png'
import javascriptPic from '../../assets/javascript.png'
import assembler from '../../assets/assembler.png'
import postgresql from '../../assets/postgresql.png'
import git from '../../assets/git.png'

const LanguagesColumn2 = () => {
    return(
        <div className= 'column-languages2'>
            <LanguagesRowSimple picture={CSS_icon} level={5}/>
            <LanguagesRowComplex picture={javascriptPic} text={'REACT Y VITE'} level={4}/>
            <LanguagesRowSimple picture={assembler} level={2}/>
            <LanguagesRowComplex picture={postgresql} text={'TABLE PLUS'} level={3}/>
            <LanguagesRowComplex picture={git} text={'GITHUB'} level={4}/>
        </div>
    );
}

export default LanguagesColumn2