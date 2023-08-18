import React from "react";
// This has all the mock data for our list of cars. It's an array.
import cars from "../cars.json";

import { useParams } from "react-router-dom";

// Import MUI components here.
import { Container, Paper, Chip } from "@mui/material";

const Car = (props) => {
  // We are destructuring the object created by useParams().
  // Which contains all the parameters from the url which routed us to this page.
  const { id } = useParams();

  // We are searching the array for the specific car id.
  // Once filter is complete, you destructure the resultant array which should only have 1 object.
  const [car] = cars.filter((car) => id == car.id);

  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={1} sx={{ p: 6 }}>
          <h1>{car.Name}</h1>
          {Object.keys(car).map((key) => {
            return <Chip label={`${key}: ${car[key]}`}></Chip>;
          })}
        </Paper>
      </Container>
    </>

    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //       Word of the Day
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //       be{bull}nev{bull}o{bull}lent
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       adjective
    //     </Typography>
    //     <Typography variant="body2">
    //       well meaning and kindly.
    //       <br />
    //       {'"a benevolent smile"'}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
};

export default Car;
