import React from 'react';
import { Typography, Button, Row, Col, Input, List, Image } from 'antd';
import LOGO from '../assets/logo.png';
import PIC1 from '../assets/pic1.png';
import PIC2 from '../assets/pic2.png';

function Home(props) {
    return (
        <Row style={{ height: '100vh', width: '100vw', background: '#F2F3F7', overflowY: 'auto' }}>
            <Col md={{ span: 16, offset: 4 }} sm={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                <div style={{ textAlign: 'center' }}>
                    <Image src={LOGO} style={{ margin: '12px 0' }} />
                    <Typography.Title level={2} style={{ margin: '12px 0', padding: '12px', background: '#D22DE3', borderRadius: '10px', color: '#FFFFFF' }}>Free Training Reveals:</Typography.Title>
                    <Typography.Title level={2} style={{ margin: '12px 0', padding: '0' }}>How you can become an elite media buyer, and land a remote job making up to €100k/year in less than 60 days.</Typography.Title>
                    <Typography.Title level={3} style={{ margin: '12px 0', padding: '0' }}>(No Experience Required)</Typography.Title>
                </div>

                <Row>
                    <Col md={{ span: 10, offset: 0 }} sm={{ span: 11, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                        <div>
                            <Image src={PIC1} style={{ width: '100%' }} />
                        </div>
                        <List
                            dataSource={[
                                '€22,000- €35,000/yr',
                                'No growth potential',
                                'Replaceable by ChatGPT'
                            ]}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                    </Col>
                    <Col md={{ span: 10, offset: 4 }} sm={{ span: 11, offset: 2 }} xs={{ span: 24, offset: 0 }}>
                        <div>
                            <Image src={PIC2} style={{ width: '100%' }} />
                        </div>
                        <List
                            dataSource={[
                                '6 Figure Income',
                                'Rapidly-Growing Industry',
                                'Freedom & Remote'
                            ]}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 16, offset: 4 }} sm={{ span: 20, offset: 2 }} xs={{ span: 24, offset: 0 }}>
                        <Input
                            placeholder='Your Name'
                            value={props.username}
                            onChange={(e => props.setUsername(e.target.value))}
                            style={{ margin: '8px 0', padding: '12px' }}
                        />
                        <Input
                            placeholder='Your Email'
                            value={props.email}
                            onChange={(e => props.setEmail(e.target.value))}
                            style={{ margin: '8px 0', padding: '12px' }}
                        />
                        <Button
                            type='primary'
                            style={{ background: '#D22DE3', color: '#FFFFFF', margin: '8px 0', padding: '12px', height: '48px', width: '100%' }}
                            onClick={() => props.goAction()}
                        >
                            GET ACCESS
                        </Button>
                        <List
                            dataSource={[
                                'How to get into a rapidly-growing industry while demand is exploding, and earn 6 figures a year',
                                'None of the stress of starting and running your own business: cold calling, hiring, managing a team, cashflow, and worst of all; taxes',
                                'Discover a career that allows you to work remotely from anywhere in the world'
                            ]}
                            renderItem={(item) => <List.Item><span style={{ color: '#D22DE3' }}>✔</span>{item}</List.Item>}
                        />
                    </Col>
                </Row>

                <div style={{ textAlign: 'center' }}>
                    <Image src={LOGO} style={{ margin: '12px 0' }} />
                    <Typography.Title level={4} style={{ margin: '12px 0', padding: '0' }}>privacy policy | terms of service</Typography.Title>
                </div>
            </Col>
        </Row>
    )
}

export default Home;