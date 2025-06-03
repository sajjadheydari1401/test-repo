import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  message: string;
  icon: ReactNode;
  count: number;
  onClick?: () => void;
}

const InfoCard = ({ title, icon, count, message, onClick }: InfoCardProps) => (
  <Card
    sx={{
      flex: 1,
      minWidth: 220,
      bgcolor: "white",
      padding: "16px",
      borderRadius: "16px",
      boxShadow: "none",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <CardContent
      style={{ padding: 0 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: { xs: 14, sm: 16 },
            display: "flex",
            alignItems: "center",
            gap: "4px",
            color: "#393939",
          }}
        >
          {icon} {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: { xs: 14, sm: 16 },
            display: "flex",
            color: "#393939",
          }}
        >
          {count}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: { xs: 12, sm: 14 },
          display: "flex",
          alignItems: "center",
          color: "#7B7B7B",
        }}
      >
        {message}
      </Typography>
    </CardContent>
  </Card>
);

export default InfoCard;
