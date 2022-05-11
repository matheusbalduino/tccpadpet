'use strict'

//#region
const User = use("App/Models/User")
//#endregion

class UserController {
  async store({request}){
    const data = request.only([
      "username",
      "email",
      "password",
      "document",
      "profession"]);

    const user = await User.create(data)

    return user;
  }

  async login({request, auth, response}){
    const { email, password } = request.all();

    const token = await auth.attempt(email, password)

    return response.send({credentials: token})

  }
}

module.exports = UserController
