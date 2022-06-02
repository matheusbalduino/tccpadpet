'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store/tutor', 'MessageController.storeTutor');
  Route.post('/store/vet', 'MessageController.storeVet');
}).prefix('/message')
