'use strict'
const Setting =use('App/Models/Setting')

var exec = require('child_process').exec;
class SettingController {

  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
  async onMessage (message) {
    let set = await Setting.findOrFail(message.id);
    console.log(set);
    if(set.password_db == null){
      set.password_db=""
    }
    this.socket.broadcastToAll('message',message)
    let command = exec('C:\\xampp\\mysql\\bin\\mysqldump  --user=' + set.user_db + ' --password=' + set.password_db + ' -h 127.0.0.1 -P 4000 '+ set.name_db +' > respaldo\\'+ set.name +'.sql');

    }


}

module.exports = SettingController
