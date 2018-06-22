# Get Out

[Live Link](https://dchen323.github.io/GetOut/)

## Background and Overview

Get Out is a single screen browser game where the user tries to escape. The game starts with the player on a ledge near the left hand side of the screen. The user can use his mouse to click on a point on the screen to release a hook that can attach to parts of the ceilings to swing him across the screen. The player wins when the the chicken reaches the door or loses when he either falls into the bottom of the screen or swings to the bottom of the screen.

![demo](https://res.cloudinary.com/dchen3/image/upload/v1529600128/get_out.gif)

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
  * ```chicken.js``` for the chicken logic including gravity, swing speed.
  * ```hook.js``` for the hook logic that will determine the swing speed and collision logic with the ceiling.
  * ```main.js``` for handling canvas and event listeners
  * ```game.js``` to run the game.
  * ```sound.js``` to add sound effects to the game

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
  * Add sound effects
  * Add background music

## Challenges

The biggest challenge for this project was creating the algorithm for the pendulum swing motion when the chicken is attached to the ceiling. Below is the solution that I eventually came to.

```javascript
//chicken.js
updateSwing(hook){
  this.x = hook.xEnd - Math.sin(hook.radian) * hook.length;
  this.y = hook.yEnd + Math.cos(hook.radian) * hook.length;
  this.animate();
}
//hook.js
setPos(x,y){
  this.x = x;
  this.y = y;
  this.radian= this.radian || Math.atan((this.xEnd-x)/Math.abs(this.yEnd-y));
  this.length = this.length || Math.sqrt(Math.pow((this.xEnd-x),2)+Math.pow((this.yEnd-y),2));
}
```
Since the pendulum swing motion is dependent on the hooks attached positions, the angle it makes with the ceiling, and the length, the two are deeply intertwined. Before when I did not use the or operator, the radian and and length would constantly change due to the fact that the x,y start position of the hook was dependent on the chickens position and that would always differ. By using the or operator I was able to set the radian and length to the first initial hook attachment to give me a proper pendulum motion.

Another challenge was getting the canvas to move with the chicken. The solution I implemented was creating a div to hold the canvas and hide the overflow, which moves with the chicken and gives it a left padding like so :

``` javascript
//game.js
panUser(){
  let canvasHolder = document.getElementById("canvas-holder");
  canvasHolder.scrollLeft = this.chicken.x - 100;
}
```

## Future Implementation

* Add a restart button to reset everything
* Allow a faster velocity/swing motion.
* Create a ceiling collision affect with the chicken.
