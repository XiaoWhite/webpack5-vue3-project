<template>
  <template v-for="menu in menuList" :key="menu.id">
    <!-- 如果有子菜单，使用 el-sub-menu -->
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.id">
      <template #title>
        <!-- 图标 -->
        <img v-if="menu.icon" class="menu-icon" :src="require(`../../../assets/images/menu-icons/${menu.icon}.png`)" />
        <!-- 标题 -->
        <span class="title">{{ menu.title }}</span>
      </template>

      <template v-for="child in menu.children" :key="child.id">
        <!-- 判断子菜单是否还有子菜单 -->
        <LayoutMenu v-if="child.children && child.children.length > 0" :menu-list="[child]"></LayoutMenu>
        <el-menu-item v-else :index="child.id" @click="clickMenuItem(child)">{{ child.title }}</el-menu-item>
      </template>
    </el-sub-menu>

    <!-- 如果没有，直接使用 el-menu-item -->
    <el-menu-item v-else :index="menu.id" @click="clickMenuItem(child)">{{ menu.title }}</el-menu-item>
  </template>
</template>

<script>
export default {
  name: 'LayoutMenu',
};
</script>

<script setup>
// [@vue/compiler-sfc] `defineProps` is a compiler macro and no longer needs to be imported.
// import { defineProps } from 'vue';

// import { useRouter } from 'vue-router';
// const $router = useRouter();

const props = defineProps({
  menuList: {
    type: Array,
    default() {
      return [];
    },
  },
});

const emit = defineEmits(['click-menu']);

// 点击菜单
function clickMenuItem(menu) {
  console.log('click menu -- ', menu);
  // 传递事件
  emit('click-menu', menu);
}
</script>

<style scoped lang="scss">
.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
</style>
