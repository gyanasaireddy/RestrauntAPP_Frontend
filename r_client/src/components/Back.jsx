import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={() => navigate("/")}
      sx={{ mb: 2 }}
    >
      Back to Home
    </Button>
  );
}