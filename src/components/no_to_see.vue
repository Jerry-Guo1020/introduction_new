<template>
    <div class="container">
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
      <template #footer>
        <n-button strong secondary round type="success">找点乐子吧</n-button>
      </template>
      
    </n-result>
  </div>
  
  
  <!-- 这个是一个展示小东西的一个的插件 -->
  <!-- <n-flex>
      <n-float-button position="relative" type="primary" menu-trigger="hover">
        <n-icon>
          <CashIcon />
        </n-icon>
        <template #menu>
          <n-float-button shape="square" type="primary">
            <n-icon>
              <CashIcon />
            </n-icon>
          </n-float-button>
          <n-float-button>
            <n-icon>
              <CashIcon />
            </n-icon>
          </n-float-button>
          <n-float-button>
            <n-icon>
              <CashIcon />
            </n-icon>
          </n-float-button>
        </template>
      </n-float-button>
  </n-flex> -->
  </template>
  
  <script setup lang="ts">
  // import { CashOutline as CashIcon } from '@vicons/ionicons5'
  
  </script>
  
  <style scoped>
  .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-position: center;
  }
  </style>