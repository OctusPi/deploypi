import History from "../models/History";
import Project from "../models/Project";
import Work from "../models/Work";

function syncMigrations() {
    try {
        const models = [History, Project, Work]

        models.forEach(async(m) => {
            await m.sequelize?.authenticate()
            await m.sequelize?.sync({force: true})
        });

    } catch (error) {
        console.log(error)
    }
}

export default syncMigrations