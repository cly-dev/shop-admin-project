<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-09 19:10:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-15 23:48:18
 * @FilePath: \shop\src\views\Login\index.vue
 * @Description: 登录页
-->

<template>
  <section class="wecher-login"></section>
  <section class="login-content">
    <span class="content-header">登陆</span>
    <section class="content-mainer">
      <!-- 表单主体 -->
      <section class="form-content">
        <!-- 用户名 -->
        <section class="form-id">
          <span class="iconfont icon-yonghu"></span>
          <input
            type="text"
            name="adminId"
            placeholder="账号"
            v-model="FormData.adminId"
          />
        </section>
        <!-- 密码 -->
        <section class="form-password">
          <span class="iconfont icon-mimasuo"></span>
          <input
            type="password"
            name="password"
            placeholder="密码"
            v-model="FormData.password"
          />
        </section>
        <!-- 验证码 -->
        <section class="form-checkCode">
          <span class="iconfont icon-yanzhengma"></span>
          <input
            type="text"
            name="code"
            placeholder="验证码"
            v-model="FormData.code"
          />
          <!-- 验证码 -->
          <section
            v-html="code"
            class="code-content"
            @click="handleClickCode"
          ></section>
        </section>
      </section>
      <!-- 按钮 -->
      <section class="footer-content">
        <button type="button" @click="handleLogin" class="btn-login">
          登录
        </button>
      </section>
    </section>
    <!-- 忘记密码 -->
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import {ElMessage} from "element-plus"


import { getCode } from '@/api/public';
import {login} from "@/api/admin";
import useStore from "@/pinia/user";
import {SETUSERDATA} from "@/pinia/actionType"
const useUserData=useStore();
const router=useRouter();
//获取登陆验证码
const code = ref('')
//标识查看密码状态
const FormData = reactive<UserType.LoginParmas>({
  adminId: '',
  password: '',
  code: '',
  checkoutCode: ''
})
const handleClickCode = () => {
const accountId = Math.ceil(Math.random() * 10000000)
FormData.checkoutCode=accountId.toString();
  getCode(accountId).then((res: any) => {
    code.value = res
  })
}
const handleLogin = () => {
  login(FormData).then((res:any)=>{
    ElMessage.success("登录成功");
    useUserData[SETUSERDATA](res);
    router.push('/home/welcome')
    
  }).catch((err)=>{
    console.log(err)
    handleClickCode();
  })
}

onMounted(() => {
  handleClickCode()

})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>