import React from 'react'
import {
  Box,
  Form,
  Input,
  InputLabel,
  FormControl,
  Button
} from '@material-ui/core'

const EditUserForm = props => {
  return (
    <Box>
      <Form onSubmit={props.handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="name"> Name: </InputLabel>
          <Input
            name="name"
            type="text"
            onChange={props.handleChange}
            value={props.name}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email"> Email: </InputLabel>
          <Input
            name="email"
            type="text"
            onChange={props.handleChange}
            value={props.email}
          />
        </FormControl>
        <Button type="submit"> Submit Changes </Button>
      </Form>
    </Box>
  )
}

export default EditUserForm
