# RunJS-Slackbot
A Slack bot that runs javascript (es6) in slack chat.

It is built using Botikit by Howdy. https://howdy.ai/botkit/ 


## Installation
```bash
git clone https://github.com/prashantagarwal/RunJS-Slackbot.git
cd RunJS-Slackbot
npm install
```
## Setup

1) First make a bot integration inside of your Slack channel. Go here: https://my.slack.com/services/new/bot

Enter a name for your bot.
Make it something fun and friendly, but avoid a single task specific name.
Bots can do lots! Let's not pigeonhole them.


2) When you click "Add Bot Integration", you are taken to a page where you can add additional details about your bot, like an avatar, as well as customize its name & description.


3) Run the example bot app, using the token you just copied:
​
```bash
token=REPLACE_THIS_WITH_YOUR_TOKEN node bot.js
```
4) Invite bot to a channel
    Type: `/invite @<botname>` to invite your bot into channel.


5) Your bot should be online! Within Slack, send it a quick direct message to say hello. It should say hello back! 
`Hello @<botname>`.

## Running Javascript in Slack
Type: `js mode @<botname>`

And that's it you are good to go.
You can run js in slack now (es6 too)
E.g

```javascript
var a=[1,2,3];
a.map(n=>n*2);
```
Output
```javascript
[2,4,6]
```
## Exiting from JS mode
Type: `exit`
## Demo

![alt tag](http://i.imgur.com/lvx06FU.gif)

## TODO:
1) Run attatched js files.

2) save code as snippet.


#### Feel free to suggest how can we can improve this bot.
