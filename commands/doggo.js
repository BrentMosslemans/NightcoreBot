const Discord = require("Discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
   .get (``)

  let dogembed = new Discord.RichEmbed()
  .setColor("#000000")
  .setTitle("Dog :dog;")
  .setImage(body.files)

  message.channel.send(dogembed);


}

module.exports.help = {
  name: "dog"
}
