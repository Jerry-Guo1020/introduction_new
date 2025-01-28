<template>
   
    <n-card title="Too Simple">
      <n-tabs default-value="signin" size="large" justify-content="space-evenly">
        <n-tab-pane name="signin" tab="登录">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
            登录
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <n-form>
            <n-form-item-row label="用户名">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="密码">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="重复密码">
              <n-input />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
            注册
          </n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </template>

  <style lang="css">
  
</style>