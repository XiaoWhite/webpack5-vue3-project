<!-- 左侧菜单栏 -->
<template>
  <div class="side-bar">
    <!-- logo -->
    <slot name="logo"></slot>

    <!-- 菜单 -->
    <el-menu :default-active="defaultActive" mode="vertical">
      <Menu :menu-list="menuList"></Menu>
    </el-menu>

    <!-- 其他 -->
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
// import Menu from './Menu.vue';
import { ref } from 'vue';
const defaultActive = ref('1-4-2');
const menuList = ref([
  {
    id: '1',
    title: 'ElementPlus',
    path: '',
    children: [
      {
        id: '1-1',
        title: 'Button',
        path: '',
      },
      {
        id: '1-2',
        title: 'Border',
        path: '',
      },
      {
        id: '1-3',
        title: 'Color',
        path: '',
      },
      {
        id: '1-4',
        title: 'Table',
        path: '',
        children: [
          {
            id: '1-4-1',
            title: '普通 Table',
            path: '',
          },
          {
            id: '1-4-2',
            title: '滚动 Table',
            path: '',
          },
          {
            id: '1-4-3',
            title: '固定高度 Table',
            path: '',
            children: [
              {
                id: '1-4-3-1',
                title: '左边固定',
                path: '',
              },
              {
                id: '1-4-3-2',
                title: '右边固定',
                path: '',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Echarts',
    path: '',
    children: [
      {
        id: '2-1',
        title: 'Line',
        path: '',
      },
      {
        id: '2-2',
        title: 'Pie',
        path: '',
      },
      {
        id: '2-3',
        title: 'Bar',
        path: '',
      },
    ],
  },
]);
</script>

<style scoped lang="scss">
.side-bar {
  width: 250px;
  height: 100%;
  flex-shrink: 0;
	overflow-y: auto;
  background-color: lightblue;
}
</style>
