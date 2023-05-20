import React from 'react';
import { Row, Col, Image, Button } from 'antd';
import { InlineWidget } from 'react-calendly';
import LOGO from '../assets/logo.png';
import { CALENDLY_LINK } from '../const/constants';

function Schedule(props) {
    return (
        <Row style={{ width: '100vw', background: '#F2F3F7', overflowY: 'auto' }}>
            <Col md={{ span: 16, offset: 4 }} sm={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                <div style={{ textAlign: 'center' }}>
                    <Image src={LOGO} style={{ margin: '12px 0' }} />
                </div>

                <InlineWidget
                    url={CALENDLY_LINK}
                    prefill={{
                        email: props.email,
                        name: props.username,
                    }}
                />

                <Row>
                    <Col md={{ span: 10, offset: 7 }} sm={{ span: 12, offset: 6 }} xs={{ span: 12, offset: 6 }}>
                        <Button
                            type='primary'
                            style={{ background: '#D22DE3', color: '#FFFFFF', margin: '8px 0', padding: '12px', height: '48px', width: '100%' }}
                            onClick={() => props.backAction()}
                        >
                            BACK
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Schedule;