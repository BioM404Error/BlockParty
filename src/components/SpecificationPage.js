import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function SpecificationPage(props){
    const [startTime, setStartTime] = useState(undefined)
    console.log( typeof startTime, startTime)

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
                type="time"
                name="endTime"
                min={startTime}
                placeholder="End Time" 
            />
        </Form.Group>
        <Form.Group controlId="dob">
            <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" name="date" placeholder="Party Date" />
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
                <Form.Control plaintext readOnly />
                </Col>
            </Form.Group>
        </Form>
        <Button variant="seconday">Back</Button>
        <Button variant="primary">Next</Button>
        </div>
    );
}