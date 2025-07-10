<template>
    <div class="interview-guide">
        <div class="title">
            <h3>欢迎参加无限状态线上面试</h3>
        </div>

        <div class="content">
            <Markdown :source="guideContent" class="prose max-w-none" />
        </div>

        <!-- 补充：添加下一步按钮，否则无法跳转 -->
        <button class="next-btn" @click="goToNext">
            开始挑战 <i class="fa fa-arrow-right ml-2"></i>
        </button>
    </div>
</template>

<script setup>
    // 修正：使用<script setup>语法（原代码缺少setup，导致变量无法在模板中使用）
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import Markdown from 'vue3-markdown-it';

    const guideContent = ref(`
  
  ## 面试流程说明
  
  感谢您选择无限状态科技有限公司！本次面试将分为以下几个环节：
  
  ### 1. 技术挑战环节
  - 您将有2天时间完成一个前端开发挑战
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
    /* 可根据需要添加样式 */
    .interview-guide {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    .title {
        text-align: center;
        margin-bottom: 30px;
    }

    .title h3 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .title p {
        color: #666;
        font-size: 16px;
    }

    .content {
        margin-bottom: 30px;
    }

    .next-btn {
        display: block;
        margin: 20px auto;
        padding: 10px 20px;
        background-color: #0284c7;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s;
    }

    .next-btn:hover {
        background-color: #026bbf;
    }
</style>