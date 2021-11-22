import react from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Admin.css';

function Admin( props ) {
    //const[ name, setName ] = useState( null ) {
    const[ feedbackList, setFeedbackList ] = useState( [] ) ;
    let options = {hour: "2-digit", minute: "2-digit"};

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

    const deleteFeedback=( id )=>{
        axios.delete(`/feedback/delete/${id}`).then( ( response )=>{
            console.log(`back from Delete`)
            getFeedbackFromDB();
        }).catch( ( error )=>{
            console.log( `Error deleting feedback record:`, error );
        })
    }

    const reviewFeedback=( row )=>{
        row.flagged = true;
        console.log(`in reviewFeedback with id:`, row);
        axios.put(`feedback/flagged/${row.id}`, row).then( ( response )=>{
        }).catch( ( error )=>{
            console.log( `Error updating review field`, error );
        })
    }

    return (
        <div>
            <h1>Speak Up! Admin Form</h1>
            <body>
            <Container>
                <TableContainer component={Paper} elevation={5}
                    sx={{border:1}}>
                    <Table aria-label="feedback table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ minWidth: 150 }} align="center">Action</TableCell>
                                {/* <TableCell align="left">Needs Review</TableCell> */}
                                <TableCell align="right">ID</TableCell>
                                <TableCell align="right">Feeling</TableCell>
                                <TableCell align="right">Understanding</TableCell>
                                <TableCell align="right">Support</TableCell>
                                <TableCell align="left">Comments</TableCell>
                                <TableCell align="left">Date Created</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {feedbackList.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-id={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell align="center">
                                    <div className='action-buttons'>
                                        <Checkbox  />
                                        <Button onClick={ ( ) => deleteFeedback( row.id ) }>Delete</Button>
                                        <Button onClick={ ( ) => reviewFeedback( row ) }>Review</Button>
                                    </div>
                                </TableCell>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.feeling}</TableCell>
                                <TableCell align="right">{row.understanding}</TableCell>
                                <TableCell align="right">{row.support}</TableCell>
                                <TableCell align="left">{row.comments}</TableCell>
                                <TableCell align="left">{ new Date(row.date).toLocaleDateString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            </body>
        </div>
    )
}

export default Admin;