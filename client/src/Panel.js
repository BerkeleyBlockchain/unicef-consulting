import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { CardBody, CardSubtitle, TabContent, TabPane, NavLink, Container, Row, Col, ButtonGroup, Form, FormGroup, Label, Input, Table, Card, CardText, CardTitle, Button, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      borderRadius: '10px',
      marginTop: '4%',
      marginBottom: '4%',
      backgroundColor: '#ECF3FF',
    },
    heading: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      fontFamily: theme.typography.roboto
    },
    details: {
        flexDirection: "column"
    },
    description: {
        fontSize: theme.typography.pxToRem(11)
    },
  }));  

export default function Panel(props) {
    const classes = useStyles();
    console.log(props.project.fundingBreakdown);
  return (
    <ExpansionPanel className={classes.root}>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
        <Typography className={classes.heading}>{props.project.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
           <Typography className={classes.description}><b>Description: </b> {props.project.description}</Typography>           
           <Typography className={classes.description}> <b>Target Funding: </b> {props.project.targetFunding}</Typography>           
           <Typography className={classes.description}><b>Funding Breakdown: </b> </Typography>

          {typeof props.project.fundingBreakdown == "string" ? <Typography className={classes.description}><b> {props.project.fundingBreakdown} </b> </Typography> : 
           Object.keys(props.project.fundingBreakdown[0]).map((key) => (
            <Typography className={classes.description}><b>{key}%:</b> {props.project.fundingBreakdown[0][key]} </Typography>
            ))
           }
        </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

