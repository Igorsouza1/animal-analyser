import Database from "tauri-plugin-sql-api";

export class DatabaseManager {
  db: Database | null = null;

  async loadDatabase() {
    try {
      this.db = await Database.load("sqlite:animaltrap.db");
      console.log("Database loaded successfully.");
    } catch (e) {
      console.error("Error loading the database", e);
    }
  }

  async initialize() {
    if (!this.db) {
      await this.loadDatabase();
    } 
    if (this.db) { // Add this check to ensure this.db is not null
        try {
            await this.db.execute(
              "CREATE TABLE IF NOT EXISTS animal (ID INTEGER PRIMARY KEY, IMG TEXT, CAM TEXT, Especie TEXT, NomeCientifico TEXT, Grupo TEXT, Data TEXT, OBS TEXT, Latitude REAL, Longitude REAL);"
            );
            console.log("Table created successfully.");
        } catch (e) {
            console.error("Error creating table", e);
        }
    } else {
        console.error("Database not initialized.");
    }
  }

  async insertDataIntoTable(
    IMG?: string,
    CAM?: string,
    Especie?: string,
    NomeCientifico?: string,
    Grupo?: string,
    Data?: Date,
    OBS?: string | '',
    Latitude?: number,
    Longitude?: number
   ) {
    if (!this.db) {
       console.error("Database not initialized.");
       return;
    }
   
    try {
       await this.db.execute(
         `INSERT INTO animal (IMG, CAM, Especie, NomeCientifico, Grupo, Data, OBS, Latitude, Longitude) VALUES ('${IMG}', '${CAM}', '${Especie}', '${NomeCientifico}', '${Grupo}', '${Data}', '${OBS}', ${Latitude}, ${Longitude});`
       );
       console.log("Data inserted successfully.");
    } catch (e) {
       console.error("Error inserting data into table", e);
    }
   }

  async selectAllAnimals() {
    if (!this.db) {
      console.error("Database not initialized.");
      return;
    }

    try {
      const animals = await this.db.select("SELECT * FROM animal");
      console.log("Animals:", animals);
      return animals;
    } catch (e) {
      console.error("Error selecting data from table", e);
    }
  }
}
