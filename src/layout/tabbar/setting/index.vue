<template>
    <el-button size="small" icon="Refresh" circle></el-button>
    <el-button size="small" icon="FullScreen" circle></el-button>
    <el-button size="small" icon="Setting" circle></el-button>
    <img src="../../../../public/logo.png" style="width: 30px;height: 30px;border-radius: 50%;margin-left: 10px;">
    <el-dropdown style="margin-left: 10px;">
        <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>

            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang='ts' name='Setting'>

</script>

<style></style>