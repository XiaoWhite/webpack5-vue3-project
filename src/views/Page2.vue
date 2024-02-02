<script setup>
import axios from 'axios';
import Util from '../utils/Util.js';
import { ref } from 'vue';
import { useEventBus } from '../../framework-components/utils/event-bus.js';
function sendRequest() {
  // const url = 'http://localhost:3000/test1?t=' + Date.now();
  // axios
  //   .get(url)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  console.log('test git revert');

  const url = 'http://localhost:3000/test2';
  axios
    .post(url, {
      t: Date.now(),
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.error(e);
    });
}

function clickFormat() {
  let str = 'hello';
  console.log(str);
  console.log(Util.formatTime(new Date()));
}

let p = {
  name: 'hello',
};
console.log(p);

const name = ref('');

/* --------------------------- EventBus --------------------------- */
const { postMessage } = useEventBus();
function clickPostMsg() {
  postMessage('TestMsg', {
    content: `msg - ${new Date().toString()}`,
  });
}

/* --------------------------- Upload --------------------------- */
const imgUploader = ref();
function uploadFileChange() {
  console.log('uploadFileChange --- ', imgUploader.value.files);

  // 上传
  let formData = new FormData();
  formData.append('img', imgUploader.value.files[0]);

  const url = 'http://localhost:3000/uploadImg';
  axios
    .post(url, formData)
    .then((res) => {
      console.log('upload ---- ', res);
    })
    .catch((e) => {
      console.error(e);
    });
}
</script>

<template>
  <div class="page">
    <div class="title">Page2</div>
    <el-input v-model="name"></el-input>
    <el-button type="primary" @click="sendRequest">Click</el-button>
    <el-button plain @click="clickFormat">FormatDate</el-button>
    <el-button plain @click="clickPostMsg">PostMessage</el-button>

    <div>
      <input ref="imgUploader" type="file" name="img" accept="image/*" @change="uploadFileChange" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
