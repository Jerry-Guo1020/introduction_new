<template>
  <div class="nav-wrapper">
    <!-- 左侧标题 -->
    <h1 class="site-title">郭嘉荣个人工作室</h1>

    <!-- 右侧菜单区域 -->
   
      <!-- 桌面端菜单 -->
      <n-menu
        v-if="!isMobileView"
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
        responsive
        @update:value="handleMenuSelect"
      />

      <!-- 移动端折叠按钮 -->
      <n-dropdown
        v-if="isMobileView"
        v-model:show="showCollapsedMenu"
        :options="menuOptions"
        placement="bottom-end"
        @select="handleMenuSelect"
      >
        <n-button class="collapse-button">
          <template #icon>
            <n-icon><MenuOutline /></n-icon>
          </template>
        </n-button>
      </n-dropdown>
    </div>
  
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, h } from 'vue';
import { useRouter } from 'vue-router';
import { NIcon, NMenu, NButton, NDropdown } from 'naive-ui';
import { MenuOutline, BookOutline as BookIcon, PersonOutline as PersonIcon } from '@vicons/ionicons5';
import type { Component } from 'vue'; // 导入 Component 类型

// 渲染菜单图标
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default defineComponent({
  components: {
    NIcon,
    NMenu,
    NButton,
    NDropdown,
  },
  setup() {
    const router = useRouter();
    const activeKey = ref<string | null>(null);
    const isMobileView = ref(false);
    const showCollapsedMenu = ref(false);

    // 菜单配置项
    const menuOptions = [
      {
        label: '首页',
        key: 'home',
        icon: renderIcon(BookIcon),
      },
      {
        label: '个人介绍',
        key: 'introduction',
        icon: renderIcon(PersonIcon),
      },
      {
        label: '优秀项目',
        key: 'projects',
        icon: renderIcon(BookIcon),
        children: [
          {
            label: '项目 1',
            key: 'project-1',
          },
          {
            label: '项目 2',
            key: 'project-2',
          },
        ],
      },
      {
        label: '获奖奖项',
        key: 'awards',
        icon: renderIcon(BookIcon),
      },
      {
        label: '金合欢科技',
        key: 'acacia',
        icon: renderIcon(BookIcon),
      },
      {
        label: '登录',
        key: 'login',
        icon: renderIcon(PersonIcon),
      },
    ];

    // 响应式布局检测
    const checkMobileView = () => {
      isMobileView.value = window.innerWidth < 300;
    };

    // 菜单选择处理
    const handleMenuSelect = (key: string) => {
      showCollapsedMenu.value = false;
      const routeMap: Record<string, string> = {
        home: '/',
        login: '/login',
        introduction: '/introduction',
        projects: '/projects',
        awards: '/awards',
        acacia: '/acacia',
      };
      if (routeMap[key]) {
        router.push(routeMap[key]);
      }
    };

    // 生命周期钩子
    onMounted(() => {
      checkMobileView();
      window.addEventListener('resize', checkMobileView);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkMobileView);
    });

    return {
      activeKey,
      menuOptions,
      isMobileView,
      showCollapsedMenu,
      handleMenuSelect,
      MenuOutline,
    };
  },
});
</script>

<style scoped>
.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px; /* 减少 padding 以适应小屏幕 */
  height: 60px; /* 减少高度以适应小屏幕 */
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.site-title {
  font-size: 20px; /* 减小字体大小以适应小屏幕 */
  font-family: '华文新魏', sans-serif;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  white-space: nowrap;
  margin: 0;
  padding-right: 10px; /* 减少 padding 以适应小屏幕 */
}

.menu-container {
  display: flex;
  align-items: center;
  gap: 8px; /* 减少间隙以适应小屏幕 */
}

.collapse-button {
  margin-left: auto;
}

@media (max-width: 430px) {
  .nav-wrapper {
    padding: 0 8px; /* 进一步减少 padding */
  }

  .site-title {
    font-size: 18px; /* 进一步减小字体大小 */
    padding-right: 5px; /* 进一步减少 padding */
  }

  .menu-container {
    gap: 4px; /* 进一步减少间隙 */
  }
}
</style>