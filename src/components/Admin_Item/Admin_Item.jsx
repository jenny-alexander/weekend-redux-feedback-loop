import axios from 'axios';
import { useState } from "react";
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import TableRow from '@mui/material/TableRow';
import { TryRounded } from '@mui/icons-material';

function Admin_Item( props ) {
    const[ newFeedbackItem, setNewFeedbackItem ] = useState( {
        id: props.feedbackItem.id,
        feeling: props.feedbackItem.feeling,
        understanding: props.feedbackItem.understanding,
        support: props.feedbackItem.support,
        comments: props.feedbackItem.comments,
        flagged: props.feedbackItem.flagged,
        date: props.feedbackItem.date
    } ) 

    const deleteFeedback=( )=>{
        axios.delete(`/feedback/delete/${newFeedbackItem.id}`).then( ( response )=>{
            props.getFeedback();
        }).catch( ( error )=>{
            console.log( `Error deleting feedback record:`, error );
        })
    }

    const setFlagged=( )=>{
        /**  
        I wanted to updated the flag to true using the React hook but it wouldn't update.
        I don't know why --> TODO: Ask Dev about it.
        setNewFeedbackItem( {...newFeedbackItem, flagged: true } )

        Instead, I updated the flagged to true this way even though I KNOW it isn't correct.
        Once I have more practice with redux, I will change it to use the *watcherSaga generator
        function and the *putSaga generator function. 
        */
        if ( newFeedbackItem.flagged ) {
            setNewFeedbackItem( newFeedbackItem.flagged = false ); 
            setNewFeedbackItem( {...newFeedbackItem}); 
        } else {

            setNewFeedbackItem( newFeedbackItem.flagged = true ); 
            setNewFeedbackItem( {...newFeedbackItem}); 
        }
        axios.put(`feedback/flagged/${newFeedbackItem.id}`, newFeedbackItem).then( ( response )=>{
        }).catch( ( error )=>{
            console.log( `Error updating review field`, error );
        })
    }

    return (
        <TableRow
            key={newFeedbackItem.id}
            data-id={newFeedbackItem.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, 
                height: 80}}
        >
            <TableCell align="left">
                <IconButton size="large" sx={{mr:2 }} onClick={deleteFeedback} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="error" onClick={setFlagged} aria-label="flag for review">
                    <FlagIcon />
                </IconButton>
            </TableCell>
            <TableCell align="center">{
                newFeedbackItem.flagged ? <Checkbox defaultChecked disabled/> : ''}</TableCell>
            <TableCell align="right">{newFeedbackItem.id}</TableCell>
            <TableCell align="right">{newFeedbackItem.feeling}</TableCell>
            <TableCell align="right">{newFeedbackItem.understanding}</TableCell>
            <TableCell align="right">{newFeedbackItem.support}</TableCell>
            <TableCell align="left">{newFeedbackItem.comments}</TableCell>
            <TableCell align="left">{ new Date(newFeedbackItem.date).toLocaleDateString()}</TableCell>
        </TableRow>
    )
}

export default Admin_Item;