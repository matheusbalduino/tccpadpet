'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store', 'MessageController.store');
  Route.get('/index/:receiver', 'MessageController.getMessagesSender');
}).prefix('/message').middleware('auth','user')
