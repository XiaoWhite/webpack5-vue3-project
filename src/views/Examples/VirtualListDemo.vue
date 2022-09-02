<template>
  <!-- 虚拟列表 Demo -->
  <div class="page">
    <div>虚拟列表 Demo</div>

    <el-button type="primary" @click="loadData">Load Data</el-button>

    <div class="list-container" @scroll="handleScroll" ref="scrollDom">
      <!-- scroll bar -->
      <div class="scroll-bar" :style="{ height: `${allDeviceCounts * itemHeight}px` }"></div>
      <!-- 列表 -->
      <div class="list-content" ref="content">
        <!-- 列表元素 -->
        <div class="list-item" v-for="item in visibleData" :key="item.id">
          <p>{{ item.deviceName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 引入 demo 数据
import { deviceList } from './demo-data/device-list-data.js';

import { computed, onMounted, ref } from 'vue';

const itemHeight = ref(40); // 列表中每个元素的高度
const list = ref([]); // 列表的全部数据
const visibleData = ref([]); // 可见区域的数据列表（需要被渲染的数据）
let visibleCount = 0; // 可见区域渲染的节点数量
let start = 0; // 从 list 中截取出可见区域数据的起点
let end = 0; // 从 list 中截取出可见区域数据的终点

const allDeviceCounts = computed(() => {
  return list.value.length || 0;
});

const scrollDom = ref(null); // list-container 的 ref
const content = ref(null); // list-content 的 ref

onMounted(() => {
  console.log('content ---- ', content);
});

function loadData() {
  // let temp = deviceList.slice(0, 20);
  let tempList = [];
  deviceList.forEach((item) => {
    let dataSource = item.dataSource ? JSON.parse(item.dataSource) : item;
    tempList.push(dataSource);
  });

  list.value = tempList;

  handleScroll();
}

function handleScroll() {
  const scrollTop = scrollDom.value.scrollTop;
  updateVisibleData(scrollTop);
}

function updateVisibleData(scrollTop = 0) {
  const clientHeight = scrollDom.value.clientHeight;
  visibleCount = Math.ceil(clientHeight / itemHeight.value);
  start = Math.floor(scrollTop / itemHeight.value);
  end = start + visibleCount;
  visibleData.value = list.value.slice(start, end);

  //把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
  content.value.style.webkitTransform = `translate3d(0, ${start * itemHeight.value}px, 0)`;
}

//监听scroll事件，计算可视区域
// handleScroll() {
// const scrollTop = this.$refs.scrollDom.scrollTop;
// this.updateVisibleData(scrollTop);
// },
// updateVisibleData(scrollTop = 0) {
// 	const clientHeight = this.$refs.scrollDom.clientHeight;
// 	this.visibleCount = Math.ceil(clientHeight / this.itemHeight);
// 	this.start = Math.floor(scrollTop / this.itemHeight);
// 	this.end = this.start + this.visibleCount;
// 	this.visibleData = this.lists.slice(this.start, this.end);

// 	//把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
// 	this.$refs.content.style.webkitTransform = `translate3d(0, ${this.start * this.itemHeight / 20}rem, 0)`;
// },
</script>

<style scoped lang="scss">
.page {
  .list-container {
    position: relative;
    width: 500px;
    height: 500px;
    box-sizing: border-box;

    background-color: lightcyan;
    margin: 30px;

    overflow-y: auto;

    .scroll-bar {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      width: 8px;
    }
  }
}
</style>
