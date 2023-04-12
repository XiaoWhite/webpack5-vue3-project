<template>
  <div class="page">
    <h1>CanvasDemo</h1>

    <el-button @click="rotateLeft">左旋90度</el-button>

    <canvas class="imgEditor" ref="imgEditor" width="500" height="500"></canvas>

    <img ref="source" src="../../../assets/images/finger.jpeg" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const imgEditor = ref(null);
const source = ref(null);
let ctx = null;

onMounted(() => {
  console.log('imgEditor --- ', imgEditor.value);
  ctx = imgEditor.value.getContext('2d');
  // let img = new Image();
  // img.src = '../../../assets/images/finger.jpeg';
  // img.onload = (res) => {
  // 	console.log(res);
  // };

  source.value.onload = (res) => {
    console.log(res);
    // ctx.rotate(-Math.PI * (45 / 180));
    ctx.drawImage(source.value, 0, 0, 500, 500);
  };
});
function rotateLeft() {
  console.log('rotateLeft ----- ');
  ctx.translate(250, 250);
  ctx.rotate((-90 * Math.PI) / 180);
  ctx.drawImage(source.value, -250, -250, 500, 500);
}
</script>

<style scoped lang="scss">
.imgEditor {
  margin: 40px;
  width: 500px;
  height: 500px;
  background-color: lightcyan;
}
</style>
