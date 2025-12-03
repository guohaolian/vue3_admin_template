<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- 登录的表单 -->
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到光伏发电功率预测系统</h2>

          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
              placeholder="用户名"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              v-model="loginForm.password"
              type="password"
              show-password
              placeholder="密码"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
//引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
//获取路由器
let $router = useRouter()
//路由对象
let $route = useRoute()
let useStore = useUserStore()
let loginForm = reactive({ username: '', password: '' })
//定义变量控制按钮加载效果
let loading = ref(false)

const login = async () => {
  //加载效果:开始加载
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    //编程式导航跳转到展示数据首页
    $router.push('/')
    //登录成功提示信息
    ElNotification({
      type: 'success',
      message: '欢迎回来',
    })
    //登录成功加载效果也消失
    loading.value = false
  } catch (error) {
    //登录失败加载效果消息
    loading.value = false
    //登录失败的提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
