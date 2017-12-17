# sithari-bot
Bot for sithari giuld

## Settings

### Config
Config | Description
------ | ----
token | Your token
prefix | Your prefix
channels | List of channels
superuser | Bot admin nickname
specialuser | Nickname user who have special permission
roles | Roles of user for moderation bot

### Commands

#### Example
{
  "help": {
    "command": "help",
    "description": "выводит список комманд"
  },
  "power": {
    "command": "абсолютнаявласть",
    "description": "АБСОЛЮТНАЯВЛАААСТЬ!",
    "value": "./images/power.jpg",
    "error": "Только владыка может использовать силу!"
  },
  "rules": {
    "command": "rules",
    "description": "правила группы",
    "value": "Правила"
  },
  "rankor": {
    "command": "rankor",
    "description": "правил героического ранкора",
    "value": "pew pew pew"
  },
  "tank": {
    "command": "tank",
    "description": "правила героического танка",
    "value": "кеноби, кх-кх-кхрр"
  }
}
