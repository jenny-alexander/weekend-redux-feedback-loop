const router = require( 'express' ).Router();

//DB connection
const pool = require('../modules/pool');

// GET all feedback from db
router.get('/', ( req, res )=>{
    //Select all of the feedback
    const queryString =  `SELECT * FROM feedback ORDER BY id DESC;`;
    pool.query( queryString).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( error ) =>{
        console.log( `GET error is:`, error );
        res.sendStatus( 500 );
    })
})

//POST Route (Create new task)
router.post('/', ( req, res )=>{
    const queryString = `INSERT INTO feedback (feeling, understanding, support, comments)
                         VALUES ($1,$2,$3,$4);`;
    let values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( error )=>{
        console.log( `POST error is:`, error );
        res.sendStatus( 500 );
    })
});

//DELETE Route
router.delete('/delete/:id', ( req, res )=>{
    const queryString = `DELETE FROM feedback WHERE id='${req.params.id}';`;
    pool.query( queryString ).then( ( result )=>{
        res.sendStatus( 200 );
    }).catch( ( error )=>{
        console.log( `DELETE error is:`, error );
        res.sendStatus( 500 );
    })
})

//PUT Route for updating review flag
router.put( '/flagged/:id', ( req, res )=>{
    const queryString = `UPDATE feedback SET flagged = ${req.body.flagged}
                         WHERE id = ${req.params.id};`;
                         console.log(`query string is:`, queryString )
    pool.query( queryString ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( error )=>{
        console.log( `PUT error is:`, error );
        res.sendStatus( 500 );
    })
})

module.exports = router;