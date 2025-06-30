const fs = require('fs');
const path = require('path');

const rootEnv = path.resolve(__dirname, '../.env');
const targetDir = path.resolve(__dirname, '../apps/admin-web');
const targetEnv = path.join(targetDir, '.env.local');

function ensureEnv() {
  if (!fs.existsSync(rootEnv)) {
    console.warn('Aviso: .env não encontrado na raiz. Assumindo que variáveis estão no ambiente do sistema.');
    return;
  }

  // Remove se já existe (symlink ou arquivo)
  if (fs.existsSync(targetEnv)) {
    fs.unlinkSync(targetEnv);
  }

  try {
    fs.symlinkSync(rootEnv, targetEnv);
    console.log('Symlink criado: apps/admin-web/.env.local -> ../../.env');
  } catch (err) {
    // Se não suportar symlink, faz uma cópia
    fs.copyFileSync(rootEnv, targetEnv);
    console.log('Symlink não suportado, .env copiado para apps/admin-web/.env.local');
  }
}

ensureEnv(); 