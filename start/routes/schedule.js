'use strict'

const Route = use('Route')

Route.group(()=>{
  Route.post('/store', 'ScheduleController.store');
  Route.get('/index', 'ScheduleController.index');
  Route.get('/:vet_id', 'ScheduleController.veterinarySchedules');
}).prefix('/schedule');
