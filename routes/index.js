var express = require('express');
var router = express.Router();

//Require controller modules.
var hotel_controller = require('../domain/Hotel/Controllers/hotelController');
var room_controller = require('../domain/Hotel/Controllers/roomController');
var booking_controller = require('../domain/Hotel/Controllers/bookingController');
var rental_controller = require('../domain/Hotel/Controllers/rentalController');
var employee_controller = require('../domain/Employee/Controllers/employeeController');  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HMS' });
});

/**
 * @openapi
 * paths:
 *   /hms/api/chain:
 *     get:
 *       tags:
 *         - Hotel Chain
 *       summary: Fetch all hotel chains
 *       responses:
 *         200:
 *           description: List of hotel chains
 *           content: 
 *             application/json:
 *               schema:
 *                 type: array
 */
router.get('/chain', hotel_controller.fetch_all_hotel_chains);

/**
 * @openapi
 * paths:
 *   /hms/api/chain:
 *     post:
 *       tags:
 *         - Hotel Chain
 *       summary: create a hotel chain
 *       requestBody:
 *         content:
 *           'application/x-www-form-urlencoded':
 *             schema:
 *               type: object
 *               properties:
 *                 chain_name:
 *                   type: string
 *                   default: 'Marriott Hotel'
 *                 email:
 *                   type: string
 *                   default: 'Marriott@gmail.com'
 *                 number_hotels:
 *                   type: number
 *                   default: '7'
 *                 phone_number:
 *                   type: string
 *                   default: '123 45 6767'
 *                 address:
 *                   type: string
 *                   default: '111 Queen Street West, Toronto, ON, Canada'
 *       responses:
 *         200:
 *           description: 
 *           content: 
 *             application/json:
 *               schema:
 *                 type: array
 *                 properties:
 */
router.post('/chain', hotel_controller.create_hotel_chain);
 
/**
 * @openapi
 * paths:
 *   /hms/api/chain/{chain_id}:
 *     get:
 *       tags:
 *         - Hotel Chain 
 *       summary: fetch hotel chain details
 *       parameters:
 *       - name: chain_id
 *         in: path
 *         required: true
 *       responses:
 *         200:
 *           description: A hotel chain
 */
router.get('/chain/:chain_id', hotel_controller.fetch_hotel_chain_details);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/{chain_id}:
 *     put:
 *       tags:
 *         - Hotel Chain
 *       summary: update hotel chain details
 *       parameters: 
 *       - name: chain_id
 *         in: path
 *         required: true  
 *       requestBody:
 *         content:
 *           'application/x-www-form-urlencoded':
 *             schema:
 *               type: object
 *               properties:
 *                 chain_name:
 *                   type: string
 *                   default: 'Marriott Hotel'
 *                 email:
 *                   type: string
 *                   default: 'Marriott@gmail.com'
 *                 number_hotels:
 *                   type: number
 *                   default: '7'
 *                 phone_number:
 *                   type: string
 *                   default: '123 45 6767'
 *                 address:
 *                   type: string
 *                   default: '111 Queen Street West, Toronto, ON, Canada'
 *       responses:
 *         200:
 *           description: 
 *           content: 
 *             application/json:
 *               schema:
 *                 type: array
 *                 properties:
 */
router.put('/chain/:chain_id', hotel_controller.update_hotel_chain_details);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/{chain_id}:
 *     delete:
 *       tags:
 *         - Hotel Chain 
 *       summary: delete hotel chain
 *       parameters:
 *       - name: chain_id
 *         in: path
 *         required: true
 *       responses:
 *         203:
 *           description: 
 */
router.delete('/chain/:chain_id', hotel_controller.delete_hotel_chain);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/{chain_id}/hotel:
 *     post:
 *       tags:
 *         - Hotel
 *       summary: create a hotel 
 *       parameters:
 *       - name: chain_id
 *         in: path
 *         required: true 
 *       requestBody:
 *         content:
 *           'application/x-www-form-urlencoded':
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   default: 'Marriott Hotel'
 *                 rating:
 *                   type: number
 *                   default: 4
 *                 number_rooms:
 *                   type: number
 *                   default: '5'
 *                 email:
 *                   type: string
 *                   default: 'marriotthotel@gmail.com'
 *                 manager_id:
 *                   type: number
 *                   default: '1'
 *                 phone_number:
 *                   type: string
 *                   default: '123 45 6767'
 *                 address:
 *                   type: string
 *                   default: '111 Queen Street West, Toronto, ON, Canada'
 *       responses:
 *         201:
 *           description: Created a hotel
 */
router.post('/chain/:chain_id/hotel', hotel_controller.create_hotel);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/hotel/{hotel_id}:
 *     get:
 *       tags:
 *         - Hotel  
 *       summary: fetch hotel details
 *       parameters:
 *       - name: hotel_id
 *         in: path
 *         required: true  
 *       responses:
 *         200:
 *           description: List of hotel chains
 */
