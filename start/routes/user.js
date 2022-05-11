'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{
  Route.post('/store','UserController.store');
  Route.get('/login', 'UserController.login');
}).prefix('/user')
