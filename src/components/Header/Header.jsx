import react from "react";
import { useState, useEffect } from "react";
import './Header.css';

function Header( props ) {
    //const[ name, setName ] = useState( null ) {

    return (
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Speak Up!</h1>
                {/* <h2 className='App-subtitle'>Learning Feedback Form</h2> */}
            </header>
        </div>
    )
}

export default Header;