router.get('/chain/hotel/:hotel_id', hotel_controller.fetch_hotel_details);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/{chain_id}/hotel:
 *     get:
 *       tags:
 *         - Hotel 
 *       summary: fetch all hotels of a chain
 *       parameters:
 *       - name: chain_id
 *         in: path
 *         required: true 
 *       responses:
 *         200:
 *           description: List of hotels of a chain
 */
router.get('/chain/:chain_id/hotel/', hotel_controller.fetch_all_hotels_of_chain);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/hotel/{hotel_id}:
 *     put:
 *       tags:
 *         - Hotel
 *       summary: update a hotel 
 *       parameters:
 *       - name: hotel_id
 *         in: path
 *         required: true 
 *       requestBody:
 *         content:
 *           'application/x-www-form-urlencoded':
 *             schema:
 *               type: object
 *               properties:
 *                 chain_id:
 *                   type: number
 *                   default: 30
 *                 name:
 *                   type: string
 *                   default: 'Marriott Hotel'
 *                 rating:
 *                   type: numebr
 *                   default: 4
 *                 number_rooms:
 *                   type: number
 *                   default: '5'
 *                 email:
 *                   type: string
 *                   default: 'marriotthotel@gmail.com'
 *                 manager_id:
 *                   type: number
 *                   default: '1'
 *                 phone_number:
 *                   type: string
 *                   default: '123 45 6767'
 *                 address:
 *                   type: string
 *                   default: '111 Queen Street West, Toronto, ON, Canada'
 *       responses:
 *         200:
 *           description: Updated a hotel
 */
router.put('/chain/hotel/:hotel_id', hotel_controller.update_hotel_details);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/hotel/{hotel_id}:
 *     delete:
 *       tags:
 *         - Hotel 
 *       summary: delete hotel
 *       parameters:
 *       - name: hotel_id
 *         in: path
 *         required: true
 *       responses:
 *         203:
 *           description: 
 */
router.delete('/chain/hotel/:hotel_id', hotel_controller.delete_hotel);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/hotel/{hotel_id}/room:
 *     post:
 *       tags:
 *         - Room
 *       summary: create a room 
 *       parameters:
 *       - name: hotel_id
 *         in: path
 *         required: true 
 *       requestBody:
 *         content:
 *           'application/x-www-form-urlencoded':
 *             schema:
 *               type: object
 *               properties:
 *                 room_number:
 *                   type: number
 *                   default: 111
 *                 price_per_night:
 *                   type: number
 *                   default: 104
 *                 amenities:
 *                   type: string
 *                   default: 'wifi,tv,PS5'
 *                 room_capacity:
 *                   type: number
 *                   default: 5
 *                 view_type:
 *                   type: string
 *                   default: 'mountain'
 *                 extendability:
 *                   type: number
 *                   default: 1
 *                 problems:
 *                   type: string
 *                   default: 'none'
 *       responses:
 *         201:
 *           description: Created a room
 */
router.post('/chain/hotel/:hotel_id/room', room_controller.room_create);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/hotel/room/{room_id}:
 *     get:
 *       tags:
 *         - Room 
 *       summary: fetch room details
 *       parameters: 
 *       - name: room_id
 *         in: path
 *         required: true 
 *       responses:
 *         200:
 *           description: Room Details
 */
router.get('/chain/hotel/room/:room_id', room_controller.room_detail);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/hotel/{hotel_id}/room/:
 *     get:
 *       tags:
 *         - Room 
 *       summary: fetch all rooms of a hotel
 *       parameters: 
 *       - name: hotel_id
 *         in: path
 *         required: true 
 *       responses:
 *         200:
 *           description: A List of Rooms
 */
router.get('/chain/hotel/:hotel_id/room/', room_controller.rooms_list);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/hotel/room/{room_id}:
 *     put:
 *       tags:
 *         - Room
 *       summary: update a room 
 *       parameters:
 *       - name: room_id
 *         in: path
 *         required: true 
 *       requestBody:
 *         content:
 *           'application/x-www-form-urlencoded':
 *             schema:
 *               type: object
 *               properties:
 *                 hotel_id:
 *                   type: number
 *                   default: 32
 *                 room_number:
 *                   type: number
 *                   default: 111
 *                 price_per_night:
 *                   type: number
 *                   default: 104
 *                 amenities:
 *                   type: string
 *                   default: 'wifi,tv,PS5'
 *                 room_capacity:
 *                   type: number
 *                   default: 5
 *                 view_type:
 *                   type: string
 *                   default: 'mountain'
 *                 extendability:
 *                   type: number
 *                   default: 1
 *                 problems:
 *                   type: string
 *                   default: 'none'
 *       responses:
 *         200:
 *           description: Updated a room
 */
