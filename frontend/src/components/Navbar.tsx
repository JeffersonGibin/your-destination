import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";

const Navbar: React.FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Toolbar color="black">
        <Link href={"/"} as={`/`} passHref>
          <Typography variant="h6">Your Destination</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;