<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import pbar from './pbar.vue';

const matrixCanvas = ref(null);
const updateCanvasDimensions = (c) => {
   c.width = window.innerWidth;
   c.height = window.innerHeight;
  };

onMounted(() => {
  const c = matrixCanvas.value;
  const ctx = c.getContext("2d");

  updateCanvasDimensions(c);

  // Also update dimensions when window resizes
  window.addEventListener('resize', updateCanvasDimensions);
  // Setting the width and height of the canvas
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]|}";
  //converting the string into an array of single characters
  var matrix = letters.split("");

  var font_size = 10;
  var columns = c.width/font_size; //number of columns for the rain
  //an array of drops - one per column
  var drops: number[] = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for(var x = 0; x < columns; x++)
    drops[x] = 1; 
    //drawing the characters
    function draw() {
      //Black BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#f4427d";
      ctx.font = font_size + "px arial";
      //looping over drops
      for(var i = 0; i < drops.length; i++) {
          var text = matrix[Math.floor(Math.random()*matrix.length)];
          //x = i*font_size, y = value of drops[i]*font_size
          ctx.fillText(text, i*font_size, drops[i]*font_size);

          //sending the drop back to the top randomly after it has crossed the screen
          //adding a randomness to the reset to make the drops scattered on the Y axis
          if (drops[i]*font_size > c.height && Math.random() > 0.975) {
            drops[i] = 0;
            //incrementing Y coordinate
          }
          drops[i]++;
        }
      }
      setInterval(draw, 35);
    });
onUnmounted(() => {
   window.removeEventListener('resize', updateCanvasDimensions);
});
</script>

<template>
  <div>
    <canvas ref="matrixCanvas"></canvas>
    <pbar />

  </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

body {
  background: black;
}
canvas {
  display:block;
  z-index: 100;
  }
</style>
