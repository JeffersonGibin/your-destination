import {
  CardContent,
  Box,
  CardMedia,
  Typography,
  Card,
  Grid,
} from "@material-ui/core";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Route } from "../interfaces/route.domain";
import { routesService } from "../infrastructure/services/routes.service";


interface RoutesListPageProps {
  routes: Route[];
}

const RoutePage: NextPage<RoutesListPageProps> = ({ routes }) => {

  return (
    <>
      <Head>
        <title>Routes</title>
      </Head>

      <Box marginTop={2}>
        <Typography
          component="h5"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >
          Routes
        </Typography>
      </Box>

      {
        !routes.length && (
          <Typography
          component="h3"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >

            Não existe rotas cadastradas
        </Typography>
        )
      }

      <Grid container spacing={4}>
        {routes.map((route, key) => (
          <Grid key={key} item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                style={{ paddingTop: "56%" }}
                image={
                  "https://source.unsplash.com/random?city," + Math.random()
                }
              />
              <CardContent>
                <Typography
                  component="h2"
                  variant="h5"
                  color="textPrimary"
                  gutterBottom
                >
                  {route.title.toUpperCase()}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h5"
                >
                  Latitude Inicial: {route.startPosition.latitude} [Longitude]{" "}
                  {route.startPosition.longitude}
                  <br />
                  Latitude Final: {route.endPosition.latitude} [Longitude]{" "}
                  {route.endPosition.longitude}
                  <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default RoutePage;

export const getServerSideProps: GetServerSideProps<RoutesListPageProps> = async (context) => {
  const resultRoutes = await routesService();

  console.log(resultRoutes);

  return {
    props: {
      routes: resultRoutes,
    },
  };
};
