import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'

export default function SpecificationPage(props){
    const [startTime, setStartTime] = useState(undefined)
    const [endTime, setEndTime] = useState(undefined)
    const [show, setShow] = useState(false);
    const [warning, setWarning] = useState([]);
    const [date, setDate] = useState(undefined);

    const handleClose = () => {
        setShow(false)
        setWarning([])
    };
    const handleShow = () => setShow(true);

    
    const handleNext = () => {
        let today = new Date();
        let todayDd = parseInt(today.getDate())
        let todayMm = parseInt(today.getMonth() + 1);
        let todayYyyy = parseInt(today.getFullYear());

        if(startTime && endTime){
            const startArray = startTime.split(':').map(item => parseInt(item));
            const endArray = endTime.split(':').map(item => parseInt(item));
            if(startArray[0] > endArray[0]){
                setWarning([...warning, "Please set the start time before the end time"])
            }else if((endArray[0] - startArray[0]) < 2){
                setWarning([...warning, "Block party should be at least one hour or more"])
            }
        }

        if ((startTime === undefined) || (endTime === undefined)){
            console.log("hi")
            setWarning([...warning, "Please input both a start time and an end time"])
        } 

        if (date === undefined){
            setWarning([...warning, "Please input a date for your block party"]);
        }

        if (date !== undefined) {
            let userDate = new Date(date);
            console.log(userDate)
            let userDd = parseInt(userDate.getDate());
            let userMm = parseInt(userDate.getMonth() + 1);
            let userYyyy = parseInt(userDate.getFullYear());

            if ((todayYyyy < userYyyy) || 
            ((todayYyyy === userYyyy) && (todayMm < userMm)) || 
            ((todayYyyy === userYyyy) && (todayMm === userMm) && (todayDd <= userDd))
            ){
                setWarning([...warning, "Please input a date in the future"])
            }
        }

        if(warning !== []) {
            console.log(warning)
            handleShow()
        }
    }

    return (
        <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                Estimated Number of People
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly />
                </Col>
            </Form.Group>
        </Form>
        <Form.Group controlId="dob">
            <Form.Label>Desired Start Time</Form.Label>
            <Form.Control 
                onChange={e => setStartTime(e.target.value)} 
                type="time" 
                name="startTime" 
                placeholder="Start Time" 
            />
        </Form.Group>
        <Form.Group controlId="dob">
            <Form.Label>Desired End Time</Form.Label>
            <Form.Control 
                onChange={e => setEndTime(e.target.value)} 
                type="time"
                name="endTime"
                placeholder="End Time" 
            />
        </Form.Group>
        <Form.Group controlId="dob">
            <Form.Label>Select Date</Form.Label>
            <Form.Control 
                type="date" 
                name="date" 
                placeholder="Party Date"
                onChange={e => setDate(e.target.value)}  
            />
        </Form.Group>
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                Desired City
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly />
                </Col>
            </Form.Group>
        </Form>
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                Desired Price Range
                </Form.Label>
                <Col sm="10">
                <Form.Control type="number" />
                </Col>
            </Form.Group>
        </Form>
        <Button variant="seconday">Back</Button>
        <Button variant="primary" onClick={() => handleNext()}>Next</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{warning.join('\n')}</Modal.Body>
      </Modal>
        </div>
    );
}