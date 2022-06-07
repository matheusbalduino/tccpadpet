const User = use('App/Models/User')

class Message{

  constructor(sender, reciever, message){
    this.sender = sender;
    this.reciever = reciever;
    this.message = message;
  }

  async registerMessage(){
    try {

      const body = {
        message: this.message,
        sender:  this.sender,
        reciever: this.reciever,
        selfsender: this.sender === this.reciever? true : false
      };

      const user = await User.findBy('id', this.sender);

      const message = await user.messages().create(body);

      return message;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Message;
