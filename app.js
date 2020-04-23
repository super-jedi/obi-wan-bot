//require discord js
const Discord = require("discord.js");

//create new client
const client = new Discord.Client();


// Display a message once the bot has started
client.on("ready", ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    msg.send("WHAT ABOUT THE DROID ATTACK ONN THE WOOKIES?");
});



// Check messages for a specific command
client.on("message", msg => {
    // Send back a reply when the specific command has been written
    if (msg.content === "hello") {
        msg.reply("WELL HELLO THERE !");
    }

    else if(msg.content === "help"){
        msg.reply("The jedi council only allows me to respond to these things: hello and help and thank the maker and who are you?")
    }
    
    else if(msg.content === "thank the maker"){
        msg.reply("I WAS CREATED BY THE GREAT HARIKRISHNAN PS. HE IS AWESOME. ALL THANKS TO HIM")
    }
    
    else if(msg.content === "who are you?"){
        msg.reply("I AM MASTER OBI WAN KENOBI OF THE JEDI HIGH COUNCIL")
    }

});





//log in with token
client.login(process.env.BOT_TOKEN);
