<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo left-menu-box"
    @open="handleOpen"
    @close="handleClose"
    style="width: 330px;"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mysql"></use>
        </svg> -->
        <svg-icon iconName="icon-mysql"></svg-icon>
        </el-icon>
        <span>Mysql</span>
      </template>
      <el-sub-menu index="1-4">
        <template #title>
          <span>默认数据源</span>
        </template>
        <el-menu-item index="/nav/2">
          <template #title>
            数据库
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="/nav/2">
      <el-icon>
        <IconMenu />
      </el-icon>
      <template #title>
        Navigator Two
      </template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon>
        <Document />
      </el-icon>
      <template #title>
        Navigator Three
      </template>
    </el-menu-item>
    <el-menu-item index="/nav/4">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>
        Navigator Four
      </template>
    </el-menu-item>
  </el-menu>
</template>


<style scoped>
  .left-menu-box {
    width: 260px;
  }
</style>