import Histories from "./controllers/Histories";
import Projects from "./controllers/Projects";
import Works from "./controllers/Works";

class Routers
{
    mapController(controller)
    {
        const controllers = {
            'projects': Projects,
            'works': Works,
            'histories':Histories
        }

        return controllers[controller]
    }

    post(controller, action, request) {
        const exec = this.mapController(controller)[action]()
        if (exec) {
            return exec(request)
        }

        return {
            status: 'error',
            code: 404,
            message: 'Destino Inexistente'
        }
    }
}

export default Routers
