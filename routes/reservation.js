const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');


router.post('/reserve', reservationController.createReservation);


router.get('/reserve', reservationController.getReservations);


router.get('/reserve/:id', reservationController.getReservationById);


router.put('/reserve/:id/approve', reservationController.approveReservation);



router.put('/reserve/:id/reject', reservationController.rejectReservation);


router.delete('/reserve/:id', reservationController.deleteReservation);

module.exports = router;
