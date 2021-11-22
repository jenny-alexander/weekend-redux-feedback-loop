import react from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

function Admin( props ) {
    //const[ name, setName ] = useState( null ) {
    const[ feedbackList, setFeedbackList ] = useState( [] ) ;

    useEffect(()=>{
        getFeedbackFromDB();
        console.log( 'component loaded' );
      }, [])

//Get the feedback records from the db via axios call
    const getFeedbackFromDB=()=>{
        axios.get('/feedback').then( ( response )=>{
            console.log( response )
            setFeedbackList( response.data );
        }).catch( ( error )=>{

        })
    }

    return (
        <div>
            <h1>Admin</h1>
            <h3>{JSON.stringify( feedbackList )}</h3>
        </div>
    )
}

export default Admin;