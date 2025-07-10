<template>
    <div class="accept-challenge">
        <h3>接受挑战</h3>
        <p>请提供您的GitHub信息和联系方式</p>
        <!-- 用 form 包裹输入框和按钮 -->
        <form @submit.prevent="handleSubmit">
            <label for="githubId">GitHub ID</label>
            <input type="text" id="githubId" v-model="githubId" placeholder="your github id" required />
            <label for="email">email</label>
            <input type="email" id="email" v-model="email" placeholder="your email" required />
            <div class="button-group">
                <!-- 提交按钮 -->
                <button type="submit">接受挑战</button>
                <button @click="gotoBack">上一步</button>
            </div>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const githubId = ref('');
    const email = ref('');

    // 表单提交逻辑
    const handleSubmit = () => {
        // 可在此处扩展验证：比如检查 GitHub ID 格式、邮箱格式
        if (!githubId.value.trim() || !email.value.trim()) {
            alert('请填写完整信息');
            return;
        }
        // 验证通过，跳转页面
        router.push('/complete-challenge');
    };

    const gotoBack = () => {
        router.push('/interview-guide');
    };
</script>

<style scoped>
    .accept-challenge {
        margin: 0 auto;
        max-width: 700px;
        padding: 20px;
    }

    .accept-challenge h3 {
        text-align: center;
        margin-bottom: 10px;
    }

    .accept-challenge p {
        text-align: center;
        color: #999;
        margin-bottom: 20px;
    }

    .accept-challenge label {
        display: block;
        margin-bottom: 5px;
    }

    .accept-challenge input {
        width: 100%;
        height: 32px;
        padding: 0 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 15px;
        font-size: 14px;
    }

    /* 给必填输入框添加聚焦样式（可选） */
    .accept-challenge input:required:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
    }

    .button-group {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .button-group button {
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    .button-group button[type="submit"] {
        background-color: #007bff;
        color: white;
    }

    .button-group button:last-child {
        background-color: #f1f1f1;
        color: #333;
    }
</style>