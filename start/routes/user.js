'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{
  Route.post('/store','UserController.store').validator('/User');
  Route.post('user/login', 'UserController.login')
}).prefix('/user').middleware('guest');

