import {createServer, Model, Response} from "miragejs";
import moviesData from "./components/MoviesData/MoviesDatas";

export function makeServer({environment = "test"} = {}) {
    let server = createServer({
        environment,
        models: {
            movie: Model,
        },

        seeds(server) {
            moviesData.map(item => server.create("movie",
                item));
        },

        routes() {
            this.namespace = "api";
            this.get("/movies", (schema) => {
                    return schema.movies.all();
                }
            );
            this.get("/movies/:id", (schema, request) => {
                    const id = request.params.id;
                    let movieId = schema.movies.find(id)
                if (movieId) return movieId ;
                else
                return new Response(404, {}, {error: `movie with this title not found`});
                }
            );

        }
    });

    return server;
}