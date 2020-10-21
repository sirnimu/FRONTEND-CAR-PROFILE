import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

const LoginOrRegister = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Naudotojo vardas'
            placeholder='vardas...'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Slaptažodis'
            placeholder='slaptažodis...'
            type='password'
          />

          <Button content='Prisijungti' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Registruotis' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Arba</Divider>
  </Segment>
)

export default LoginOrRegister
