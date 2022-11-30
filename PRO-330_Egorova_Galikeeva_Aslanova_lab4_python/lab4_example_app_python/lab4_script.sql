CREATE TABLE source_files (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	filename VARCHAR(255),
	processed DATETIME
);

CREATE TABLE processed_data (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	score INTEGER,
	institution VARCHAR(255),
	source_file INTEGER
	CONSTRAINT fk_source_files 
	FOREIGN KEY (source_file) 
	REFERENCES source_files(id) 
	ON DELETE CASCADE
);