import { Sequelize } from 'sequelize';
import path from 'path';

// Caminho do banco de dados no diretório do Electron
const dbPath = path.join(__dirname, 'database.sqlite');

// Instância do Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath, // Banco de dados SQLite
});

export default sequelize