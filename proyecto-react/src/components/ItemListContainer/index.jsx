import { Paper } from "@mui/material";

const index = ({ greeting }) => {
  return (
    <div>
      <Paper elevation={3}>{greeting}</Paper>
    </div>
  );
};

export default index;
