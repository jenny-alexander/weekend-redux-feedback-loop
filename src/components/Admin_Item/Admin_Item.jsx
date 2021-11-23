import axios from 'axios';
import { useState, useEffect } from "react";
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import TableRow from '@mui/material/TableRow';
import { TryRounded } from '@mui/icons-material';

function Admin_Item( props ) {
    const[ feedbackItem, setFeedbackItem ] = useState( {
        id: props.feedbackItem.id,
        feeling: props.feedbackItem.feeling,
        understanding: props.feedbackItem.understanding,
        support: props.feedbackItem.support,
        comments: props.feedbackItem.comments,
        flagged: props.feedbackItem.flagged,
        date: props.feedbackItem.date
    } ) 

    const deleteFeedback=( )=>{
        axios.delete(`/feedback/delete/${feedbackItem.id}`).then( ( response )=>{
            console.log(`back from Delete`)
            props.getFeedback();
        }).catch( ( error )=>{
            console.log( `Error deleting feedback record:`, error );
        })
    }

    const setFlagged=( event )=>{
        if ( feedbackItem.flagged ) {
            setFeedbackItem( {...feedbackItem, flagged: false } )
        } else {
            setFeedbackItem( {...feedbackItem, flagged: true } )
        }
        axios.put(`feedback/flagged/${feedbackItem.id}`, feedbackItem).then( ( response )=>{
        }).catch( ( error )=>{
            console.log( `Error updating review field`, error );
        })
    }

    return (
        <TableRow
            key={feedbackItem.id}
            data-id={feedbackItem.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, 
                height: 80}}
        >
            <TableCell align="left">
                <IconButton size="large" sx={{mr:2 }} onClick={deleteFeedback} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="error" onClick={ ( event )=>(setFlagged(event ))} aria-label="flag for review">
                    <FlagIcon />
                </IconButton>
            </TableCell>
            <TableCell align="center">{
                feedbackItem.flagged ? <Checkbox defaultChecked disabled/> : ''}</TableCell>
            <TableCell align="right">{feedbackItem.id}</TableCell>
            <TableCell align="right">{feedbackItem.feeling}</TableCell>
            <TableCell align="right">{feedbackItem.understanding}</TableCell>
            <TableCell align="right">{feedbackItem.support}</TableCell>
            <TableCell align="left">{feedbackItem.comments}</TableCell>
            <TableCell align="left">{ new Date(feedbackItem.date).toLocaleDateString()}</TableCell>
        </TableRow>
    )
}

export default Admin_Item;