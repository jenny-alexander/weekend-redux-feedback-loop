const router = require( 'express' ).Router();

//DB connection
const pool = require('../modules/pool');

// GET all feedback from db
router.get('/', ( req, res )=>{
    //Select all of the feedback
    const queryString =  `SELECT * FROM feedback;`;
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
module.exports = router;