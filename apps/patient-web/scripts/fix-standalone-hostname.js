const fs = require('fs');
const path = require('path');

const serverFile = path.join(__dirname, '..', '.next', 'standalone', 'apps', 'patient-web', 'server.js');

if (fs.existsSync(serverFile)) {
  let content = fs.readFileSync(serverFile, 'utf8');

  // Substituir a linha que define o hostname
  content = content.replace(
    /const hostname = process\.env\.HOSTNAME \|\| '0\.0\.0\.0'/,
    "const hostname = '0.0.0.0' // Forçado para Docker - sempre escutar em todas as interfaces"
  );

  fs.writeFileSync(serverFile, content, 'utf8');
  console.log('✅ Hostname fixado para 0.0.0.0 no servidor standalone');
} else {
  console.log('⚠️ Arquivo server.js não encontrado, pulando correção de hostname');
}
