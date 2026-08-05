<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import BaseDashboardCard from '@/components/exercise/BaseDashboardCard.vue'

const userForm = ref({
  email: '',
  agree: false,
})

const handleRegister = () => {
  if (!userForm.value.email.includes('@')) {
    ElMessage.error('❌ 올바른 이메일 형식이 아닙니다.')

    return
  }

  if (!userForm.value.agree) {
    ElMessage.warning('⚠️ 이용약관에 동의해주세요.')

    return
  }

  ElMessage.success('🚀 가입 신청 완료')
}
</script>

<template>
  <BaseDashboardCard title="📝 회원가입 Form & Input 제어">
    <div class="form-area">
      <label> 이메일 주소 </label>

      <el-input v-model="userForm.email" placeholder="example@email.com" />

      <div class="agree">
        <el-switch v-model="userForm.agree" />

        <span> 개인정보 수집 및 이용약관 동의 </span>
      </div>

      <el-button type="success" @click="handleRegister"> 🚀 회원가입하기 </el-button>
    </div>
  </BaseDashboardCard>
</template>

<style scoped>
.form-area {
  display: flex;

  flex-direction: column;

  gap: 20px;
}

.agree {
  display: flex;

  align-items: center;

  gap: 10px;
}
</style>
