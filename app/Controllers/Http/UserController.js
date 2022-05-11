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
}

module.exports = UserController
