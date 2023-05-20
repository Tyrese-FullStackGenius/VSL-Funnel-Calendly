import React, { useState } from 'react';
import { Row, Col, Button, Typography } from 'antd';
import { Player } from 'video-react';
import { PopupModal, useCalendlyEventListener } from 'react-calendly';
import { CALENDLY_LINK } from '../const/constants';
import LOGO from '../assets/logo.png';
import 'video-react/dist/video-react.css';

function Content(props) {
    const [successFlag, setSuccessFlag] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    useCalendlyEventListener({
        onProfilePageViewed: () => console.log("onProfilePageViewed"),
        onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => {
            console.log(e.data.payload);
            setSuccessFlag(true);
        },
    });

    return (
        <Row style={{ height: '100vh', width: '100vw', background: '#F2F3F7', overflowY: 'auto' }}>
            <Col md={{ span: 16, offset: 4 }} sm={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                <div style={{ textAlign: 'center' }}>
                    <img alt='' src={LOGO} style={{ margin: '12px 0' }} />
                </div>

                {
                    successFlag ? <Typography.Title level={3}>Thanks you!</Typography.Title> : <></>
                }

                <Player>
                    <source src='/assets/video.mp4' controls autoPlay />
                </Player>

                <Row>
                    <Col md={{ span: 10, offset: 0 }} sm={{ span: 11, offset: 0 }} xs={{ span: 11, offset: 0 }}>
                        <Button
                            type='primary'
                            style={{ background: '#D22DE3', color: '#FFFFFF', margin: '8px 0', padding: '12px', height: '48px', width: '100%' }}
                            onClick={() => props.backAction()}
                        >
                            BACK
                        </Button>
                    </Col>
                    <Col md={{ span: 10, offset: 4 }} sm={{ span: 11, offset: 2 }} xs={{ span: 11, offset: 2 }}>
                        <Button
                            type='primary'
                            style={{ background: '#D22DE3', color: '#FFFFFF', margin: '8px 0', padding: '12px', height: '48px', width: '100%' }}
                            onClick={() => setModalOpen(true)}
                        >
                            APPLY NOW
                        </Button>

                        <PopupModal
                            url={CALENDLY_LINK}
                            open={isModalOpen}
                            rootElement={document.getElementById("root")}
                            onClose={() => setModalOpen(false)}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Content;