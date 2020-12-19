import React, { useCallback, useRef, useState } from 'react'
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Icon, Modal, Panel, Schema } from 'rsuite';
import Tag from 'rsuite/lib/Tag/Tag';
import { useModalState } from '../custom-hooks';

const {StringType} = Schema.Types;

const model = Schema.Model({
    name:StringType().isRequired('Chat name is required'),
    description:StringType().isRequired('Description is required')
})
const INITIAL_VALUE = {
    name:'',
    description:''
}

const Card = ({image,city,price,rating,name,type}) => {

    const {isOpen, open, close} = useModalState();
    const [formValue, setFormValue] = useState(INITIAL_VALUE);
    // const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();
    const onFormChange = useCallback((value) => {   
      setFormValue(value);
    },[])

    const onSubmit = (ev) => {
        if(ev.type ==='click'){
            Alert.success('Data submited successfully', 4000);
        }
    }

    return(
    <div className="mt-3">
      <div>
        <Panel bodyFill style={{display: 'inline-block' , cursor:"pointer",position:'relative'}} onClick={open} >
          <img src={image} className="image"/>
          <Icon icon="gittip" size="3x" style={{color:'#FFFFFFE6',position:'absolute', right:20, top:10}}/>
          <div className="mt-3">
            <Tag style={{backgroundColor:'#BE2364',color:'#FFFFFF'}}>SUPER VENDOR</Tag>
            <span style={{fontWeight: 'bold',display:'inline-block',width:75}} className="ml-2"> {city}</span>
            <Icon icon="star" style={{color:'#BE2364'}} className="justify-content-end" /> {rating}
          </div>
          <div>
            <p style={{color:"#444444", fontSize:25,fontWeight:'lighter'}}>{name}</p>
          </div>
          <div className="mt-1">
            <span style={{fontWeight:'bold'}}>Rs.{price} </span>  / {type}
          </div>
        </Panel>
      </div>
    <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>New Chat Room</Modal.Title>
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
                            <FormControl name="email" type="email" placeholder="Enter email"/>
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>DOB</ControlLabel>
                            <FormControl name="datePicker" type="date"/>
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button block appearance="primary" onClick={onSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
          </div>)
            
    
    }

export default Card


