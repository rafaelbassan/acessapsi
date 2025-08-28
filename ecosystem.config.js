module.exports = {
  apps: [
    {
      name: 'patient-web',
      cwd: './apps/patient-web',
      // Use npm to run the app's start script so workspace/hoisted deps are resolved
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '../../logs/patient-web-error.log',
      out_file: '../../logs/patient-web-out.log',
      log_file: '../../logs/patient-web-combined.log',
      time: true
    },
    // {
    //   name: 'admin-web',
    //   cwd: './apps/admin-web',
    //   // Use npm to run the app's start script so workspace/hoisted deps are resolved
    //   script: 'npm',
    //   args: 'start',
    //   instances: 1,
    //   autorestart: true,
    //   watch: false,
    //   max_memory_restart: '1G',
    //   env: {
    //     NODE_ENV: 'production',
    //     PORT: 3001
    //   },
    //   error_file: '../../logs/admin-web-error.log',
    //   out_file: '../../logs/admin-web-out.log',
    //   log_file: '../../logs/admin-web-combined.log',
    //   time: true
    // }
  ]
}
