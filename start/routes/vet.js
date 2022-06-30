"use strict";

const Route = use("Route");

Route.group(() => {
  Route.post("/store", "VeterinaryController.store");
  Route.put("/update/:id", "VeterinaryController.update").validator("/Vet");
}).prefix("/vet");
