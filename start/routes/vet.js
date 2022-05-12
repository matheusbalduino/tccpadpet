'use strict'

const Route = use('Route')

Route.group(()=>{
  Route.post('/store', 'VeterinaryController.store');
}).prefix('/vet')
