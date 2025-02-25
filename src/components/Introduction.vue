<template>
    <n-card title="📖 如何成功" embedded :bordered="false">
    如果你年轻的时候不 996，你什么时候可以 996？你一辈子没有
    996，你觉得你就很骄傲了？这个世界上，我们每一个人都希望成功，都希望美好生活，都希望被尊重，我请问大家，你不付出超越别人的努力和时间，你怎么能够实现你想要的成功？
  </n-card>
 
</template>

<script lang="ts">
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CashIcon
  }
})
</script>

<style scoped>

.n-card {
  width: 80%;
  margin: 10px auto;
  margin-top: 20px;
  margin-bottom: 20px;

}

</style>