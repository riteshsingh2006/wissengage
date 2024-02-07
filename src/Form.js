import React, { useEffect, useState } from "react";
import "./Form.css";
import {
  Grid,
  FormLabel,
  Radio,
  Rating,
  Box,
  FormControlLabel,
  TextField,
  FormControl,
  RadioGroup,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { inputFormElements } from "./formElements";

export default function Form() {
  const [rating,setRating]= useState([0,0,0]);
  const [radio,setRadio]=useState('tech');
  const handleRatingChange = (value, index) => {
    const newRating = [...rating];
    newRating[index] = value;
    setRating(newRating);
  };
  
  const clearItems=()=>{
    setRadio('tech')
    setRating([0,0,0])
    console.log(rating)
  }

  const margin = { margin: "0 5px" };
  return (
    <div className="Form">
      <Grid>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h4" color="#f06292">
              FeedBack
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Fill all the mandatory fields to Submit the Feedback.
            </Typography>
            <br></br>
            <form>
              <Grid container spacing={2}>
                <Grid xs={12} sm={12} item>
                  <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth="true"
                    required="true"
                  />
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth="true"
                    required="true"
                  />
                </Grid>
                <Grid xs={12} sm={12} align="left" item>
                  <FormControl className="department-control">
                    <FormLabel className="department-label">
                      Department
                    </FormLabel>
                    <br></br>
                    <RadioGroup
                      defaultValue={radio}
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="tech"
                        control={<Radio />}
                        label="Tech"
                      />
                      <FormControlLabel
                        value="hr"
                        control={<Radio />}
                        label="HR"
                      />
                      <FormControlLabel
                        value="operation"
                        control={<Radio />}
                        label="Operation"
                      />
                      <FormControlLabel
                        value="finance"
                        control={<Radio />}
                        label="Finance"
                      />
                      <FormControlLabel
                        value="support"
                        control={<Radio />}
                        label="Support"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField
                    name="comment"
                    label="Comment"
                    variant="outlined"
                    multiline
                    fullWidth="true"
                  />
                </Grid>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                  style={{
                    margin:'10px' ,textAlign:'left'}
                  }
                >
                  <Typography component="legend">
                    How much you rate the facilities and hospitality provided by wissen to their employees ?
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={rating[0]}
                    onChange={(event, newValue) => {
                      handleRatingChange(newValue,0);
                    }}
                  />
                  <Typography component="legend">How much you rate the growth in the role and responsibilties inside wissen technology  ?</Typography>
                  <Rating
                    name="simple-controlled"
                    value={rating[1]}
                    onChange={(event, newValue) => {
                      handleRatingChange(newValue,1);
                    }}
                  />
                  <Typography component="legend">
                    How much you rate the overall performance of organization in terms of valuation and capitalization?
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={rating[2]}
                    onChange={(event, newValue) => {
                      handleRatingChange(newValue,2);
                    }}
                  />
                </Box>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={12} align="right">
                  <Button
                    style={margin}
                    type="reset"
                    variant="outlined"
                    color="primary"   
                    onClick={clearItems}
                  >
                    Clear
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
