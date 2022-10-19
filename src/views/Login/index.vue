<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-09 19:10:37
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-17 22:12:10
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
            name="name"
            placeholder="账号"
            v-model="FormData.id"
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
          <!-- 小眼睛 -->
          <span
            :class="[
              'iconfont',
              view ? 'icon-jurassic_openeyes' : 'icon-biyan',
            ]"
            @click="handleView"
          >
          </span>
        </section>
        <!-- 验证码 -->
        <section class="form-checkCode">
          <span class="iconfont icon-yanzhengma"></span>
          <input
            type="text"
            name="password"
            placeholder="验证码"
            v-model="FormData.checkCode"
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
import { useRouter } from 'vue-router'

import { getCode } from '@/api/public'
//路由对象
const Router: any = new (useRouter as any)()
//获取登陆验证码
const code = ref('')
//标识查看密码状态
const view = ref(true)
const accountId = Math.ceil(Math.random() * 1000000)
const FormData = reactive({
  id: '',
  checkCode: '',
  password: '',
})
const handleClickCode = () => {
  getCode(accountId).then((res: any) => {
    code.value = res
  })
}
const handleView = () => {}
const handleLogin = () => {}

onMounted(() => {
  handleClickCode()
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>