<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEventBus } from '../../framework-components/utils/event-bus.js';
import MyInput from './ElementDemo/components/MyInput.vue';
const $router = useRouter();

const { onMessage } = useEventBus();
const msgContent = ref('');
onMessage('TestMsg', (data) => {
  console.log('Page1 - onMessage ---- ', data);
  msgContent.value = data.content;
});

onMounted(() => {
  console.log('page1 - onMounted ---');
  console.log('change occur in page1');
});

// import Util from '../utils/Util.js';
function clickTest1() {
  // console.log(Util.formatTime(new Date()));
  $router.push('/page2');
}

function handleInput(val) {
  console.log('handleInput --- ', val);
}
const name = ref('');
const age = ref(0);
</script>
<template>
  <div class="page">
    <div class="title">Page1</div>
    <h2>This is a Vue3 project width webpack5</h2>
    <input type="text" v-model="name" />
    <MyInput type="number" @input="handleInput"></MyInput>
    <div class="container" @click="clickTest1"></div>
    <h2>接收到的消息：{{ msgContent }}</h2>

    <!-- <div class="header">
			<svg class="cutefont-svg" aria-hidden="true">
				<use xlink:href="#icon-duihuan"></use>
			</svg>
			<span>兑换</span>
		</div> -->
  </div>
</template>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;

  .title {
    font-size: 20px;
    color: red;
  }

  .container {
    width: 300px;
    height: 300px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 6px 0 red;
  }

  .header {
    width: 100%;
    height: 28px;
    font-size: 20px;
    background-color: lightblue;

    .cutefont {
      width: 20px;
      height: 20px;
      font-size: 20px;
    }
  }
}
</style>
