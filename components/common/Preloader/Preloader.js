import React from 'react';
import preloader from '../../../assets/images/preloader.svg';


const Preloader = (props) => {
    return (
    <div style={{backgroundColor: 'white', margin: '0 auto', width: '300px'} } >
       <img src={preloader} />  
    </div>
    )
}

export default Preloader;