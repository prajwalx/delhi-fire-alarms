import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const productData = [
  {
    title: 'Indoor MCP',
    subtitle: 'Manual Call Point',
    description: 'Reliable manual call point designed for internal alarm triggering in commercial environments.',
    specs: ['ABS Plastic Body', 'Flush / Surface Mount', '"Break Glass" or "Push"'],
    image: '/mcp.png', // Replace with your local assets
  },
  {
    title: 'Resettable MCP',
    subtitle: 'Key-Operated Manual Point',
    description: 'High-efficiency reusable design. Eliminates the cost and mess of glass replacement.',
    specs: ['Reusable Design', 'LED Indicator Support', 'Ideal for Schools/Hospitals'],
    image: '/resettable-mcp.png',
  },
  {
    title: 'Smoke Detector',
    subtitle: 'Photoelectric Sensor',
    description: 'High-sensitivity detection technology designed to sense smoke early and reduce false alarms.',
    specs: ['360° Visibility LED', 'Dual-Chamber Sensing', 'Low Standby Current'],
    image: '/smoke-sensor.png',
  },
  {
    title: 'Exit Steel Plate',
    subtitle: 'Emergency Hardware',
    description: 'Heavy-duty emergency exit signage built to withstand industrial wear and tear.',
    specs: ['Stainless Steel (Grade 304)', 'Glow-in-the-dark / Reflective', 'Weatherproof Finish'],
    image: '/exit-plate.png',
  },
];

export default function ProductListing() {
  return (
    <Box id="products" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" color="text.primary" gutterBottom>
            Product Lineup
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Precision-engineered fire safety components manufactured in Delhi NCR. 
            Built for durability, compliance, and rapid deployment in bulk.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {productData.map((product, index) => (
            <Grid size={{xs:12, sm:6, md:3}} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: (theme) => theme.shadows[4],
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={product.image}
                  alt={product.title}
                  sx={{ bgcolor: 'grey.100', objectFit: 'cover', p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="overline" color="primary" fontWeight="bold">
                    {product.subtitle}
                  </Typography>
                  <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 700 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <List dense disablePadding>
                    {product.specs.map((spec) => (
                      <ListItem key={spec} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 18, color: 'success.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={spec} 
                          primaryTypographyProps={{ variant: 'caption', fontWeight: 500 }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    fullWidth 
                    variant="outlined" 
                    color="primary"
                    href='#contact'
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 'bold' }}
                  >
                    Bulk Enquiry
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}