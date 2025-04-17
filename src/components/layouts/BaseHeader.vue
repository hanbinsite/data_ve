<script lang="ts" setup>
import { repository } from '~/../package.json'

import { toggleDark } from '~/composables'
</script>

<template>
  <el-menu class="el-menu-top" mode="horizontal" :ellipsis="false" router>
    <el-menu-item index="/">
      <div class="flex items-center justify-center gap-2">
        <div class="text-xl">
          <img src="../../assets/logo.png" class="logo">
        </div>
        <span>Data Ve</span>
      </div>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        连接管理
      </template>
      <el-menu-item index="2-1">
        新增连接
      </el-menu-item>
      <el-menu-item index="2-2">
        连接管理
      </el-menu-item>
      <el-menu-item index="2-3">
        导入配置
      </el-menu-item>
      <el-menu-item index="2-3">
        导出配置
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      Info
    </el-menu-item>
    <el-menu-item index="4">
      Orders
    </el-menu-item>

    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="w-full cursor-pointer border-none bg-transparent"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>

  </el-menu>
</template>

<style lang="scss">
.el-menu-top {
  // &.ep-menu--horizontal > .ep-menu-item:nth-child(1) {
  //   margin-right: auto;
  // }
  height: 42px;

  .logo {
    width: 18px;
    height: 18px;
    line-height: 20px;
    margin-bottom: 5px;
  }
}
</style>
