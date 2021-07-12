import { Route } from "../../interfaces/route.domain";
import httpRequest from "../http/http-request";

export const routesService = async () => {
    const { data } = await httpRequest.get<Route[]>('routes');

    return data;
}