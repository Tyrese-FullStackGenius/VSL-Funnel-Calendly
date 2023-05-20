import React from 'react';
import { Row, Col, Button } from 'antd';
import { Player } from 'video-react';
import LOGO from '../assets/logo.png';
import 'video-react/dist/video-react.css';

function Content(props) {
    return (
        <Row style={{ height: '100vh', width: '100vw', background: '#F2F3F7', overflowY: 'auto' }}>
            <Col md={{ span: 16, offset: 4 }} sm={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                <div style={{ textAlign: 'center' }}>
                    <img alt='' src={LOGO} style={{ margin: '12px 0' }} />
                </div>

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
                            onClick={() => props.scheduleAction()}
                        >
                            APPLY NOW
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Content;