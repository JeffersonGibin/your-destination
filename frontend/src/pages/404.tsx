import { Typography} from '@material-ui/core'
import { NextPage } from 'next'

import Head from 'next/head'

const Page404: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Página não encontrada</title>
      </Head>

      <Typography variant="h4" color="textPrimary" component="h1" align="center" gutterBottom>
        Essa página não existe :(
      </Typography>
    </div>
  )
};

export default Page404;

