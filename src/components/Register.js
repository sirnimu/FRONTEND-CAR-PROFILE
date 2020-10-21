import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../materials/car.svg';

const Register = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header
        as='h2'
        color='black'
        textAlign='center'
        style={{ textSpacing: '5px' }}
      >
        <Image src={logo} />
        Registracija:
      </Header>
      <Form size='large'>
        <Segment>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Vartotojo vardas'
          />
          <Form.Input
            fluid
            icon='mail'
            iconPosition='left'
            placeholder='El. paštas'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Slaptažodis'
            type='password'
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Pakartokite slaptažodį'
            type='password'
          />

          <Button color='blue' fluid size='large'>
            Registruotis
          </Button>
        </Segment>
      </Form>
      <Message>
        Jau turite paskyrą? <Link to='/login'>Prisijunkite</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Register;
