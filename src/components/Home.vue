<template>
  <n-config-provider :theme="theme">
    <n-global-style />
  <n-space vertical class="main-container">
    <div class="nav-wrapper">
      <h1 class="site-title">哈哈嘻嘻呵呵</h1>
      <div class="menu-container">
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
          v-else
          v-model:show="showCollapsedMenu"
          :options="menuOptions"
          placement="bottom-end"
          @select="handleMenuSelect"
        >
          <n-button class="collapse-button">
            <template #icon>
              <MenuOutline />更多
            </template>
          </n-button>
        </n-dropdown>
        
      </div>
      
    
      <n-space>
        <n-button @click="theme = darkTheme">
          深色
        </n-button>
        <n-button @click="theme = null">
          浅色
        </n-button>
      </n-space>
    
  
    </div>

    <n-layout has-sider class="layout-container">
      <n-layout-sider
        v-if="!isMobileView"
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          @update:value="handleMenuSelect"
        />
      
      </n-layout-sider>

      <n-layout class="content-layout">
      
        
            <!-- 你的页面内容 -->
            <router-view />
         
      </n-layout>
    </n-layout>
  </n-space>
</n-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, h } from 'vue';
import { useRouter } from 'vue-router';
import { NIcon, NMenu, NButton, NDropdown, darkTheme } from 'naive-ui';
import { MenuOutline, BookOutline as BookIcon, PersonOutline as PersonIcon,BusinessOutline ,HomeOutline,BulbOutline} from '@vicons/ionicons5';
import type { Component } from 'vue';
import type { GlobalTheme } from 'naive-ui';


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
    const collapsed = ref(false);

    const menuOptions = [
      {
        label: '首页',
        key: 'home',
        icon: renderIcon(HomeOutline),
      },
      {
        label: '个人介绍',
        key: 'introduce',
        icon: renderIcon(PersonIcon),
      },
      {
        label: '优秀项目',
        key: 'projects',
        icon: renderIcon(BulbOutline),
        children: [
          { label: '项目 1', key: 'project-1' },
          { label: '项目 2', key: 'project-2' }
        ],
      },
      {
        label: '获奖奖项',
        key: 'awards',
        icon: renderIcon(BookIcon),
      },
      {
        label: 'Jerry的工作室',
        key: 'acacia',
        icon:renderIcon(BusinessOutline) ,
      },
      {
        label: '登录',
        key: 'login',
        icon: renderIcon(PersonIcon),
      },

  
    ];

    const checkMobileView = () => {
      isMobileView.value = window.innerWidth < 640;
    };

    const handleMenuSelect = (key: string) => {
      showCollapsedMenu.value = false;
      const routeMap: Record<string, string> = {
        home: '/No_to_see',
        login: '/login',
        introduce: '/introduce',
        projects: '/projects',
        awards: '/awards',
        acacia: '/acacia',
      };
      router.push(routeMap[key] || '/');
    };

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
      collapsed,
      handleMenuSelect,
      MenuOutline,
      darkTheme,
      theme: ref<GlobalTheme | null>(null)
    };
  },
});
</script>

<style scoped>
.main-container {
  height: 100vh;
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 64px;
  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.site-title {
  font-size: 24px;
  font-family: '华文新魏', sans-serif;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}

.layout-container {
  height: calc(100vh - 64px);
}

.content-layout {
  min-height: 100%;
  
}

.scroll-container {
  height: 100%;
  
}

.content-area {
  padding: 24px;
  min-height: 100%;
}

@media (max-width: 640px) {
  .nav-wrapper {
    padding: 0 12px;
    height: 56px;
  }
  
  .site-title {
    font-size: 20px;
  }

  .layout-container {
    height: calc(100vh - 56px);
  }
  
  .content-area {
    padding: 16px;
  }
}

</style>