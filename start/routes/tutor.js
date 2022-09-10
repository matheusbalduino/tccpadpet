'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.put('/update/:id', 'TutorController.update');
  Route.put('/update/:id/img', 'TutorController.uploadImage');
  Route.get('/image/:path', 'TutorController.showimage')
  Route.get('/:id', 'TutorController.show');
}).prefix('tutor').middleware(['auth', 'tutor']);

Route.post('tutor/store', 'TutorController.store').validator('User');
