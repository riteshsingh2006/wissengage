import React from "react";
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
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);
  const margin = { margin: "0 5px" };
  return (
    <div className="Form">
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h4" color="primary">
              FeedBack
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Fill all the mandatory fields to Submit the FeedBack.
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
                <Grid xs={6} sm={6} item>
                  <FormControl>
                    <FormLabel className="department-label">Department</FormLabel>
                    <br></br>
                    <RadioGroup
                      defaultValue="tech"
                      name="radio-buttons-group"
                      //row
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
                    fullWidth="true"
                    required="false"
                  />
                </Grid>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Typography component="legend">Hospatility/Facilites</Typography>
                  <Rating
                    name="simple-controlled"
                    value={value1}
                    onChange={(event, newValue) => {
                      setValue1(newValue);
                    }}
                  />
                  <Typography component="legend">Growth</Typography>
                  <Rating
                    name="simple-controlled"
                    value={value2}
                    onChange={(event, newValue) => {
                      setValue2(newValue);
                    }}
                  />
                  <Typography component="legend">Overall Performance</Typography>
                  <Rating
                    name="simple-controlled"
                    value={value3}
                    onChange={(event, newValue) => {
                      setValue3(newValue);
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
