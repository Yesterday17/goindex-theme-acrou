var authConfig = {
  siteName: "某昨的共享小屋", // 网站名称
  version: "1.1.2", // 程序版本
  theme: "acrou",
  // 强烈推荐使用自己的 client_id 和 client_secret
  client_id:
    "175511611598-ot9agsmf6v3lf1jc3qbsf1vcru7saop7.apps.googleusercontent.com",
  client_secret: "mW1neo-JSSwzYz5Syqiiset1",
  refresh_token:
    "1//0ea00UUSKE3DbCgYIARAAGA4SNwF-L9IrmtZcNwc-yqHrvnOe-fvTTVZyh1nbMWhgALC4Z9BUgNRTgrey4kbjgK4pXn-utk0vGTc", // 授权 token
  /**
   * 设置要显示的多个云端硬盘；按格式添加多个
   * [id]: 可以是 团队盘id、子文件夹id、或者"root"（代表个人盘根目录）；
   * [name]: 显示的名称
   * [user]: Basic Auth 的用户名
   * [pass]: Basic Auth 的密码
   * [protect_file_link]: Basic Auth 是否用于保护文件链接，默认值（不设置时）为 false，即不保护文件链接（方便 直链下载/外部播放 等）
   * 每个盘的 Basic Auth 都可以单独设置。Basic Auth 默认保护该盘下所有文件夹/子文件夹路径
   * 【注意】默认不保护文件链接，这样可以方便 直链下载/外部播放;
   *       如果要保护文件链接，需要将 protect_file_link 设置为 true，此时如果要进行外部播放等操作，需要将 host 替换为 user:pass@host 的 形式
   * 不需要 Basic Auth 的盘，保持 user 和 pass 同时为空即可。（直接不设置也可以）
   * 【注意】对于id设置为为子文件夹id的盘将不支持搜索功能（不影响其他盘）。
   */
  roots: [
    {
      id: "1BqL9XKerBva2ZNGpRIe0eNHB7KJV1qMH",
      name: "Live",
      user: "",
      pass: "",
      protect_file_link: false,
    },
    {
      id: "1-Ly3wI5v_R3aYLMUuAeghVG8eESP9jfM",
      name: "米粒垃圾",
      user: "765",
      pass: "million",
      protect_file_link: false,
    },
  ],
  default_gd: 0,
  /**
   * 文件列表页面每页显示的数量。【推荐设置值为 100 到 1000 之间】；
   * 如果设置大于1000，会导致请求 drive api 时出错；
   * 如果设置的值过小，会导致文件列表页面滚动条增量加载（分页加载）失效；
   * 此值的另一个作用是，如果目录内文件数大于此设置值（即需要多页展示的），将会对首次列目录结果进行缓存。
   */
  files_list_page_size: 50,
  /**
   * 搜索结果页面每页显示的数量。【推荐设置值为 50 到 1000 之间】；
   * 如果设置大于1000，会导致请求 drive api 时出错；
   * 如果设置的值过小，会导致搜索结果页面滚动条增量加载（分页加载）失效；
   * 此值的大小影响搜索操作的响应速度。
   */
  search_result_list_page_size: 50,
  // 确认有 cors 用途的可以开启
  enable_cors_file_down: true,
  /**
   * 上面的 basic auth 已经包含了盘内全局保护的功能。所以默认不再去认证 .password 文件内的密码;
   * 如果在全局认证的基础上，仍需要给某些目录单独进行 .password 文件内的密码验证的话，将此选项设置为 true;
   * 【注意】如果开启了 .password 文件密码验证，每次列目录都会额外增加查询目录内 .password 文件是否存在的开销。
   */
  enable_password_file_verify: false,
  /**
   * 路径名，必须以 / 开头，末尾不带 /
   *
   * 默认为 /
   */
  path: "/share",
};

var themeOptions = {
  cdn: "https://cdn.jsdelivr.net/gh/Aicirou/goindex-theme-acrou",
  // 主题版本号
  version: "2.0.10",
  //可选默认系统语言:en/zh-chs/zh-cht
  languages: "zh-chs",
  render: {
    /**
     * 是否渲染HEAD.md文件
     * Render HEAD.md file
     */
    head_md: true,
    /**
     * 是否渲染README.md文件
     * Render README.md file
     */
    readme_md: true,
    /**
     * 是否渲染文件/文件夹描述
     * Render file/folder description or not
     */
    desc: true,
  },
  /**
   * 视频播放器选项
   * Video player options
   */
  video: {
    /**
     * 播放器api（不指定则使用默认播放器）
     * Player api(Use default player if not specified)
     */
    api: "",
    autoplay: true,
  },
  /**
   * 音频播放器选项
   * Audio player options
   */
  audio: {},
};

window.gdconfig = {
  version: authConfig.version,
  themeOptions: themeOptions,
};
window.themeOptions = themeOptions;
window.gds = authConfig.roots.map((it) => it.name);
window.base = "/share";
