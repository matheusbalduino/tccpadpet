"use strict";

const Route = use("Route");

Route.group(() => {
  Route.put("/update/:id", "VeterinaryController.update")//.validator("/Vet");
}).prefix("/vet").middleware(['auth', 'vet']);

Route.post("vet/store", "VeterinaryController.store").middleware('auth');
