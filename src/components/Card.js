/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useRef, useState } from 'react'
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Icon, Modal, Panel, Schema } from 'rsuite';
import Tag from 'rsuite/lib/Tag/Tag';
import { useMediaQuery, useModalState } from '../custom-hooks';

const { StringType } = Schema.Types;

const model = Schema.Model({
    name: StringType().isRequired('Chat name is required'),
    description: StringType().isRequired('Description is required')
})
const INITIAL_VALUE = {
    name: '',
    email: '',
    dob: ''
}

const Card = ({ image, city, price, rating, name, type }) => {

    const { isOpen, open, close } = useModalState();
    const [formValue, setFormValue] = useState(INITIAL_VALUE);
    const isMobile = useMediaQuery('(max-width: 992px)');

    // const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();
    const onFormChange = useCallback((value) => {
        setFormValue(value);
    }, [])

    const onSubmit = (ev) => {
        if (ev.type === 'click') {
            setFormValue(INITIAL_VALUE)
            Alert.success('Data submited successfully', 4000);
        }
    }

    const [size, setSize] = useState('');
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
                            <FormControl name="name" placeholder="Enter name" />
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl name="email" type="email" placeholder="Enter email" />
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Date Of Birth</ControlLabel>
                            <FormControl name="dob" type="date" />
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button appearance="primary" onClick={onSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        )


}

export default Card


