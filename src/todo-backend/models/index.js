const sqlite3 = require("sqlite3");

class Database {
    async cconstructor(file) {
        this.name = file;

        const database = await new sqlite3(this.name, sqlite3.OPEN_CREATE, (err) => {
            if(err) {
                console.log(err + err.message);
            };
        });
        return database'
    } 
    }
}
export default Database;
