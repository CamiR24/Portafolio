import React from 'react'
import LanguagesRowComplex from './LanguagesRowComplex';
import LanguagesRowSimple from './LanguagesRowSimple';

import python from '../../assets/python.png'
import java from '../../assets/java.png'
import Cplus from '../../assets/C++.png'
import Cpic from '../../assets/C.png'
import kotlin from '../../assets/kotlin.jpeg'
import HTMLpic from '../../assets/HTML.png'

const LanguagesColumn1 = () => {
    return(
        <div className= 'column-languages1'>
            <LanguagesRowSimple picture={python} level={4}/>
            <LanguagesRowSimple picture={java} level={3}/>
            <LanguagesRowSimple picture={Cplus} level={2}/>
            <LanguagesRowSimple picture={Cpic} level={2}/>
            <LanguagesRowComplex picture={kotlin} text={'ANDROID STUDIO'} level={5}/>
            <LanguagesRowSimple picture={HTMLpic} level={5}/>
        </div>
    );
}

export default LanguagesColumn1