---
layout: post
title: Discord Minesweeper
published: true
tags: project game minesweeper python
---

I think I have a new idea for a project!

![minesweeper game src:richerramblings.wordpress.com](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fricherramblings.files.wordpress.com%2F2015%2F08%2Fminesweeper.jpg&f=1&nofb=1)

I want to make a discord bot that allows players to 'play' minesweeper. My current plan is to have a discord bot that creates a minesweeper grid of spoilers which allows you to click on the boxes to reveal what is underneath (as I am writing this I am thinking of a lot of issues).


If the grid is created (lets say 10x10): <br>
>☐☐☐☐☐☐☐☐☐☐<br>☐☐☐☐☐☐☐☐☐☐<br>☐☐☐☐☐☐☐☐☐☐<br>☐☐☐☐☐☐☐☐☐☐<br>☐☐☐☐☐☐☐☐☐☐<br>☐☐☐☐☐☐☐☐☐☐<br>☐☐☐☐☐☐☐☐☐☐<br>☐☐☐☐☐☐☐☐☐☐<br>☐☐☐☐☐☐☐☐☐☐<br>☐☐☐☐☐☐☐☐☐☐<br>

The player can click on each square to display what is underneath, the bot will have pre-decided bomb positions and then assigned each square the number value it needs to display adjacent bombs.


### Problems

* If the player clicks a wrong tile straight away the game is ruined
* Players cannot flag bombs
* There is no way for the bot to know if the player has one or lost (meaning no leader-boards) - To let the player know if they have completed the board a button can allow them to display the full uncovered board

### Alternate idea

Instead of using spoilers that are clicked on, the player enters the co-ords of the space they wish to uncover or tag, this system could also be used for a game like battle ships (possibly the bot could be a game bot)
<br><br><br><br>
I quite like the alternate idea.