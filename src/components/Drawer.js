import React from 'react'
import { Button, Divider, Drawer, Icon } from 'rsuite';
import { useMediaQuery, useModalState } from '../custom-hooks';

const Drawere = () => {

    const { isOpen, close, open } = useModalState();
    const isMobile = useMediaQuery('(max-width: 992px)');

    return (
        <>
            <Button onClick={open} style={{ backgroundColor: 'transparent' }}>
                <Icon icon="bars" style={{ fontSize: 20, color: 'black' }} />
            </Button>
            <Drawer full={isMobile} show={isOpen} onHide={close} placement="left" style={{ width: 250 }}>
                <Drawer.Body>
                    <Button block style={{ backgroundColor: 'transparent', fontSize: 19, textAlign: 'left' }}>
                        <Icon icon="home" style={{ fontSize: 24, marginRight: 10 }} />
                  Wedding Services
                </Button>
                    <Button block style={{ backgroundColor: 'transparent', fontSize: 19, textAlign: 'left' }}>
                        <Icon icon="certificate" style={{ fontSize: 24, marginRight: 10 }} />
                  Makeup Courses
                </Button>
                    <Button block style={{ backgroundColor: 'transparent', fontSize: 19, textAlign: 'left' }}>
                        <Icon icon="sign-in" style={{ fontSize: 24, marginRight: 10 }} />
                  Vendor Login
                </Button>
                </Drawer.Body>
                <Drawer.Footer>
                    <Divider />
                    <Button block style={{ backgroundColor: 'transparent', fontSize: 19, textAlign: 'left' }}>
                        <Icon icon="envelope-o" style={{ fontSize: 19, marginRight: 10 }} />
                  contact@feba.co.in
                </Button>
                    <Button block style={{ backgroundColor: 'transparent', fontSize: 19, textAlign: 'left' }}>
                        <Icon icon="whatsapp" style={{ fontSize: 19, marginRight: 10 }} />
                  +91 7304879310
                </Button>
                    <Button block style={{ backgroundColor: 'transparent', fontSize: 19, textAlign: 'left' }}>
                        <Icon icon="instagram" style={{ fontSize: 19, marginRight: 10 }} />
                  @feba_ _
                </Button>
                </Drawer.Footer>
            </Drawer>
        </>
    )
}

export default Drawere
