'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

const Factory = use('Factory')

Factory.blueprint('App/Model/User', async (faker) => {
  return {
    username: faker.name(),
    password: faker.password(),
    document: faker.string({
      length:15,
      numeric:true
    }),
    email: faker.name(),
    profession: faker.name(),
    street: faker.name(),
    number: faker.string({
      lenght: 4,
      numeric: true
    }),
    neighborhood: faker.name(),
    zip_code: faker.string({
      length:14,
      numeric: true
    }),
    city: faker.name(),
    state: faker.name(),
    country: faker.name()
  }
} )