router.put('/chain/hotel/room/:room_id', room_controller.room_update);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/hotel/room/{room_id}:
 *     delete:
 *       tags:
 *         - Room 
 *       summary: delete room
 *       parameters:
 *       - name: room_id
 *         in: path
 *         required: true
 *       responses:
 *         203:
 *           description: 
 */
router.delete('/chain/hotel/room/:room_id', room_controller.room_delete);

/**
 * @openapi
 * paths:
 *   /hms/api/chain/hotel/{hotel_id}/room-search:
 *     get:
 *       tags:
 *         - Room 
 *       summary: fetch available rooms
 *       parameters:
 *       - name: hotel_id
 *         in: path
 *         required: true
 *       - name: room_capacity
 *         in: query
 *         default: 2
 *       - name: start_date
 *         in: query
 *         default: '2023.03.06'
 *       - name: end_date
 *         in: query
 *         default: '2023.03.14'
 *       - name: address
 *         in: query
 *         default: "Toronto"
 *       - name: name
 *         in: query
 *         default: "Marriott Hotel"
 *       - name: rating
 *         in: query
 *         default: 4
 *       - name: price_per_night
 *         in: query
 *         default: 150
 *       - name: room_number
 *         in: query
 *         default: 5
 *       responses:
 *         200:
 *           description: A List of Rooms
 */
router.get('/chain/hotel/:hotel_id/room-search', room_controller.room_search);

/**
 * @openapi
 * paths:
 *   /hms/api/bookings/:
 *     post:
 *       tags:
 *         - Booking
 *       summary: create a booking for the customer
 *       requestBody:
 *         content:
 *           'application/x-www-form-urlencoded':
 *             schema:
 *               type: object
 *               properties:
 *                 room_ID:
 *                   type: number
 *                   default: 111
 *                 start_date:
 *                   type: number
 *                   default: '2023.03.06'
 *                 end_date:
 *                   type: string
 *                   default: '2023.03.14'
 *                 rental_price:
 *                   type: number
 *                   default: 200
 *                 additional_charge:
 *                   type: number
 *                   default: 25
 *                 customer_ID:
 *                   type: number
 *                   default: 1
 *       responses:
 *         201:
 *           description: Created a booking
 */
router.post('/bookings/', booking_controller.create_booking);

/**
 * @openapi
 * paths:
 *   /hms/api/bookings/{id}:
 *     get:
 *       tags:
 *         - Booking 
 *       summary: fetch booking details
 *       parameters: 
 *       - name: id
 *         in: path
 *         required: true 
 *       responses:
 *         200:
 *           description: Booking details
 */
router.get('/bookings/:id', booking_controller.fetch_booking_details);

/**
 * @openapi
 * paths:
 *   /hms/api/bookings/customer/{customer_id}:
 *     get:
 *       tags:
 *         - Booking
 *       summary: Fetch all bookings
 *       responses:
 *         200:
 *           description: List of hotel chains
 *           content: 
 *             application/json:
 *               schema:
 *                 type: array
 */
router.get('/bookings/customer/:customer_id', booking_controller.fetch_all_bookings);

// // PUT Update booking details for the customer
// router.put('/bookings/:id', booking_controller.update_booking);

// // POST create a rental for the customer
// router.post('/rentals/:id/customer/:customer_id', rental_controller.create_rental);

// // GET fetch rental details for the customer
// router.get('/rentals/:id', rental_controller.fetch_rental_details);

/**
 * @openapi
 * paths:
 *   /hms/api/rentals/customer/{customer_id}:
 *     get:
 *       tags:
 *         - Rental
 *       summary: Fetch all rentals
 *       responses:
 *         200:
 *           description: List of rentals of a customer
 *           content: 
 *             application/json:
 *               schema:
 *                 type: array
 */
router.get('/rentals/customer/:customer_id', rental_controller.fetch_all_rentals);

// // PUT Update rental details for the customer
// router.put('/rentals/:id', rental_controller.update_rental);

// // POST create an employee
// router.post('/employee/:id', employee_controller.register_employee);

// // UPDATE update employee details
// router.put('/employee/:id', employee_controller.update_employee_details);

/**
 * @openapi
 * paths:
 *   /hms/api/employee/{id}:
 *     get:
 *       tags:
 *         - Employee 
 *       summary: fetch employee details
 *       parameters: 
 *       - name: id
 *         in: path
 *         required: true 
 *       responses:
 *         200:
 *           description: Employee Details
 */
router.get('/employee/:id', employee_controller.fetch_employee_details);

/**
 * @openapi
 * paths:
 *   /hms/api/employee:
 *     get:
 *       tags:
 *         - Employee 
 *       summary: fetch all employees
 *       responses:
 *         200:
 *           description: List of Employees
 */
router.get('/employee', employee_controller.fetch_all_employees);

// // POST toggle employee role
// router.post('/employee/:id', employee_controller.toggle_employee_role);

// // DELETE delete an employee
// router.delete('/employee/:id', employee_controller.delete_employee);

module.exports = router;
