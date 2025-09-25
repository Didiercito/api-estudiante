const mysql = require('mysql2/promises');
const fs = require('fs').promises;
const path = require('path');

async function runMigrations() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  console.log('Connected to database');

  try {
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS migrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        filename VARCHAR(255) NOT NULL UNIQUE,
        executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const [executed] = await connection.execute(
      'SELECT filename FROM migrations'
    );
    const executedMigrations = executed.map(row => row.filename);

    const migrationDir = path.join(__dirname, 'sql');
    const files = await fs.readdir(migrationDir);
    const sqlFiles = files.filter(file => file.endsWith('.sql')).sort();

    for (const file of sqlFiles) {
      if (!executedMigrations.includes(file)) {
        console.log(`Executing migration: ${file}`);
        
        const sql = await fs.readFile(path.join(migrationDir, file), 'utf8');
        const statements = sql.split(';').filter(stmt => stmt.trim());
        
        for (const statement of statements) {
          if (statement.trim()) {
            await connection.execute(statement);
          }
        }
        
        await connection.execute(
          'INSERT INTO migrations (filename) VALUES (?)',
          [file]
        );
        
        console.log(`Migration ${file} completed`);
      } else {
        console.log(`Migration ${file} already executed`);
      }
    }

    console.log('All migrations completed');
  } catch (error) {
    console.error('Migration error:', error);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

if (require.main === module) {
  runMigrations();
}

module.exports = { runMigrations };