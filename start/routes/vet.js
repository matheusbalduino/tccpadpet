"use strict";

const Route = use("Route");

Route.group(() => {
  Route.put("/update", "VeterinaryController.update")//.validator("/Vet");
  Route.get("/show", "VeterinaryController.show")//.validator("/Vet");
}).prefix("/vet").middleware(['auth', 'vet']);

Route.post("vet/store", "VeterinaryController.store").middleware('auth');
