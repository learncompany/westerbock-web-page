import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [

    layout("layouts/menu-layout.tsx", [
        index("routes/home/home.tsx"),

        route(
            "gebaeudereinigung",
            "routes/gebaeudereinigung/gebaeudereinigung-intro.tsx", [
            index("routes/gebaeudereinigung/views/gebaeudereinigung-main.tsx"),
            route("unterhaltsreinigung", "routes/gebaeudereinigung/views/unterhaltsreinigung.tsx"),
            route("treppenhausreinigung", "routes/gebaeudereinigung/views/treppenhausreinigung.tsx"),
            route("bueroreinigung", "routes/gebaeudereinigung/views/bueroreinigung.tsx"),
            route("baureinigung", "routes/gebaeudereinigung/views/baureinigung.tsx"),
            route("grundreinigung", "routes/gebaeudereinigung/views/grundreinigung.tsx"),

        ]),

        route("gruenflaechenpflege", "routes/gruenflaechenpflege/gruenflaechenpflege-intro.tsx", [
            index("routes/gruenflaechenpflege/views/gruenflaechenpflege-main.tsx"),
            route("gartenpflege", "routes/gruenflaechenpflege/views/gartenpflege.tsx"),
            route("rasenpflege", "routes/gruenflaechenpflege/views/rasenpflege.tsx"),
            route("laubbeseitigung", "routes/gruenflaechenpflege/views/laub.tsx"),
            route("winterdienst", "routes/gruenflaechenpflege/views/winterdienst.tsx"),
        ]),

        route("objektservice", "routes/objektservice/objektservice-intro.tsx", [
            index("routes/objektservice/views/objektservice-main.tsx"),
            route("hausmeisterservice", "routes/objektservice/views/hausmeisterservice.tsx"),
            route("objektbetreuung", "routes/objektservice/views/objektbetreuung.tsx"),
            route("entruempelung", "routes/objektservice/views/entruempelung.tsx"),
            route("photovoltaik", "routes/objektservice/views/photovoltaik.tsx"),
            route("schaedlingsbekaempfung", "routes/objektservice/views/schaedlingsbekaempfung.tsx"),
        ]),

        route("ueber-uns", "routes/ueber-uns/ueber-uns-intro.tsx", [
            index("routes/ueber-uns/views/ueber-uns-main.tsx")
        ]),

        route("angebot-anfragen", "routes/angebot-anfragen/angebot-anfragen-intro.tsx", [
            index("routes/angebot-anfragen/views/angebot-anfragen-main.tsx")
        ]),

        route("kontakt", "routes/kontakt/kontakt-intro.tsx", [
            index("routes/kontakt/views/kontakt-main.tsx")
        ]),

    ])
] satisfies RouteConfig;