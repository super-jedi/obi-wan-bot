//require discord js
const Discord = require("discord.js");

//create new client
const client = new Discord.Client();


// Display a message once the bot has started
client.on("ready", ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    msg.channel.send("WHAT ABOUT THE DROID ATTACK ONN THE WOOKIES?");
});



// Check messages for a specific command
client.on("message", msg => {
    // Send back a reply when the specific command has been written
    if (msg.content === "hello") {
        msg.channel.send("WELL HELLO THERE !");
    }

    else if(msg.content === "help"){
        msg.channel.send("The jedi council only allows me to respond to these things: hello and help and thank the maker and who are you?")
    }
    
    else if(msg.content === "thank the maker"){
        msg.channel.send("I WAS CREATED BY THE GREAT HARIKRISHNAN PS. HE IS AWESOME. ALL THANKS TO HIM")
    }
    
    else if(msg.content === "who are you?"){
        msg.channel.send("I AM MASTER OBI WAN KENOBI OF THE JEDI HIGH COUNCIL")
    }

    // else if(msg.content === "republic credits will do just fine"){
    //     msg.channel.send("Pls daily")
    // }
    else if(msg.content === "republic credits will do just fine"){
        msg.channel.send("t!daily")
    }
    else if(msg.content === "droid attack on the wookies"){
        msg.channel.send("Pls steal @thevishnu")
    }

    
    
});





//log in with token
client.login(process.env.BOT_TOKEN);
