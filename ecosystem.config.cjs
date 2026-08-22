module.exports = {
  apps: [
    {
      name: "ams-api",
      cwd: "./",
      script: "./dist/server/server.js",

      //pm2 로 실행 할 때 기본으로 주입할 환경
      env: {
        NODE_ENV: "production",
      },

      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,

      log_date_format: "|YY-MM-DD|HH:mm:ss|",
      //운영 모니터링을 위한 log 파일 분리설정 (선택 사항이지만 강력권장)
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      merge_logs: true,

      //   ignore_watch: ["uploads", "node_modules", ".git", ".gitignore", "logs", "service", "static"], //watch:false 일때 필요없음.
    },
  ],
};
