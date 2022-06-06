'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store/tutor', 'MessageController.storeTutor');
  Route.post('/store/vet', 'MessageController.storeVet');
  Route.get('/index/tutor/:id', 'MessageController.getMessagesByTutor');
  Route.get('/index/veterinary/:id', 'MessageController.getMessagesByVet');
}).prefix('/message')
