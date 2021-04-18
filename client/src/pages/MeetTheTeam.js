import React from 'react';
// Material UI
import {
    Avatar,
    Container,
    Grid,
    IconButton,
    Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    
    pic: {
        width: theme.spacing(12),
        height: theme.spacing(12)
    },
    Avatar: {
       justify:'center'
    },
    
}));

export default function MeetTheTeam() {
    const classes = useStyles();
    return (
        <Container fixed>
            <div className={classes.root}>
                <Grid container direction="row"  alignItems="center" spacing={4}>
                    <Grid item xs={6}
                     justify='center' >
                        <Paper className={classes.paper} elevation={3}>
                            <Avatar alt="Nardin Lachowski" src="https://avatars.githubusercontent.com/u/39885707?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Nardin Lachowski</Typography>
                            <Typography variant="h6" color="textSecondary">Web Developer</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Back End</Typography>
                            <IconButton aria-label="Github" href="https://github.com/nard1n"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/nardinl"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                            <Avatar alt="Adrienne Osorio" src="https://avatars.githubusercontent.com/u/72840388?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Adrienne Osorio</Typography>
                            <Typography variant="h6" color="textSecondary">Web Developer</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Front End</Typography>
                            <IconButton aria-label="Github" href="https://github.com/amo02008"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/adrienne-osorio-jrdev"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                            <Avatar alt="Bill Soss" src="https://avatars.githubusercontent.com/u/58079883?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Bill Soss</Typography>
                            <Typography variant="h6" color="textSecondary">Web Developer</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Back End</Typography>
                            <IconButton aria-label="Github" href="https://github.com/sossw1"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/william-soss/"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                            <Avatar alt="Emily Spoldi" src="https://avatars.githubusercontent.com/u/72423431?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Emily Spoldi</Typography>
                            <Typography variant="h6" color="textSecondary">Web Developer</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Front End</Typography>
                            <IconButton aria-label="Github" href="https://github.com/espoldi"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/emily-spoldi/"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} elevation={3}>
                            <Avatar alt="Adriana Valdiglesias" src="https://avatars.githubusercontent.com/u/73134344?v=4" className={classes.pic} />
                            <Typography variant="h5" color="textSecondary">Adriana Valdiglesias</Typography>
                            <Typography variant="h6" color="textSecondary">Web Developer</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Front End</Typography>
                            <IconButton aria-label="Github" href="https://github.com/adrianavv1"><GithubIcon /></IconButton>
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/adriana-valdiglesias-962677184/"><LinkedInIcon /></IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}