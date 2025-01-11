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

    post(data) {
        try {
            return this.mapController(data.controller)[data.action](data)
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
