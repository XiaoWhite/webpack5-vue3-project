<template>
  <!-- 虚拟列表 Demo -->
  <div class="page">
    <div>虚拟列表 Demo</div>

    <el-button type="primary" @click="loadData">Load Data</el-button>

    <div v-if="false" class="list-container" @scroll="handleScroll" ref="listContainer">
      <!-- scroll bar（用来撑起容器，显示滚动条） -->
      <div class="scroll-bar" :style="{ height: `${allDeviceCounts * itemHeight}px` }"></div>
      <!-- 列表 -->
      <div class="list-content" ref="listContent">
        <!-- 列表元素 -->
        <div class="list-item" v-for="(item, index) in visibleData" :key="item.id" @click="clickListItem(index)">
          <!-- <p>{{ item.name }}</p> -->
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>

    <el-button type="primary" plain @click="printScrollTop">打印 scrollTop</el-button>
    <div class="list-container" ref="testList">
      <div class="list-wrapper">
        <div class="list-item" v-for="index in 100" :key="index" @click="clickListItem(index)">
          <span>{{ index }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 引入 demo 数据
import { deviceList } from './demo-data/device-list-data.js';

import { computed, onMounted, ref, onDeactivated, onActivated } from 'vue';

const itemHeight = ref(40); // 列表中每个元素的高度
const list = ref([]); // 列表的全部数据
const visibleData = ref([]); // 可见区域的数据列表（需要被渲染的数据）
let visibleCount = 0; // 可见区域渲染的节点数量
let start = 0; // 从 list 中截取出可见区域数据的起点
let end = 0; // 从 list 中截取出可见区域数据的终点

// 列表数据总量
const allDeviceCounts = computed(() => {
  return list.value.length || 0;
});

const listContainer = ref(null); // list-container 的 ref
const listContent = ref(null); // list-content 的 ref

onMounted(() => {
  console.log('listContent ---- ', listContent);
  addReseizeObserver();
});

// 加载数据
function loadData() {
  list.value = JSON.parse(JSON.stringify(deviceList));

  handleScroll();
}

// 处理滚动事件
function handleScroll() {
  const scrollTop = listContainer.value.scrollTop;
  updateVisibleData(scrollTop);
}

// 更新可见区域的数据
function updateVisibleData(scrollTop = 0) {
  const clientHeight = listContainer.value.clientHeight; // 获取容器高度
  visibleCount = Math.ceil(clientHeight / itemHeight.value); // 计算显示行数
  start = Math.floor(scrollTop / itemHeight.value); // 计算开始位置
  end = start + visibleCount;

  // 上下都多显示一行，尽量减少上下出现空白的情况
  if (start >= 1) {
    start -= 1;
  }
  if (end < list.value.length) {
    end += 1;
  }
  visibleData.value = list.value.slice(start, end); // 截取显示区域的数据

  //把可见区域的 top 设置为 起始元素在整个列表中的位置（使用 transform 是为了更好的性能）
  listContent.value.style.webkitTransform = `translate3d(0, ${start * itemHeight.value}px, 0)`;
}

/**
 * 点击列表元素
 * @param {number} index 点击元素在可见数据列表中的 index（并非在完整数据列表中的 index）
 */
function clickListItem(index) {
  let finalIndex = start + index;
  console.log('clickListItem --- index = ', finalIndex);
}

/* --------------------------- 添加监听器 --------------------------- */
let resizeObserverInstance;
const testList = ref(null);
function addReseizeObserver() {
  // 创建一个 ResizeObserver 实例
  resizeObserverInstance = new ResizeObserver((entries) => {
    for (let entry of entries) {
      // entry.target 是发生尺寸变化的元素
      // const target = entry.target;
      // entry.contentRect 包含元素的新尺寸信息
      const { width, height } = entry.contentRect;
      console.log('元素尺寸发生变化:', width, height);

      // 在这里可以执行相应的操作，比如更新布局或样式
    }
  });

  // 要观察尺寸变化的元素
  const elementToObserve = testList.value;

  // 开始观察元素尺寸变化
  resizeObserverInstance.observe(elementToObserve);
}

function printScrollTop() {
  console.log('printScrollTop - testList.value.scrollTop ---- ', testList.value.scrollTop);
}

onActivated(() => {
  console.log('onActivated - testList.value.scrollTop ---- ', testList.value.scrollTop);
});
onDeactivated(() => {
  // 记录当前滚动的位置
  console.log('onDeactivated - testList.value.scrollTop ---- ', testList.value.scrollTop);
});
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

    .list-content {
      width: 100%;
      .list-item {
        width: 100%;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>
