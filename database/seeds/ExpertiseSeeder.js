'use strict'

/*
|--------------------------------------------------------------------------
| ExpertiseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Expertise = use('App/Models/Expertise')
const VetExpert = use('App/Models/VeterinaryExpertise')
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ExpertiseSeeder {
  async run () {
    await Expertise.createMany([
      {
        name: "clinico geral",
        description:"Faz tudo que precisa"
      },
      {
        name: "Dermatologista",
        description: "Cuida da pele"
      },
      {
        name: "Anestesista",
        description: "Anestesia os animais"
      }
  ]);

  await VetExpert.create({
    veterinary_id: 1,
    expertise_id: 1
  })

  }
}

module.exports = ExpertiseSeeder
