import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

function Login({ user:{username, mobileNumber}, setUser, sendSmsCode }) {
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
                            placeHolder='UserName'
                            value={username}
                            onChange={(event, data) => populateFilds(event, data)}
                            name='username'
                        />
                        <Form.Input
                            fluid
                            icon='mobile alternate'
                            iconPosition='left'
                            placeHolder='Mobile number'
                            value={mobileNumber}
                            onChange={(event, data) => populateFilds(event, data)}
                            name='mobileNumber'
                        />
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