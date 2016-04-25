# RunJS-Slackbot
A Slack bot that runs javascript (es6) in slack chat

## Installation
```bash
git clone git@github.com:howdyai/botkit.git
cd RunJS-Slackbot
npm install
```
## Setup

1) First make a bot integration inside of your Slack channel. Go here:

https://my.slack.com/services/new/bot

Enter a name for your bot.
Make it something fun and friendly, but avoid a single task specific name.
Bots can do lots! Let's not pigeonhole them.

2) When you click "Add Bot Integration", you are taken to a page where you can add additional details about your bot, like an avatar, as well as customize its name & description.

Copy the API token that Slack gives you. You'll need it.

3) Run the example bot app, using the token you just copied:
​
```
token=REPLACE_THIS_WITH_YOUR_TOKEN node bot.js
```
4) Invite bot to a channel

Type: `/invite @<my bot>` to invite your bot into channel.
​
5) Your bot should be online! Within Slack, send it a quick direct message to say hello. It should say hello back!

