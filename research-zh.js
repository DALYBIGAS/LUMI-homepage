window.LUMI_ZH = {
  "labels": {
    " reported operating points": " 个实测配置",
    "Manuscript · Table ": "论文 · 表 ",
    " GiB L2 budget": " GiB L2 缓存预算",
    "tokens/s · decode only": "token/s · 仅解码",
    "Imported two-process resource-adapted snapshot. Original machine logs were not supplied for independent revalidation.": "导入的双进程资源适配测量。缺少原始机器日志，尚未独立复核。",
    "Storage planning: ": "磁盘空间规划：",
    ". These are setup estimates, not measured performance or universal minimum requirements.": "。以上是部署所需空间的估算。",
    "Choose a local port from 1024 to 65535.": "请选择 1024 至 65535 之间的本地端口。",
    "LUMI endpoint: http://127.0.0.1:": "LUMI 服务地址：http://127.0.0.1:",
    "Select a model actually returned by that server’s /v1/models endpoint. A catalog name alone does not load weights or prove protocol support.": "请从该服务的 /v1/models 接口返回的模型中选择，并确认权重已加载、协议可用。",
    "Open Companion ↗": "打开个人助理 ↗",
    "View its monitor ↗": "查看运行监控 ↗",
    "Deployment configuration is invalid": "部署配置无效",
    "Run Companion with your own local LUMI deployment": "通过自己的本地 LUMI 服务运行个人助理",
    "Configured Companion is online · powered by LUMI": "配置的个人助理已在线 · 由 LUMI 提供推理",
    "Configured deployment is temporarily unavailable": "配置的部署暂不可用",
    "Live status unavailable · installation guide remains available": "实时状态暂不可用，仍可查看安装指南",
    "Command copied": "已复制命令",
    "Copy is unavailable; select the command manually.": "暂时无法复制，请手动选择命令。",
    "Data temporarily unavailable": "数据暂不可用",
    "Could not load the measurement table.": "无法加载实测数据表。",
    " capacity": " 容量"
  },
  "catalog": {
    "DeepSeek-V4.1-Flash-1017": [
      "900 GiB（NVFP4），1.1 TiB（官方 FP8）",
      "论文报告原始精度 NVFP4 路径。RTX 5090 笔记本为 8.024 tok/s、160 GiB L2、8K 容量。RTX 5070 Ti 笔记本为 4.336 tok/s、39.312 GiB L2、2K 容量，采用资源适配配置。",
      "论文已测。请验证所选服务路径。"
    ],
    "DeepSeek-V4-Flash-0731": [
      "估算 350 GiB",
      "论文报告 12 GB RTX 5070 Ti 笔记本达到 7.174 tok/s。FP8 输出头和 wo_a 缓存会改变精度。结果来自一次预热请求。",
      "论文已测。PA 协议支持取决于运行路径。"
    ],
    "DeepSeek-V4-Pro": [
      "1.7 TiB",
      "论文报告 24 GB RTX 5090 笔记本达到 1.97 tok/s，使用 160 GiB L2 和 16K 容量。路由专家保留原生 FP4，部分稠密投影采用运行时 FP4 缓存。",
      "专用低显存配置，需要较多内存和存储。"
    ],
    "GLM-5.3": [
      "950 GiB",
      "论文报告 24 GB RTX 5090 笔记本达到 2.25 tok/s，使用 160 GiB L2 和 4K 容量。采用 NVFP4 专家和块级 FP8 稠密缓存，需要足够的主机空闲内存页。",
      "论文已测专用路径。请验证服务兼容性。"
    ],
    "Muse Spark Open": [
      "1.1 TiB，另需可选附属文件空间",
      "论文报告实验性混合缓存配置达到 2.164 tok/s。该配置未通过暂定的数值校验。",
      "实验路径，尚未验证 HTTP 服务与 PA 接入。"
    ],
    "Qwen3.8-Flash-Next": [
      "请检查所选权重和转换所需空间",
      "此模型属于计划集成项。论文未报告该模型的性能或已验证的部署方案。",
      "待集成。"
    ],
    "Qwen3.6-35B-A3B-NVFP4": [
      "请检查原始权重、转换后大小和磁盘剩余空间",
      "当前 Companion 研究部署通过 LUMI 使用这一模型。HTTP 请求速率与论文解码速率采用不同测量范围。",
      "当前 PA 部署已验证。"
    ]
  },
  "deployments": {
    "v41-5090": [
      "原始 NVFP4 精度",
      "汇总两个进程的前 200 次前向，使用短历史与实验性内存准入。稳态区间的第 41 至 200 步跨越一次请求边界。"
    ],
    "v41-5070": [
      "保留 NVFP4 权重数据",
      "导入的双进程资源适配测量。缺少原始机器日志，尚未独立复核。"
    ],
    "v4-flash": [
      "原生 FP4 专家、FP8 稠密层、FP8 输出头和 wo_a 缓存",
      "一次预热请求，五个 40 次前向的测量窗口。低显存配置改变精度，尚未完成独立的原始参考对齐。"
    ],
    "v4-pro": [
      "原生 FP4 专家，部分稠密层使用 FP4 缓存",
      "专用低显存路径，总参数 1.6T，激活参数 49B。"
    ],
    "glm": [
      "NVFP4 专家，块级 FP8 稠密缓存",
      "总参数 753B，激活参数 40B。旧版锁页内存池在启动时需要足够空闲页。"
    ],
    "muse": [
      "实验性混合稠密与专家缓存",
      "有损配置未通过暂定数值校验。此运行路径暂未接入 HTTP 服务、前缀 KV 复用或多模态推理。"
    ]
  }
};
