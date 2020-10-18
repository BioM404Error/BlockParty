import React, {useState} from "react";
import MilestoneEmbedded from "./milestones/milestoneEmbedded";

export default function Milestones(){
    const milestone1 = <MilestoneEmbedded name="Milestone 01" link="https://docs.google.com/document/d/e/2PACX-1vQsf7h6aksLPsUFJ5pUfHmQ6ARNIc5LMCojByzc_Sp5Wl0fPqHm6ymS_fCf1N7GSzP1B3Qp8VcR9bMn/pub?embedded=true"/>;
    const milestone2 = <MilestoneEmbedded name="Milestone 02" link="https://docs.google.com/document/d/e/2PACX-1vTFU7FZ9bhcQWIwh-_XhG7ioJXGjVqbPg5WtSNW5gH2KahNuDEwh3r30M0NDL7agdYxlm-p54aWgWkL/pub?embedded=true"/>
    const [milestone, setMilestone] = useState(milestone1)

    const handleMilestoneChange = (milestone) => {
        setMilestone(milestone)
    }
    
    return(
        <div>
            <button onClick={() => handleMilestoneChange(milestone1)}> Milestone 1</button>
            <button onClick={() => handleMilestoneChange(milestone2)}> Milestone 2</button>

            <div>
            {milestone}
            </div>
        </div>
    );
}