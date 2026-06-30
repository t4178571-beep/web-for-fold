const Database = require('better-sqlite3')
const path = require('path')
const { app } = require('electron')
const fs = require('fs')

let db = null

function initDb() {
  const userDataPath = app.getPath('userData')
  const dbPath = path.join(userDataPath, 'shopmaster.db')
  
  console.log('DB Path:', dbPath)
  
  db = new Database(dbPath, { verbose: console.log })
  db.pragma('journal_mode = WAL')
  
  return db
}

function getDb() {
  if (!db) {
    return initDb()
  }
  return db
}

module.exports = { initDb, getDb }
