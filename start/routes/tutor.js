'use strict'

const Route = use('Route');

Route.group(()=>{
  Route.post('/store', 'TutorController.store').validator('User');
  Route.put('/update/:id', 'TutorController.update');
  Route.put('/update/:id/img', 'TutorController.uploadImage');
  Route.get('/:id', 'TutorController.show');
  Route.get('/image/:path', 'TutorController.showimage')
}).prefix('tutor')
