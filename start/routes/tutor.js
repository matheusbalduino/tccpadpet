'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store', 'TutorController.store');
  Route.put('/update/:id', 'TutorController.update');
}).prefix('tutor')
