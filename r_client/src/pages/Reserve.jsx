import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "./Theme";
import BackButton from "../components/Back";


const Reservation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleReservation = () => {
    // Placeholder logic
    console.log({ name, phone, guests, date, time });
    alert("Feature coming soon: Table availability check");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // horizontal center
          alignItems: "center", // vertical center
          height: "70vh", // take full viewport height
          mt: 2,
          // optional dark mode background
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container maxWidth="sm" sx={{ mt: 5, mb: 5, color: "#ffffff" }}>
            <Typography variant="h4" gutterBottom align="center">
              Book a Table
            </Typography>

            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    InputLabelProps={{
                      style: { color: "#ffffff" }, // label color
                    }}
                    InputProps={{
                      style: { color: "#ffffff" }, // input text color
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    InputLabelProps={{
                      style: { color: "#ffffff" }, // label color
                    }}
                    InputProps={{
                      style: { color: "#ffffff" }, // input text color
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Number of Guests"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                    InputLabelProps={{
                      style: { color: "#ffffff" }, // label color
                    }}
                    InputProps={{
                      style: { color: "#ffffff" }, // input text color
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="Select Date"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                    InputLabelProps={{ style: { color: "#ffffff" } }}
                    InputProps={{ style: { color: "#ffffff" } }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TimePicker
                    label="Select Time"
                    value={time}
                    onChange={(newValue) => setTime(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                    InputLabelProps={{ style: { color: "#ffffff" } }}
                    InputProps={{ style: { color: "#ffffff" } }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleReservation}
                    InputLabelProps={{ style: { color: "#ffffff" } }}
                    InputProps={{ style: { color: "#ffffff" } }}
                    sx={{ mt: 1 }}
                  >
                    Check Availability
                  </Button>

                </Grid>
                <Grid item xs={12}>
                  <BackButton/>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
    </LocalizationProvider>
  );
};

export default Reservation;
