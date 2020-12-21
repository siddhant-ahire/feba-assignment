import React, { useCallback, useRef, useState } from 'react'
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Icon, Modal, Panel, Schema } from 'rsuite';
import Tag from 'rsuite/lib/Tag/Tag';
import { useMediaQuery, useModalState } from '../custom-hooks';

const {StringType, DateType} = Schema.Types;
const model = Schema.Model({
    name: StringType().isRequired('This field is required.'),
    email:StringType()
        .isEmail('Please enter a valid email address.')
        .isRequired('This field is required'),
    dob:DateType().isRequired('please select date')
});

const INITIAL_VALUE = {
    name: '',
    email: '',
    dob: ''
}

const Card = ({ image, city, price, rating, name, type }) => {

    const { isOpen, open, close } = useModalState();
    const [formValue, setFormValue] = useState(INITIAL_VALUE);
    const isMobile = useMediaQuery('(max-width: 992px)');

    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();
    const onFormChange = useCallback((value) => {
        setFormValue(value);
    }, [])


    
    const API_BASE_URL = 'https://feba-assignment-api.herokuapp.com/email';
    const onSubmit = async() => {
        if(!formRef.current.check()){
            return;
        }
        setIsLoading(true)
            const request = {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formValue)
            }
            const response = await fetch(`${API_BASE_URL}`,request)
            Promise.resolve(response).then(resp => resp.json())
            .then((res) => {
                if(!res.success){
                    Alert.error(`Error: Data not submited`, 4000)
                }
                Alert.success(`data submited successfully`,4000)})
            .catch((err) => Alert.error(`Error: ${err}`, 4000));
            setFormValue(INITIAL_VALUE)
            setIsLoading(false);
    }

    const [size, setSize] = useState('md');
    const cardSize = () => {
        if (!isMobile) {
            setSize('md')
            open();
            return
        }
        setSize('xs')
        open();
    }


    return (
        <div className="componentClass" style={{ display: 'flex', justifyContent: 'center', height: 360 }}>
            <Panel bodyFill style={{ display: 'inline-block', cursor: "pointer", position: 'relative', maxWidth: 449 }} onClick={cardSize} >
                <img src={image} className="image" />
                <Icon icon="gittip" size="3x" style={{ color: '#FFFFFFE6', position: 'absolute', right: 20, top: 10 }} />
                <div className="ml-1">
                    <div className="mt-3">
                        <Tag style={{ backgroundColor: '#BE2364', color: '#FFFFFF' }}>SUPER VENDOR</Tag>
                        <span style={{ fontWeight: 700, fontSize: 14, display: 'inline-block', width: 75, letterSpacing: 0.32 }} className="ml-2"> {city}</span>
                        <span style={{ float: 'right', overflow: 'auto', marginRight: 10 }}>
                            <Icon icon="star" style={{ color: '#BE2364' }} /> {rating}
                        </span>
                    </div>
                    <div>
                        <p style={{ fontSize: 21.328, lineHeight: 1.5 }}>{name}</p>
                    </div>
                    <div className="mt-2">
                        <span style={{ fontWeight: 'bold' }}>Rs.{price} </span>  / {type}
                    </div>
                </div>
            </Panel>
            <Modal size={size} show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>Fill Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        fluid
                        onChange={onFormChange}
                        formValue={formValue}
                        model={model}
                        ref={formRef}
                    >
                        <FormGroup>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl name="name" placeholder="Enter name"/>
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl name="email" type="email" placeholder="Enter email" />
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Date Of Birth</ControlLabel>
                            <FormControl name="dob" type="date"/>
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button block appearance="primary" onClick={onSubmit} disabled={isLoading}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        )


}

export default Card


