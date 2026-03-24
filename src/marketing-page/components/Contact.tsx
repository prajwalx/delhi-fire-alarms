import * as React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Stack,
  Card,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    // Replace with your actual phone number
    const phoneNumber = "919871103466";
    const message = encodeURIComponent(
      "Hi, I am interested in a bulk order for your Fire Alarm equipment.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleSubmitRequest = () => {};

  const [name, setName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [details, setDetails] = React.useState("");

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, }}>
      <Container>
        <Grid container spacing={6}>
          {/* Left Side: Contact Information */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography color="text.primary" variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Get a Bulk Quote
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Partner with a leading Delhi-based manufacturer for your next
              project. We offer competitive wholesale pricing and rapid delivery
              across India.
            </Typography>

            <Stack spacing={3}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": { bgcolor: "primary.dark" },
                  }}
                >
                  <LocationOnIcon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Factory Location
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    D-149/1, Flatted Factory Complex, Okhla-III, New Delhi,
                    India
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  sx={{
                    bgcolor: "success.main",
                    color: "white",
                    "&:hover": { bgcolor: "success.dark" },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">
                    WhatsApp Sales
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +91 98711 03466
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  sx={{
                    bgcolor: "secondary.main",
                    color: "white",
                    "&:hover": { bgcolor: "secondary.dark" },
                  }}
                >
                  <EmailIcon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Email Enquiries
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    bhati.enterprises@yahoo.in
                  </Typography>
                </Box>
              </Box>
            </Stack>

            <Button
              variant="contained"
              color="success"
              size="large"
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsAppClick}
              sx={{
                mt: 5,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: "bold",
              }}
            >
              Chat on WhatsApp
            </Button>
          </Grid>

          {/* Right Side: Lead Gen Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                boxShadow: (theme) => theme.shadows[3],
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Send an Enquiry
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form below and our technical team will get back to
                you with a formal quote.
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="filled"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setName(event.target.value);
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="filled"
                    value={phoneNumber}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    variant="filled"
                    value={company}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setCompany(event.target.value);
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Estimated Quantity / Product Details"
                    variant="filled"
                    multiline
                    rows={4}
                    placeholder="Example: 500 units of Indoor MCP for a project in Gurgaon."
                    value={details}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setDetails(event.target.value);
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ py: 1.5, fontWeight: "bold", fontSize: "1rem" }}
                    onClick={() => {
                      const email = "bhati.enterprises@yahoo.in";
                      const subject = encodeURIComponent(
                        `Bulk Enquiry: Fire Alarm Equipment - ${new Date().toLocaleDateString()}`,
                      );
                      const body = encodeURIComponent(
                        `Hi Team,\n\n${details}\n\nRegards,\n${name},\n${company},\n${phoneNumber}`,
                      );
                      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                    }}
                  >
                    Submit Request
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
