import fs from 'fs'
import credentials from './credentials'
import Project from '../models/Project'
import Work from '../models/Work'
import History from '../models/History'

function exec()
{
    if (!fs.existsSync(credentials.storage)) {
        const models = [Project, Work, History]
        models.forEach(async (m) => {
            await m.sequelize.sync({ force: true })
        });
    }
}

export default {
    exec
}

