import React, {useState} from "react";
import MilestoneEmbedded from "./milestones/milestoneEmbedded";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
  }));


export default function Milestones(){
    const classes = useStyles();
    const milestone1 = <MilestoneEmbedded name="Milestone 01" link="https://docs.google.com/document/d/e/2PACX-1vQsf7h6aksLPsUFJ5pUfHmQ6ARNIc5LMCojByzc_Sp5Wl0fPqHm6ymS_fCf1N7GSzP1B3Qp8VcR9bMn/pub?embedded=true"/>;
    const milestone2 = <MilestoneEmbedded name="Milestone 02" link="https://docs.google.com/document/d/e/2PACX-1vQeovl-vH8OjPXAIoaQon-mv3IqSbncQ4BSYf47wNh85Eyjhdxj1zTDdgi8KwWfVOFnt-bDD1LPGbST/pub?embedded=true"/>
    const [milestone, setMilestone] = useState(milestone1)

    const handleMilestoneChange = (milestone) => {
        setMilestone(milestone)
    }
    
    return(
        <div>
            <Button className={classes.button} variant="contained" onClick={() => handleMilestoneChange(milestone1)}> Milestone 1</Button>
            <Button className={classes.button} variant="contained"  onClick={() => handleMilestoneChange(milestone2)}> Milestone 2</Button>
            <div className={classes.iframe}>
                {milestone}
            </div>
        </div>
    );
}