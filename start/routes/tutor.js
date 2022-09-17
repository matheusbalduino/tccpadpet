'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.put('/update', 'TutorController.update');
  Route.put('/update/img', 'TutorController.uploadImage');
  Route.get('/image/:path', 'TutorController.showimage')
  Route.get('/show', 'TutorController.show');
}).prefix('tutor').middleware(['auth', 'tutor']);

Route.post('tutor/store', 'TutorController.store').validator('User');
