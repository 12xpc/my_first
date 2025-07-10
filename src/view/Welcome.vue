<template>
    <div class="welcome-content">
        <div class="text-content">
            <img src="../assets/logo.png" alt="无限状态Logo" class="logo" />
            <p>欢迎来到 无限状态 线上面试环节，期待你的加入！</p>
        </div>
    </div>
</template>

<script setup>
    // 修复1：引入路由相关依赖
    import { onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    // 修复2：创建路由实例
    const router = useRouter()

    onMounted(() => {
        setTimeout(() => {
            // 修复3：确保路由实例正确使用
            router.push('/interview-guide')
        }, 2000)
    })
</script>

<style scoped>
    .welcome-content {
        display: flex;
        justify-content: center;
        align-items: center;
        /* 修复4：添加最小高度确保垂直居中生效 */
        min-height: 100vh;
        padding: 20px;
        background-color: #f5f7fa;
    }

    .text-content {
        text-align: center;
        max-width: 500px;
        padding: 40px 20px;
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .logo {
        width: 120px;
        height: 120px;
        margin-bottom: 30px;
        object-fit: contain;
        transition: transform 0.3s ease;
    }

    .logo:hover {
        transform: scale(1.05);
    }

    .text-content p {
        font-size: 18px;
        color: #333;
        line-height: 1.6;
        margin: 0;
    }

    @media (max-width: 480px) {
        .logo {
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
        }

        .text-content p {
            font-size: 16px;
        }
    }
</style>