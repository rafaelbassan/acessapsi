const fs = require('fs');
const path = require('path');

// Caminhos importantes
const projectRoot = path.join(__dirname, '..');
const standaloneDir = path.join(projectRoot, '.next', 'standalone', 'apps', 'patient-web');
const serverFile = path.join(standaloneDir, 'server.js');
const publicSource = path.join(projectRoot, 'public');
const publicDest = path.join(standaloneDir, 'public');
const staticSource = path.join(projectRoot, '.next', 'static');
const staticDest = path.join(standaloneDir, '.next', 'static');

console.log('🔧 Corrigindo build standalone...');

// Função para copiar diretório recursivamente
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`⚠️ Diretório fonte não encontrado: ${src}`);
    return;
  }
  
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Corrigir hostname do servidor
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

// 2. Copiar pasta public para o build standalone
try {
  console.log('📁 Copiando pasta public...');
  if (fs.existsSync(publicDest)) {
    fs.rmSync(publicDest, { recursive: true, force: true });
  }
  copyDirSync(publicSource, publicDest);
  console.log('✅ Pasta public copiada com sucesso');
} catch (error) {
  console.log('❌ Erro ao copiar pasta public:', error.message);
}

// 3. Copiar arquivos estáticos (_next/static) se não existirem
try {
  if (fs.existsSync(staticSource) && !fs.existsSync(staticDest)) {
    console.log('📁 Copiando arquivos estáticos...');
    copyDirSync(staticSource, staticDest);
    console.log('✅ Arquivos estáticos copiados com sucesso');
  }
} catch (error) {
  console.log('❌ Erro ao copiar arquivos estáticos:', error.message);
}

console.log('🎉 Correção do build standalone concluída!');
