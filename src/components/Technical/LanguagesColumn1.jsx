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
            <LanguagesRowSimple picture={python}/>
            <LanguagesRowSimple picture={java}/>
            <LanguagesRowSimple picture={Cplus}/>
            <LanguagesRowSimple picture={Cpic}/>
            <LanguagesRowComplex picture={kotlin} text={'ANDROID STUDIO'}/>
            <LanguagesRowSimple picture={HTMLpic}/>
        </div>
    );
}

export default LanguagesColumn1