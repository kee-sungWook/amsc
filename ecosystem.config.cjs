module.exports = {
    apps: [
        {
            name: "ams-test",
            script: "dist/server/server.js",

            exec_mode: "fork",
            watch: true,

            log_date_format: "|YY-MM-DD|HH:mm:ss|",
            ignore_watch: [
                "uploads",
                "node_modules",
                ".git",
                ".gitignore",
                "logs",
                "service",
                "static",
            ],
        }
    ]
}