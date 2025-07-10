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
                    <span class="text-sm text-gray-500">步骤 4/4</span>
                    <div class="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full bg-primary rounded-full" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </header>

        <!-- 主要内容区 -->
        <main class="flex-grow container mx-auto px-4 py-8 md:py-16">
            <div
                class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div class="p-6 md:p-8 border-b border-gray-100">
                    <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-800 mb-2">提交挑战</h2>
                    <p class="text-gray-500">请提交您的项目代码和在线演示地址</p>
                </div>

                <div class="p-6 md:p-8">
                    <form @submit.prevent="submitForm">
                        <div class="mb-6">
                            <label for="repoUrl" class="block text-sm font-medium text-gray-700 mb-1">GitHub 仓库
                                URL</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fa fa-github text-gray-400"></i>
                                </div>
                                <input type="text" id="repoUrl" v-model="repoUrl" required
                                    class="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm border py-3 px-4 bg-gray-50 transition-all duration-200"
                                    placeholder="https://github.com/your-username/repo-name">
                            </div>
                            <p v-if="!repoUrl && submitted" class="mt-1 text-sm text-red-500">请输入GitHub仓库URL</p>
                            <p v-if="repoUrl && !isValidUrl(repoUrl)" class="mt-1 text-sm text-red-500">请输入有效的URL</p>
                        </div>

                        <div class="mb-6">
                            <label for="vercelUrl" class="block text-sm font-medium text-gray-700 mb-1">Vercel
                                在线体验地址</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fa fa-link text-gray-400"></i>
                                </div>
                                <input type="text" id="vercelUrl" v-model="vercelUrl" required
                                    class="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm border py-3 px-4 bg-gray-50 transition-all duration-200"
                                    placeholder="https://your-project.vercel.app">
                            </div>
                            <p v-if="!vercelUrl && submitted" class="mt-1 text-sm text-red-500">请输入Vercel在线体验地址</p>
                            <p v-if="vercelUrl && !isValidUrl(vercelUrl)" class="mt-1 text-sm text-red-500">请输入有效的URL
                            </p>
                        </div>

                        <button type="submit"
                            class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center justify-center">
                            <span>提交作品</span>
                            <i class="fa fa-paper-plane ml-2"></i>
                        </button>
                    </form>

                    <div class="mt-4 flex justify-center">
                        <button
                            class="prev-btn px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                            @click="goBack">
                            <i class="fa fa-arrow-left mr-2"></i> 上一步
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
    import { ref, computed, onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    const repoUrl = ref('');
    const vercelUrl = ref('');
    const submitted = ref(false);
    const router = useRouter();

    // 简单的URL验证函数
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    };

    const isFormValid = computed(() => {
        return isValidUrl(repoUrl.value) && isValidUrl(vercelUrl.value);
    });

    const submitForm = () => {
        submitted.value = true;

        if (isFormValid.value) {
            console.log('GitHub 仓库 URL:', repoUrl.value, 'Vercel 地址:', vercelUrl.value);

            // 模拟提交成功
            setTimeout(() => {
                alert('提交成功！我们将尽快评审您的作品。');
                router.push('/'); // 提交成功后返回首页
            }, 500);
        }
    };

    const goBack = () => {
        router.push('/accept-challenge');
    };

    onMounted(() => {
        // 页面加载时可以添加一些动画效果
        document.querySelector('.complete-container')?.classList.add('opacity-100');
    });
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

    input:focus {
        @apply border-primary ring-2 ring-primary/20;
    }

    input:invalid {
        @apply border-red-300;
    }
</style>