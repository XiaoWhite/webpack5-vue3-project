<template>
  <template v-for="menu in menuList" :key="menu.id">
    <!-- 如果有子菜单，使用 el-sub-menu -->
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.id">
      <template #title>
        <div class="title">{{ menu.title }}</div>
      </template>

      <template v-for="child in menu.children" :key="child.id">
        <!-- 判断子菜单是否还有子菜单 -->
        <Menu v-if="child.children && child.children.length > 0" :menu-list="[child]"></Menu>
        <template v-else>
          <el-menu-item :index="child.id">{{ child.title }}</el-menu-item>
        </template>
      </template>
    </el-sub-menu>

    <!-- 如果没有，直接使用 el-menu-item -->
    <el-menu-item v-else :index="menu.id">{{ menu.title }}</el-menu-item>
  </template>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  menuList: {
    type: Array,
    default() {
      return [];
    },
  },
});

// const defaultActive = ref('');
// const menuList = ref([
//   {
//     id: '1',
//     title: 'ElementPlus',
//     path: '',
//     children: [
//       {
//         id: '1-1',
//         title: 'Button',
//         path: '',
//       },
//       {
//         id: '1-2',
//         title: 'Border',
//         path: '',
//       },
//       {
//         id: '1-3',
//         title: 'Color',
//         path: '',
//       },
//     ],
//   },
//   {
//     id: '2',
//     title: 'Echarts',
//     path: '',
//     children: [
//       {
//         id: '2-1',
//         title: 'Line',
//         path: '',
//       },
//       {
//         id: '2-2',
//         title: 'Pie',
//         path: '',
//       },
//       {
//         id: '2-3',
//         title: 'Bar',
//         path: '',
//       },
//     ],
//   },
// ]);
</script>

<style scoped lang="scss"></style>
