'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.group(()=>{
  Route.post('/store','AppointmentController.store');
  Route.put('/:id','AppointmentController.update');
}).prefix('/appointment')
