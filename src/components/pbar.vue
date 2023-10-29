<script setup lang="ts">
import { onMounted,ref} from 'vue';

let value1 = ref(0);
let value2 = ref(0);
let value3 = ref(0);
let finished = [0,0,0];
var intervalId;
let internval_sec = 1000;
let working = ref(true)
function doUpdate(value, iters:number,index:number){
  for (let i = 0; i < Math.floor(Math.random() * iters) + 1; i++) {
      if (value.value != 100) {
        let new_value = Math.round((value.value + Math.random()) * 100) / 100;
        value.value = Math.min(new_value, 100);
      } else{
        finished[index] = 1;
      }
  }
}
function updateValues(){
    doUpdate(value1, 5, 0);
    doUpdate(value2, 3, 1);
    doUpdate(value3, 4, 2);
    if (internval_sec > 400){
      internval_sec -= 40;
      clearInterval(intervalId);
      intervalId = setInterval(updateValues, internval_sec);
    }
    if (finished.reduce((a,b)=>a+b,0) == 3){
      working.value = false;
      clearInterval(intervalId);
    }
}

function buttonClick(){
  value1.value += 20;
  value2.value += 20;
  value3.value += 20;
}

onMounted(() => {
    intervalId = setInterval(updateValues, internval_sec);
});

</script>

<template>
    <div v-if="working" class="title">
      <p>Virus Downloading</p>
    </div>
    <div v-if="working" class="pbar1">
      <progressbar :value=value1 color="#bb2727"/>
    </div>
    <div v-if="working" class="text1">
      <h1>ShadowCreeper</h1>
    </div>
    <div v-if="working" class="pbar2">
      <progressbar :value=value2 color="#bb2727"/>
    </div>
    <div v-if="working" class="text2">
      <h1>VaultWorm</h1>
    </div>
    <div v-if="working" class="pbar3">
      <progressbar :value=value3 color="#bb2727"/>
    </div>
    <div v-if="working" class="text3">
      <h1>WraithWire</h1>
    </div>
    <button v-if="working" @click="buttonClick">Abort</button>
    <div v-else>
      <img src="../assets/rr.gif" class="rr1"/>
      <img src="../assets/rr.gif" class="rr2"/>
      <img src="../assets/rr.gif" class="rr3"/>
      <img src="../assets/rr.gif" class="rr4"/>
    </div>
</template>

<style scoped>

.title {
  position: absolute;
  top: 43%;
  left: 40%;
  font-size: 24px; /* Set your desired font size here */
  color: red; /* Set your desired text color here */
  z-index: 1000;
}

.pbar1 {
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 2000;
  width: 30%;
  color: #000000
}
.text1{
  position: absolute;
  top: 49%;
  left: 20%;
  z-index: 2000;
  color: #ff0000;
  font-size: 10px;
}

.pbar2 {
  position: absolute;
  top: 55%;
  left: 35%;
  z-index: 2000;
  width: 30%;
  color: #000000
}

.text2{
  position: absolute;
  top: 54%;
  left: 24%;
  z-index: 2000;
  color: #ff0000;
  font-size: 10px;
}

.pbar3 {
  position: absolute;
  top: 60%;
  left: 35%;
  z-index: 2000;
  width: 30%;
  color: #000000
}

.text3{
  position: absolute;
  top: 59%;
  left: 24%;
  z-index: 2000;
  color: #ff0000;
  font-size: 10px;
}


button {
  position: absolute;
  top: 65%;
  left: 45%;
  z-index: 2000;
  width: 8%;
  color: #ff0000;
  background-color: #000000;
}
.rr1 {
  position: absolute;
  top: 20%;
  left: 25%;
  z-index: 2000;
}
.rr2 {
  position: absolute;
  top: 20%;
  left: 54%;
  z-index: 2000;
}
.rr3 {
  position: absolute;
  top: 50%;
  left: 25%;
  z-index: 2000;
}
.rr4 {
  position: absolute;
  top: 50%;
  left: 54%;
  z-index: 2000;
}
</style>
