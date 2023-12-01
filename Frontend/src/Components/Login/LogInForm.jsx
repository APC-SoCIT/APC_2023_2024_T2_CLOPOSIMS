import { Button, Checkbox, Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

const LogInForm = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 500,
    margin: "20px auto",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <h2>Log In</h2>
        <h4>Username</h4>
        <TextField
          className="outlined-basic"
          label="Enter Username"
          variant="outlined"
          fullWidth
          required
        />
        <h4>Password</h4>
        <TextField
          className="outlined-basic"
          label="Enter Password"
          type="password"
          variant="outlined"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          className="login--btn"
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Log In
        </Button>
      </Paper>
    </Grid>
  );
};

export default LogInForm;
