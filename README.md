# Get Out

[Live Link](https://dchen323.github.io/GetOut/)

## Background and Overview

Get Out is a single screen browser game where the user tries to escape. The game starts with the player on a ledge near the left hand side of the screen. The user can use his mouse to click on a point on the screen to release a hook that can attach to parts of the ceilings to swing him across the screen. The player wins when the the chicken reaches the door or loses when he either falls into the bottom of the screen or swings to the bottom of the screen.

## Functionality & MVP

  * Players can navigate through the map by swinging on a hook that they release on mouse click.
  * Players win when the reach the door.
  * Players lose when they fall into the fire.
  * Distance/score traveled will be displayed.
  * Add effects on winning/losing.
  ### Bonus
  * Adding Music.

## Wireframes

The webpage will have the game canvas, which includes the player's sprite, hook, ceiling objects and fire on the floor.

On the left side of the page, there will be a title, instructions, and links to my Github and LinkedIn made with just using a div in html.

![game](https://s33.postimg.cc/5aid1nslb/javascript_wireframes.png)

## Architecture & Technologies

This technologies used are
  * Vanilla JavaScript for overall logic.
  * HTML 5 Canvas for DOM rendering.

The scripts needed for this project are.

  * ```map.js ``` to render the canvas elements.
  * ```sprite.js``` for the sprite logic including gravity, swing speed.
  * ```hook.js``` for the hook logic that will determine the swing speed.
  * ```game.js``` to run the game.

## Project Timeline
  ### Day 1
  * Set up basic canvas background.
  * Render sprite and hook.
  * Implement hook collision logic.

  ### Day 2
  * Create hook/sprite swing movement logic.
  * Add gravity logic.
  * Render moving canvas background.

  ### Day 3
  * Create door for winning.
  * Implement win/losing animations.
  * Display score.

  ### Day 4
  * Fix any bugs.
  * Add sound.
