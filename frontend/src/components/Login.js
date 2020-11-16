import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

function Login({ user: { username, mobileNumber, verificationCode, verificationSend }, setUser, sendSmsCode }) {
    function populateFilds(event, data) {
        setUser(draft => {
            draft[data.name] = data.value
        })
    }
    return (
        <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>Login into your account:</Header>

                <Form>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='UserName'
                            value={username}
                            onChange={(event, data) => populateFilds(event, data)}
                            name='username'
                        />
                        <Form.Input
                            fluid
                            icon='mobile alternate'
                            iconPosition='left'
                            placeholder='Mobile number'
                            value={mobileNumber}
                            onChange={(event, data) => populateFilds(event, data)}
                            name='mobileNumber'
                        />
                        { verificationSend && (
                            <Form.Input
                                fluid
                                icon='key'
                                iconPosition='left'
                                placeholder='Enter your code'
                                value={verificationCode}
                                onChange={(event, data) => populateFilds(event, data)}
                                name='verificationCode'
                            />
                        )}
                        <Button color='teal' fluid onClick={sendSmsCode}>
                            Login / Signup
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
}

export default Login;