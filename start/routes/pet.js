'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store', 'PetController.store');
}).prefix('pet')
