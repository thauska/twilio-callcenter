import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

function Login() {
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
                        />
                        <Form.Input
                            fluid
                            icon='mobile alternate'
                            iconPosition='left'
                            placeHolder='Mobile number'
                        />
                        <Button color='teal' fluid>Login / Signup</Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
}

export default Login;