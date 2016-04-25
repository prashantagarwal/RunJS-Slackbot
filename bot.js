var Babel = require("babel-core");
var Entities = require('html-entities').XmlEntities;
var vm = require('vm')
entities = new Entities();
if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: false,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.hears(['hello', 'hi'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });


    controller.storage.users.get(message.user, function(err, user) {
        if (user && user.name) {
            bot.reply(message, 'Hello ' + user.name + '!!');
        } else {
            bot.reply(message, 'Hello.');
        }
    });
});


controller.hears(['shutdown'], 'direct_message,direct_mention,mention', function(bot, message) {

    bot.startConversation(message, function(err, convo) {

        convo.ask('Are you sure you want me to shutdown?', [
            {
                pattern: bot.utterances.yes,
                callback: function(response, convo) {
                    convo.say('Bye!');
                    convo.next();
                    setTimeout(function() {
                        process.exit();
                    }, 3000);
                }
            },
        {
            pattern: bot.utterances.no,
            default: true,
            callback: function(response, convo) {
                convo.say('*Phew!*');
                convo.next();
            }
        }
        ]);
    });
});



//My  JS repl
//TO DO Error handling and reporting
controller.hears(['js mode'],'direct_message,direct_mention,mention',function(bot, message){
    bot.startConversation(message,function(err,convo) {
        var sandbox = {};
        var context = new vm.createContext(sandbox);
        convo.say('JS Mode on');
        var string=';';
        var sandbox={};
        convo.ask('', function(response, convo){
            //convert es6 to es5
            if(response.text.toLowerCase() === 'exit'){
                convo.say('ok Bye');
                convo.next();
                
            }
            else {
                var ans;
                try {
                    new Function(entities.decode(response.text));
                    var es5String = Babel.transform(entities.decode(response.text),{ "presets": ["es2015"],highlightCode: false }).code;
                    console.log('es5',es5String);
                    es5String=es5String.replace('"use strict";\n\n','')
                    //run this in sandbox environment
                    // string+=es5String;
                    ans=vm.runInNewContext(es5String, sandbox);
                } 
                catch(ex){
                    ans = '['+ex.name+']: '+ex.message;
                }
                if(ans===undefined){
                    ans='undefined'
                } else {
                    ans=JSON.stringify(ans);
                }
                
                convo.say(ans);
                console.log(ans);
                convo.repeat();
                convo.next();
            }
        });

    });

})
