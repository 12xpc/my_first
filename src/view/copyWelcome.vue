<template>
    <div
        class="welcome-container min-h-screen bg-gradient-to-br from-primary/90 to-primary flex flex-col items-center justify-center text-white relative overflow-hidden">
        <!-- 背景装饰元素 -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full opacity-10">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
                </svg>
                <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5" />
                    </pattern>
                </defs>
            </div>
        </div>

        <!-- 主要内容 -->
        <div class="z-10 text-center px-4">
            <div class="logo-container mb-8 opacity-0 transform translate-y-8" ref="logoRef">
                <div class="relative w-32 h-32 mx-auto">
                    <div class="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm animate-pulse"></div>
                    <img src="@/assets/logo.png" alt="无限状态科技"
                        class="relative z-10 w-full h-full object-contain rounded-full shadow-lg" />
                </div>
            </div>

            <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 opacity-0 transform translate-y-8" ref="titleRef">
                无限状态
            </h1>

            <p class="slogan text-[clamp(1rem,2vw,1.25rem)] max-w-xl mx-auto leading-relaxed opacity-0 transform translate-y-8"
                ref="sloganRef">
                欢迎来到 无限状态 线上面试环节，期待你的加入！
            </p>

            <!-- 进度指示器 -->
            <div class="mt-12 w-48 h-1 bg-white/20 rounded-full overflow-hidden opacity-0 transform translate-y-8"
                ref="progressRef">
                <div class="h-full bg-white rounded-full progress-bar" style="width: 0%"></div>
            </div>

            <!-- 倒计时提示 -->
            <p class="mt-4 text-sm text-white/70 opacity-0 transform translate-y-8" ref="countdownRef">
                正在加载面试内容...
            </p>
        </div>

        <!-- 页脚 -->
        <div class="absolute bottom-6 left-0 right-0 text-center text-white/50 text-xs z-10">
            <p>© 2025 无限状态科技有限公司. 保留所有权利.</p>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, nextTick } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const logoRef = ref(null);
    const titleRef = ref(null);
    const sloganRef = ref(null);
    const progressRef = ref(null);
    const countdownRef = ref(null);

    onMounted(() => {
        // 分阶段显示元素的动画
        nextTick(() => {
            // 显示logo
            setTimeout(() => {
                logoRef.value.classList.remove('opacity-0', 'translate-y-8');
                logoRef.value.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-out');

                // 显示标题
                setTimeout(() => {
                    titleRef.value.classList.remove('opacity-0', 'translate-y-8');
                    titleRef.value.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-out');

                    // 显示标语
                    setTimeout(() => {
                        sloganRef.value.classList.remove('opacity-0', 'translate-y-8');
                        sloganRef.value.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-out');

                        // 显示进度条
                        setTimeout(() => {
                            progressRef.value.classList.remove('opacity-0', 'translate-y-8');
                            progressRef.value.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-out');

                            // 显示倒计时提示
                            setTimeout(() => {
                                countdownRef.value.classList.remove('opacity-0', 'translate-y-8');
                                countdownRef.value.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-700', 'ease-out');

                                // 开始进度条动画
                                animateProgressBar();

                                // 2秒后跳转
                                setTimeout(() => {
                                    router.push('/interview-guide');
                                }, 2000);
                            }, 300);
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);
        });
    });

    // 进度条动画
    const animateProgressBar = () => {
        const progressBar = document.querySelector('.progress-bar');
        let width = 0;
        const interval = setInterval(() => {
            width++;
            progressBar.style.width = width + '%';
            if (width >= 100) {
                clearInterval(interval);
            }
        }, 20);
    };
</script>

<style scoped>
    :root {
        --primary: #0284c7;
    }

    .welcome-container {
        @apply bg-gradient-to-br from-primary/90 to-primary;
    }

    .logo-container {
        @apply transition-all duration-700 ease-out;
    }

    .slogan {
        @apply text-[clamp(1rem, 2vw, 1.25rem)] max-w-xl mx-auto leading-relaxed;
    }
</style>