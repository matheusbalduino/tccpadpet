'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store', 'MessageController.store');
  Route.get('/index/sender/:sender/:reciever', 'MessageController.getMessagesSender');
}).prefix('/message')
