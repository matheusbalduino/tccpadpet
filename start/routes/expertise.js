'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store', 'ExpertiseController.store');
}).prefix('/expertise')
