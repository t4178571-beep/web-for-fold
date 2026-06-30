const { getDb } = require('./index')

function setupSchema() {
  const db = getDb()
  
  const schema = `
    CREATE TABLE IF NOT EXISTS shop_settings (
      id INTEGER PRIMARY KEY DEFAULT 1,
      shop_name TEXT, owner_name TEXT, address TEXT, city TEXT,
      state TEXT, country TEXT DEFAULT 'India', pincode TEXT,
      mobile TEXT, email TEXT, website TEXT, gstin TEXT, pan TEXT,
      logo_path TEXT, signature_path TEXT, upi_qr_path TEXT,
      bank_name TEXT, bank_account TEXT, bank_ifsc TEXT,
      invoice_prefix TEXT DEFAULT 'INV', invoice_counter INTEGER DEFAULT 1,
      currency_symbol TEXT DEFAULT 'Rs', financial_year_start TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS license_keys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key_hash TEXT NOT NULL UNIQUE,
      key_type TEXT NOT NULL,
      is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_name TEXT NOT NULL, brand TEXT, model TEXT,
      category TEXT DEFAULT 'Smartphone', hsn_code TEXT,
      barcode TEXT UNIQUE, unit TEXT DEFAULT 'PCS',
      gst_percentage REAL DEFAULT 18.0,
      purchase_price REAL DEFAULT 0, selling_price REAL DEFAULT 0,
      min_stock_alert INTEGER DEFAULT 2, description TEXT,
      is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS product_units (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL, imei TEXT UNIQUE,
      serial_number TEXT, color TEXT, storage TEXT,
      purchase_price REAL, selling_price REAL,
      status TEXT DEFAULT 'IN_STOCK',
      purchase_id INTEGER, sale_id INTEGER, notes TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (product_id) REFERENCES products(id)
    );

    CREATE TABLE IF NOT EXISTS suppliers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_name TEXT NOT NULL, contact_person TEXT,
      mobile TEXT, alternate_mobile TEXT, email TEXT,
      address TEXT, city TEXT, state TEXT,
      country TEXT DEFAULT 'India', pincode TEXT,
      gstin TEXT, pan TEXT, opening_balance REAL DEFAULT 0,
      notes TEXT, is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL, mobile TEXT, alternate_mobile TEXT,
      email TEXT, address TEXT, city TEXT, state TEXT,
      gstin TEXT, id_proof_type TEXT, id_proof_number TEXT,
      notes TEXT, is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS purchases (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      purchase_number TEXT NOT NULL UNIQUE, supplier_id INTEGER,
      purchase_date TEXT NOT NULL, invoice_number TEXT,
      subtotal REAL DEFAULT 0, discount_amount REAL DEFAULT 0,
      taxable_amount REAL DEFAULT 0,
      cgst_amount REAL DEFAULT 0, sgst_amount REAL DEFAULT 0,
      igst_amount REAL DEFAULT 0, total_gst REAL DEFAULT 0,
      total_amount REAL DEFAULT 0, paid_amount REAL DEFAULT 0,
      balance_amount REAL DEFAULT 0, payment_mode TEXT DEFAULT 'Cash',
      notes TEXT, status TEXT DEFAULT 'COMPLETED',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
    );

    CREATE TABLE IF NOT EXISTS purchase_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      purchase_id INTEGER NOT NULL, product_id INTEGER NOT NULL,
      product_unit_id INTEGER, quantity INTEGER NOT NULL,
      unit TEXT DEFAULT 'PCS', purchase_price REAL NOT NULL,
      discount_percentage REAL DEFAULT 0, taxable_price REAL,
      gst_percentage REAL DEFAULT 18, cgst_percentage REAL DEFAULT 9,
      sgst_percentage REAL DEFAULT 9, igst_percentage REAL DEFAULT 0,
      gst_amount REAL DEFAULT 0, total_price REAL NOT NULL,
      FOREIGN KEY (purchase_id) REFERENCES purchases(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    );

    CREATE TABLE IF NOT EXISTS sales (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      invoice_number TEXT NOT NULL UNIQUE, customer_id INTEGER,
      customer_name TEXT, customer_mobile TEXT, customer_gstin TEXT,
      sale_date TEXT NOT NULL, subtotal REAL DEFAULT 0,
      discount_amount REAL DEFAULT 0, taxable_amount REAL DEFAULT 0,
      cgst_amount REAL DEFAULT 0, sgst_amount REAL DEFAULT 0,
      igst_amount REAL DEFAULT 0, total_gst REAL DEFAULT 0,
      total_amount REAL DEFAULT 0, paid_amount REAL DEFAULT 0,
      balance_amount REAL DEFAULT 0, payment_mode TEXT DEFAULT 'Cash',
      notes TEXT, status TEXT DEFAULT 'COMPLETED',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (customer_id) REFERENCES customers(id)
    );

    CREATE TABLE IF NOT EXISTS sale_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sale_id INTEGER NOT NULL, product_id INTEGER NOT NULL,
      product_unit_id INTEGER, imei TEXT, quantity INTEGER NOT NULL,
      unit TEXT DEFAULT 'PCS', selling_price REAL NOT NULL,
      discount_percentage REAL DEFAULT 0, taxable_price REAL,
      gst_percentage REAL DEFAULT 18, cgst_percentage REAL DEFAULT 9,
      sgst_percentage REAL DEFAULT 9, igst_percentage REAL DEFAULT 0,
      gst_amount REAL DEFAULT 0, total_price REAL NOT NULL,
      FOREIGN KEY (sale_id) REFERENCES sales(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    );

    CREATE TABLE IF NOT EXISTS purchase_returns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      return_number TEXT NOT NULL UNIQUE, purchase_id INTEGER NOT NULL,
      supplier_id INTEGER, return_date TEXT NOT NULL,
      reason TEXT, total_amount REAL DEFAULT 0,
      status TEXT DEFAULT 'COMPLETED',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (purchase_id) REFERENCES purchases(id)
    );

    CREATE TABLE IF NOT EXISTS purchase_return_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      return_id INTEGER NOT NULL, purchase_item_id INTEGER,
      product_id INTEGER NOT NULL, product_unit_id INTEGER,
      quantity INTEGER NOT NULL, purchase_price REAL, total_price REAL,
      FOREIGN KEY (return_id) REFERENCES purchase_returns(id)
    );

    CREATE TABLE IF NOT EXISTS sale_returns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      return_number TEXT NOT NULL UNIQUE, sale_id INTEGER NOT NULL,
      customer_id INTEGER, return_date TEXT NOT NULL,
      reason TEXT, total_amount REAL DEFAULT 0, refund_mode TEXT,
      status TEXT DEFAULT 'COMPLETED',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (sale_id) REFERENCES sales(id)
    );

    CREATE TABLE IF NOT EXISTS sale_return_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      return_id INTEGER NOT NULL, sale_item_id INTEGER,
      product_id INTEGER NOT NULL, product_unit_id INTEGER,
      imei TEXT, quantity INTEGER NOT NULL,
      selling_price REAL, total_price REAL,
      FOREIGN KEY (return_id) REFERENCES sale_returns(id)
    );

    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      expense_date TEXT NOT NULL, category TEXT NOT NULL,
      description TEXT, amount REAL NOT NULL,
      payment_mode TEXT DEFAULT 'Cash', reference_number TEXT,
      notes TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS income (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      income_date TEXT NOT NULL, category TEXT NOT NULL,
      description TEXT, amount REAL NOT NULL,
      payment_mode TEXT DEFAULT 'Cash', reference_number TEXT,
      notes TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS safe_mode_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data_type TEXT, data_json TEXT, label TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `
  
  db.exec(schema)
  console.log("Schema initialized")
}

module.exports = { setupSchema }
