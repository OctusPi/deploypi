import Histories from "./controllers/Histories";
import Projects from "./controllers/Projects";
import Works from "./controllers/Works";

class Routers
{
    mapController(controller)
    {
        const controllers = {
            'projects': new Projects(),
            'works': new Works(),
            'histories': new Histories()
        }

        return controllers[controller]
    }

    post(controller, action, params) {
        try {
            return this.mapController(controller)[action](params)
        } catch (error) {
            console.log(error)
            return {
                status: 'error',
                code: 404,
                message: 'Destino Inexistente'
            }
        }
    }
}

export default Routers
