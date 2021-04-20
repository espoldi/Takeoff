import React from "react";
// Material UI
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  OutlinedInput,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    alignItems: "center",
  },
}));



export default function CheckboxListSecondary() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Container fixed align="center">
      <Typography className={classes.heading}
       variant="h2" 
       align="center" 
       style={{
        marginTop:'50px', 
        textDecoration: "none", 
         color: "#113034", 
         fontFamily:"aw-conqueror-didot", 
         fontWeight: "900", 
         fontSize: "5rem", 
         fontStyle: 'normal'}} 
         > My Bucket List </Typography>
      <List dense className={classes.root}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <Box>
            <ListItem key={value} button>
              <ListItemAvatar>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
            </Box>
          );
        })}
      </List>
      <FormControl variant="outlined" margin="dense">
        <InputLabel htmlFor="component-outlined"></InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          label="Name"
        />
        <Button variant="contained" color="primary" >
          Add New Destination
        </Button>
      </FormControl>
    </Container>
  );
}
