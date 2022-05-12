'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store', 'TutorController.store');
}).prefix('tutor')
