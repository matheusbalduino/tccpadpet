'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User');
const Vet = use('App/Models/Veterinary');
const Tutor = use('App/Models/Tutor');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {

    await User.createMany([
      {
        username: "vet",
        password: "1234",
        role: "vet",
        profession: "vet",
        street: "rua 1",
        number: "100",
        neighborhood: "jardim",
        zip_code: "14021614",
        city: "Ribeirão",
        state: "SP",
        country: "Brazil",
      },
      {
        username: "tutor",
        password: "1234",
        role: "vet",
        profession: "vet",
        street: "rua 1",
        number: "100",
        neighborhood: "jardim",
        zip_code: "14021614",
        city: "Ribeirão",
        state: "SP",
        country: "Brazil",
      }
    ])

    await Vet.create({
      avatar: " teste ",
      crmv:"12345",
      email: "vet@gmail.com",
      document:"1231231098",
    })

    await Tutor.create({
      avatar: " teste ",
      email: "vet@gmail.com",
      document:"1231231098",
      description:"esta é uma descrição descrita dele"
    })





  }
}

module.exports = UserSeeder
