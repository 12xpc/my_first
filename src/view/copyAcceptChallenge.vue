<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
        <!-- 顶部导航 -->
        <header class="bg-white shadow-sm sticky top-0 z-50">
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <div class="flex items-center space-x-2">
                    <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                        <span class="text-white font-bold text-xl">无</span>
                    </div>
                    <span class="font-bold text-gray-800 text-lg">无限状态面试系统</span>
                </div>
                <div class="flex items-center space-x-4">
                    <span class="text-sm text-gray-500">步骤 3/4</span>
                    <div class="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full bg-primary rounded-full" style="width: 75%"></div>
                    </div>
                </div>
            </div>
        </header>

        <!-- 主要内容区 -->
        <main class="flex-grow container mx-auto px-4 py-8 md:py-16">
            <div
                class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div class="p-6 md:p-8 border-b border-gray-100">
                    <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-800 mb-2">接受挑战</h2>
                    <p class="text-gray-500">请提供您的GitHub信息和联系方式</p>
                </div>

                <div class="p-6 md:p-8">
                    <form @submit.prevent="submitForm">
                        <div class="mb-6">
                            <label for="githubId" class="block text-sm font-medium text-gray-700 mb-1">GitHub ID</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fa fa-github text-gray-400"></i>
                                </div>
                                <input type="text" id="githubId" v-model="githubId" required
                                    class="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm border py-3 px-4 bg-gray-50 transition-all duration-200"
                                    placeholder="your-github-username">
                            </div>
                            <p v-if="!githubId && submitted" class="mt-1 text-sm text-red-500">请输入GitHub ID</p>
                            <p v-if="githubId && !isValidGitHubId(githubId)" class="mt-1 text-sm text-red-500">
                                请输入有效的GitHub ID</p>
                        </div>

                        <div class="mb-6">
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fa fa-envelope text-gray-400"></i>
                                </div>
                                <input type="email" id="email" v-model="email" required
                                    class="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm border py-3 px-4 bg-gray-50 transition-all duration-200"
                                    placeholder="your@email.com">
                            </div>
                            <p v-if="!email && submitted" class="mt-1 text-sm text-red-500">请输入邮箱地址</p>
                            <p v-if="email && !isValidEmail(email)" class="mt-1 text-sm text-red-500">请输入有效的邮箱地址</p>
                        </div>

                        <button type="submit"
                            class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-center"
                            :disabled="!isFormValid">
                            <span>接受挑战</span>
                            <i class="fa fa-check ml-2"></i>
                        </button>
                    </form>

                    <div class="mt-6 flex flex-col sm:flex-row gap-4">
                        <button
                            class="prev-btn flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                            @click="goBack">
                            <i class="fa fa-arrow-left mr-2"></i> 上一步
                        </button>

                        <button v-if="formSubmitted"
                            class="next-btn flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            @click="goToNext">
                            下一步 <i class="fa fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- 页脚 -->
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto px-4 text-center text-sm text-gray-400">
                <p>© 2025 无限状态科技有限公司. 保留所有权利.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';

    const githubId = ref('');
    const email = ref('');
    const submitted = ref(false);
    const formSubmitted = ref(false);
    const router = useRouter();

    // 简单的GitHub ID验证（仅允许字母、数字和连字符）
    const isValidGitHubId = (id) => {
        return /^[a-zA-Z0-9-]+$/.test(id);
    };

    // 简单的邮箱验证
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isFormValid = computed(() => {
        return isValidGitHubId(githubId.value) && isValidEmail(email.value);
    });

    const submitForm = () => {
        submitted.value = true;

        if (isFormValid.value) {
            formSubmitted.value = true;
            console.log('GitHub ID:', githubId.value, '邮箱:', email.value);

            // 模拟数据提交成功的动画效果
            const submitBtn = document.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i> 提交中...';

                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fa fa-check mr-2"></i> 已提交';
                    submitBtn.classList.remove('bg-primary');
                    submitBtn.classList.add('bg-green-600');

                    // 显示下一步按钮
                    setTimeout(() => {
                        submitBtn.style.display = 'none';
                    }, 1000);
                }, 1500);
            }
        }
    };

    const goBack = () => {
        router.push('/interview-guide');
    };

    const goToNext = () => {
        router.push('/complete-challenge');
    };
</script>

<style scoped>
    @layer utilities {
        .content-auto {
            content-visibility: auto;
        }
    }

    :root {
        --primary: #0284c7;
    }

    .prev-btn {
        @apply px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50;
    }

    .next-btn {
        @apply px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50;
    }

    input:focus {
        @apply border-primary ring-2 ring-primary/20;
    }

    input:invalid {
        @apply border-red-300;
    }
</style>