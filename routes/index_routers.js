const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser');
const Api = require('../controler/ApiController');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();


//midelware
// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
//   })
  
  // define the about route
  eventEmitter.on('start', () => {
    console.log('hello bhaji');
  });  eventEmitter.on('stop', () => {
    console.log('kidan jasman');
  });
 
router.use(express.static(__dirname));

router.use(bodyParser.urlencoded({
    extended: false
}));
 
router.use(bodyParser.json());

router.get('/', (req, res) => {  

    (async () => {
        eventEmitter.emit('stop');

        res.send(await Api.getUsers())
        res.end();
      })()
   
   

});
router.get('/jasman', (req, res) => {  
    eventEmitter.emit('start');

   
   

});

  
  module.exports = router
