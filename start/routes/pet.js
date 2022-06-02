'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store', 'PetController.store');
  Route.get('/', 'PetController.index');
  Route.get('/:id', 'PetController.getPetByTutor');
}).prefix('pet')
