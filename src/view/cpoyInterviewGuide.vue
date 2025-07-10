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
                    <span class="text-sm text-gray-500">步骤 2/4</span>
                    <div class="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full bg-primary rounded-full" style="width: 50%"></div>
                    </div>
                </div>
            </div>
        </header>

        <!-- 主要内容区 -->
        <main class="flex-grow container mx-auto px-4 py-8 md:py-16">
            <div
                class="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div class="p-6 md:p-8 border-b border-gray-100">
                    <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-800 mb-2">面试流程指南</h2>
                    <p class="text-gray-500">请仔细阅读以下内容，了解本次面试的详细流程和要求</p>
                </div>

                <div class="p-6 md:p-8">
                    <Markdown :source="guideContent" class="prose max-w-none" />

                    <div class="mt-8 flex justify-end">
                        <button
                            class="next-btn px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            @click="goToNext">
                            开始挑战 <i class="fa fa-arrow-right ml-2"></i>
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
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Markdown from 'vue3-markdown-it';

    const guideContent = ref(`
  # 欢迎参加无限状态线上面试
  
  ## 面试流程说明
  
  感谢您选择无限状态科技有限公司！本次面试将分为以下几个环节：
  
  ### 1. 技术挑战环节
  - 您将有7天时间完成一个前端开发挑战
  - 需要使用Vue 3技术栈实现指定功能
  - 代码需托管在GitHub并部署到Vercel
  
  ### 2. 代码评审
  - 我们将评审您提交的代码并给出反馈
  
    ### 3. 视频面试
  - 面试时间约45分钟，包括技术问题和项目经验

  ### 4. 结果通知
  - 面试结束后3个工作日内给出结果
  - 通过邮件和电话通知最终结果
  
  ## 注意事项
  - 请确保提交的代码是您独立完成的
  - 代码质量和架构设计将是评估的重要标准
  - 请在接受挑战后尽快开始，避免时间紧张
  
  如果您有任何疑问，请随时联系我们的HR团队。祝您面试顺利！
  `);

    const router = useRouter();

    const goToNext = () => {
        router.push('/accept-challenge');
    };
</script>

<style scoped>
    @layer utilities {
        .content-auto {
            content-visibility: auto;
        }

        .prose {
            max-width: 100%;
        }

        .prose h1,
        .prose h2,
        .prose h3 {
            color: #1e293b;
        }

        .prose p {
            color: #475569;
        }

        .prose a {
            color: #0ea5e9;
            text-decoration: none;
            font-weight: 500;
        }

        .prose a:hover {
            text-decoration: underline;
        }

        .prose ul>li::before {
            background-color: #0284c7;
        }

        .prose ol>li::before {
            color: #0284c7;
        }
    }

    :root {
        --primary: #0284c7;
    }

    .next-btn {
        @apply bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50;
    }
</style>