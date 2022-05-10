'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('document').notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('profession').notNullable()
      table.string('street')
      table.string('number')
      table.string('neighborhood')
      table.string('zip_code')
      table.string('city')
      table.string('state')
      table.string('country')
      table.timestamps()
    })

    this.create('tutors', (table) => {
      table.increments()
      table.string('avatar')
      table.string('description')
      table
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.timestamps()
    })

    this.create('veterinaries', (table) => {
      table.increments()
      table.string('crmv').notNullable().unique()
      table
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
    this.drop('veterinaries')
    this.drop('tutors')
  }
}

module.exports = UserSchema
