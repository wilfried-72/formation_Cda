import React from "react";
import { datePaser } from "../util";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box} from "@mui/system";
import { Typography } from "@mui/material";

const Main = (propsDataCurrent) => {
  console.log(propsDataCurrent.dataCurrent.dt);

  return (
    <div>
      <Box sx={{ display: "flex",justifyContent:"center", backgroundColor: "rgba(76,163,221, 1)", borderRadius:"10px" , m:2, p:1 ,  border: "1px white" }}>
        <RemoveRedEyeIcon sx={{color:"white"}}/>
        <Typography component="p" sx={{marginLeft: 2, color:"white"}}>
          {datePaser(propsDataCurrent.dataCurrent.dt)}
        </Typography>
      </Box>
    </div>
  );
};

export default Main;
