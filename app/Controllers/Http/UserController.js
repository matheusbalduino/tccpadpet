'use strict'

//#region
const User = use("App/Models/User")

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')
//#endregion

class UserController {
  async store({request}){
    const data = request.only([
      "username",
      "password",
      "profession",
      "role"
    ]);

    const user = await User.create(data)

    return user;
  }

  async login({request, auth, response}){
    console.log('entrei')
    const { username, password } = request.all();
    console.log(auth)

    await auth.attempt(username, password)

    const user = await User.query()
      .where('username', username)
      .first();

    console.log(user);

    const token = await auth.generate(user, true)

    return response.send({credentials: token})

  }
}

module.exports = UserController
