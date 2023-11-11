import	app from './app.js'
import { sequelize } from './database/database.js';

async function main() {
    try {
        await sequelize.authenticate();
        app.listen(3000);
        console.log('Server listening on port 3000');
    } catch (error) {
        console.log("There was an error while getting up the server: ", error);
    }
}

main();