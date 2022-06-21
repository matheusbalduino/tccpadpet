'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.group(()=>{
  Route.post('/store','AppointmentController.store');
  Route.put('/:id','AppointmentController.update');
  Route.get('/readfile','AppointmentController.readFile');
}).prefix('/appointment')
