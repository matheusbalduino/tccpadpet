"use strict";

const { HttpException } = use("@adonisjs/generic-exceptions");
const Tutor = use("App/Models/Tutor");
const User = use("App/Models/User");
const Database = use("Database");
const Helpers = use('Helpers');

class TutorController {
  /**
   * Show a list of all schedules.
   * GET schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}
 /**
   * Show a list of one tutor.
   * GET schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({request, response, params}){
    const tutor = await Tutor.findOrFail(params.id);
    response.send(tutor);
  }

  async showimage({response, params}){

    return response.download(Helpers.publicPath(`uploads/${params.path}`))
  }

  /**
   * Create/save a new schedule.
   * POST schedules
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const trx = await Database.beginTransaction();
    const data = request.only(["avatar", "document", "email", "description"]);

    const dataUser = request.only([
      "username",
      "password",
      "role",
      "profession",
    ]);
    const user = {};
    try {
      const tutor = await Tutor.create(data, trx);

      if(!dataUser.profession) dataUser.profession = 'Outro';

      user.user = await tutor.user().create(dataUser, trx);
      user.tutor = tutor;

      await trx.commit()

    } catch (error) {
      await trx.rollback();
    }

    return response.send({
      User: user.user,
      Tutor: user.tutor,
    });


  }

  async update({ request, response, params }) {
    try {
      const { id } = params;

      const dataTutor = request.only([
        "avatar",
        "document",
        "email",
        "description",
      ]);
      const dataUser = request.only([
        "username",
        "password",
        "role",
        "profession",
        "street",
        "number",
        "neighborhood",
        "zip_code",
        "city",
        "state",
        "country",
      ]);

      const tutor = await Tutor.findBy("id", id);
      if (!tutor) throw new Error("Tutor não existe");

      const user = await User.findBy("tutor_id", id);
      if (!user) throw new Error("Usuário não existe");

      const trx = await Database.beginTransaction();

      try {

        Object.keys(dataTutor).forEach((item) => {
          if (
            !!dataTutor[item] &&
            dataTutor[item] != "" &&
            dataTutor[item] !== tutor[item]
          )
            dataTutor[item] = dataTutor[item];
          else delete dataTutor[item];
        });

        tutor.merge(dataTutor);
        await tutor.save(trx);

        Object.keys(dataUser).forEach((item) => {
          if (
            !!dataUser[item] &&
            dataUser[item] != "" &&
            dataUser[item] !== user[item]
          )
            dataUser[item] = dataUser[item];
          else delete dataUser[item];
        });

        user.merge(dataUser);
        await user.save(trx);

        await trx.commit();
      } catch (error) {
        await trx.rollback();
        throw error;
      }

      return response.send({
        updated: { ...tutor.toJSON(), ...user.toJSON() },
      });
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  /**
   * Uploa Image and update table tutor with the image name.
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async uploadImage({request, params, response}){
    try {
      const tutor = await Tutor.findOrFail(params.id);

      const imgProfile = request.file('profile_pic', {
        types: ['image'],
        size: '2mb'
      })

      // Makes the name based in the date
      var name = imgProfile.clientName
      var ext = name.split('.')[1]
      var ts = new Date().valueOf()
      var fileName = ts + '.' + ext;

      const img = await imgProfile.move(Helpers.publicPath('uploads'),{
        name: fileName
      })

      if(!imgProfile.moved()) return imgProfile.error();

      tutor.avatar = imgProfile.fileName;
      await tutor.save();
      // update more list of images
      // await Promise.all(
      //   imgProfile.movedList().map( img => imgProfile().create({ path: img.fileName }))
      // )

      return response.status(200).send(tutor);

    } catch (error) {

    }
  }
}

module.exports = TutorController;
