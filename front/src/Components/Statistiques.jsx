import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "./LineChart";
import ProgressCircle from "./ProgressCircle";

const Stats = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
    >
      {/* ROW 1 */}
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h6" color={colors.grey[100]}>
            320
          </Typography>
          <Typography variant="subtitle1" color={colors.grey[100]}>
            Compétences validées
          </Typography>
        </Box>
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h6" color={colors.grey[100]}>
            28
          </Typography>
          <Typography variant="subtitle1" color={colors.grey[100]}>
            Salariés formés
          </Typography>
        </Box>
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h6" color={colors.grey[100]}>
            32
          </Typography>
          <Typography variant="subtitle1" color={colors.grey[100]}>
            Compétences en cours
          </Typography>
        </Box>
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h6" color={colors.grey[100]}>
            18
          </Typography>
          <Typography variant="subtitle1" color={colors.grey[100]}>
            Demandes de formation
          </Typography>
        </Box>
      </Box>

      {/* ROW 2 */}
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex "
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Évolution des compétences
            </Typography>
            <Typography variant="h3" fontWeight="bold" color={colors.grey[500]}>
              4,342.32 heures
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.grey[500] }} />
            </IconButton>
          </Box>
        </Box>
        <Box height="250px" m="-20px 0 0 0">
          <LineChart isDashboard={true} />
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Classement du niveau des employés
          </Typography>
        </Box>
      </Box>

      {/* ROW 3 */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600">
          Campagne
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
        >
          <ProgressCircle size="125" />
          <Typography
            variant="h5"
            color={colors.grey[100]}
            sx={{ mt: "15px" }}
          >
            48,352 heures de formation
          </Typography>
          <Typography>Inclut les dépenses supplémentaires</Typography>
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >

          
            Nombre d'employé actifs 
          <ProgressCircle size="125" />
          <Typography
            variant="h5"
            color={colors.grey[100]}
            sx={{ mt: "15px" }}
          >
            Il y en actuellement : 150
          </Typography>
        
        </Typography>
        {/* <Box height="200px">
          <GeographyChart isDashboard={true} />
        </Box> */}
      </Box>
    </Box>
  );
};

export default Stats;
