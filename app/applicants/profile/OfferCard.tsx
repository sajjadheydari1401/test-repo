import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import locationIcon from "../../assets/svg/location-icon.svg";
import Image from "next/image";
import { MAX_OFFERING_TITLE_LENGTH } from "@/app/constants";

interface OfferCardProps {
  title: string;
  price: string;
  location: string;
  image: string;
  isFree?: boolean;
}

const OfferCard: React.FC<OfferCardProps> = ({
  title,
  price,
  location,
  image,
  isFree = false,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        cursor: "pointer",
        padding: "8px 8px 8px 8px",
        boxShadow: "none",
      }}
    >
      <Box sx={{ width: "100%", position: "relative", height: 160 }}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "12px" }}
        />
      </Box>
      <CardContent style={{ padding: "12px 8px 0" }}>
        <Typography sx={{ fontWeight: 400, fontSize: 16, color: "#1C1C1C" }}>
          {title.length > MAX_OFFERING_TITLE_LENGTH
            ? title.slice(0, MAX_OFFERING_TITLE_LENGTH) + "..."
            : title}
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 20,
            color: "#6D6D6D",
            my: "8px",
          }}
        >
          {isFree ? (
            <Chip
              label="Free"
              style={{
                backgroundColor: "#EFFCD6",
                color: "#7B7B7B",
                fontSize: 14,
                fontWeight: 300,
                width: "51px",
                height: "24px",
              }}
            />
          ) : (
            <>
              {price}
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#6D6D6D",
                  marginLeft: "4px",
                }}
              >
                €
              </span>
            </>
          )}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Image src={locationIcon} alt={"loc"} width={20} height={20} />
          <Typography sx={{ fontWeight: 300, fontSize: 14, color: "#6D6D6D" }}>
            {location}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
