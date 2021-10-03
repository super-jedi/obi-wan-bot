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
    else if(msg.content === ("obirep"+ )){
        msg.channel.send(msg.content + Text.slice(6,))
       
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
    // else if(msg.content === "hey" || "yes" || "lol" || "LOL" || "Lol" || "lol you suck, you found nothing" ){
    //     msg.channel.send("Let her go, Anakin.")
    //     msg.channel.send("Let her go")
    // }
  
    else if(msg.content === "The Chancellor doesn't appear to be corrupt."){
        msg.channel.send("Chancellor Palpatine is a politician.")
    }
    
    else{
        switch (msg.content) {

            case "you turned her against me": msg.channel.send("You have done that yourself.")
            break;
   
            case "You will not take her from me!" :msg.channel.send("Your anger and your lust for power have already done that.")
            break;

            case "I do not fear the dark side as you do. I have brought peace, freedom, justice and security to my new empire.": msg.channel.send("Your new empire?")
            break;

            case "Don't make me kill you.": msg.channel.send("Anakin, my allegiance is to the Republic, to democracy!")
            break;
            
            case "If you're not with me, then you're my enemy!": msg.channel.send("Only a Sith deals in absolutes. I will do what I must.")
            break;

            case "You will try.": msg.channel.send("I have failed you, Anakin. I have failed you")
            break;

            case "I should have known the Jedi were plotting to take over.": msg.channel.send("Anakin, Chancellor Palpatine is evil!")
            break;

            case "From my point of view, the Jedi are evil.": msg.channel.send("Well, then you are lost!")
            break;

            case "This is the end for you, my master.": msg.channel.send("It's over, Anakin. I have the high ground.")
          
            case "You underestimate my power.": msg.channel.send("Don't try it")
                                                msg.channel.send("You were the chosen one!\nIt was said that you would destroy the Sith, not join them!\n")
                                                msg.channel.send("Bring balance to the Force.not leave it in darkness!")                                   
            break;

            case "I hate you!": msg.channel.send("You were my brother, Anakin.\nI loved you.\n")
            break;
            
            case "Sith lord": msg.channel.send("Chancellor Palpatine, Sith lords are our speciality.")
            break;


        }
    }
});





//log in with token
client.login(process.env.BOT_TOKEN);
