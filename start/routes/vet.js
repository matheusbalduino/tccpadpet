"use strict";

const Route = use("Route");

Route.group(() => {
  Route.put("/update", "VeterinaryController.update");//.validator("/Vet");
  Route.get("/show", "VeterinaryController.show");//.validator("/Vet");
}).prefix("/vet").middleware(['auth', 'vet']);

Route.group(()=>{
  Route.get("/index", "VeterinaryController.index").middleware('auth');
  Route.post("/store", "VeterinaryController.store").middleware('auth');
}).prefix("/vet")
