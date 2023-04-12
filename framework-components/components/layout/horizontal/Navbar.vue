<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <!-- 左侧边栏开关 -->
      <el-icon @click="clickExpand">
        <Fold v-if="isExpand" />
        <Expand v-else />
      </el-icon>
    </div>
    <!-- 中间内容 -->
    <div class="nav-bar-content"></div>

    <!-- 右侧内容 -->
    <div class="nav-bar-right"></div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useMenuStore from '../../../store/menu.js';
const menuStore = useMenuStore();
const { isExpand } = storeToRefs(menuStore); // 是否展开侧边栏状态

// 点击展开/关闭侧边栏
function clickExpand() {
  isExpand.value = !isExpand.value;
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightcyan;

  .nav-bar-left {
    min-width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 8px;

    .el-icon {
      cursor: pointer;
    }
  }

  .nav-bar-content {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .nav-bar-right {
    min-width: 100px;
    height: 100%;
    box-sizing: border-box;
    padding: 0 8px;
  }
}
</style>
