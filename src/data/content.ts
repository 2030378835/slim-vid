export const navLinks = [
  { href: '#features', label: '功能' },
  { href: '#flow', label: '流程' },
  { href: '#guide', label: '说明' },
  { href: '#download', label: '下载' }
] as const

export const features = [
  {
    id: 'drop',
    title: '拖拽批量',
    text: '把视频扔进窗口，或一次选多个文件入队；分析支持最多 3 路并发，队列上限 10 个任务。'
  },
  {
    id: 'presets',
    title: '预设 + 自定义',
    text: '视觉无损到极限压缩共五档，也可自调 CRF、码率、分辨率与音频；设置自动记忆。'
  },
  {
    id: 'parallel',
    title: '智能并行',
    text: '长视频或高码率素材自动按关键帧分段、多路并行编码后合并，整体更快完成。'
  },
  {
    id: 'hw',
    title: '硬件加速',
    text: '自动选用 VideoToolbox / NVENC / QSV；没有独显时回退内置 CPU 编码。'
  },
  {
    id: 'queue',
    title: '进度队列',
    text: '实时进度、速度与 ETA，可暂停、取消或换预设重压；分析完预估输出体积。'
  },
  {
    id: 'compare',
    title: '体积对比',
    text: '完成后一眼看到压缩前后大小与节省比例，输出文件带时间戳防覆盖。'
  }
] as const

export const flowSteps = [
  {
    step: '01',
    title: '添加视频',
    text: '拖拽或选择本地视频，SlimVid 用 ffprobe 读信息并预估体积。'
  },
  {
    step: '02',
    title: '选预设或自定义',
    text: '按场景选档，或细调画质、码率与最高分辨率。'
  },
  {
    step: '03',
    title: '开始压缩',
    text: '自动入队编码；长片可触发智能并行，看进度与结果后再换预设重压。'
  }
] as const

export const guideItems = [
  {
    title: 'macOS 首次打开',
    text: '未签名安装包可能被拦截：右键 App → 打开，或执行 xattr -cr /Applications/SlimVid.app。'
  },
  {
    title: '硬件加速',
    text: '系统装有带硬件编码器的 ffmpeg 时优先走加速；否则使用内置 ffmpeg-static（CPU）。'
  },
  {
    title: '智能并行',
    text: '较长或高码率素材会自动分段并行；任务卡片显示「智能并行」与段数，失败时回退单进程。'
  },
  {
    title: '输出与更新',
    text: '默认写在源文件同目录，文件名带预设后缀与时间戳。安装后可从 GitHub Releases 自动检查更新。'
  }
] as const
