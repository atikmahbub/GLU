import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { v4 as uuidv4 } from 'uuid';
import { ArrowDropDown } from '@material-ui/icons';

const quesAns = [
    { ques: 'Do i habe to pay for subscription' },
    { ques: 'Can i create an account for my kid' },
    { ques: 'Are the classes interactive' },
    { ques: 'How do i signup to become a tutor' },
    { ques: 'Can i create an account for my kid' },
    { ques: 'Are the classes interactive' },
    { ques: 'How do i signup to become a tutor' },
];
const FreqQuesAccordion: React.FunctionComponent = () => {
    return (
        <div className="accord-container">
            {quesAns.map((item) => (
                <Accordion className="accord" key={uuidv4()}>
                    <AccordionSummary expandIcon={<ArrowDropDown className="icon" />}>
                        <Typography className="ques">{item.ques}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="ans">
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FreqQuesAccordion;
