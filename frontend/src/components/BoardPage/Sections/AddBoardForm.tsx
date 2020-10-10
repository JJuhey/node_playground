import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const AddBoardForm: React.FC = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <Form>
        <Form.Group>
          <Form.Input fluid label='Title' width={12}></Form.Input>
          <Form.Input fluid label='Writer' width={2}></Form.Input>
          <Form.Input fluid label='Date' width={2}></Form.Input>
        </Form.Group>
        <Form.TextArea label='Content' placeholder='Content' />
        <div style={{ textAlign: 'right' }}>
          <Button color='blue'>SUBMIT</Button>
          <Button>CANCEL</Button>
        </div>
      </Form>
    </div>
  )
}

export default AddBoardForm
