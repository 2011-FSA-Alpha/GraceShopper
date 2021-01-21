import React from 'react'
import {
  Box,
  FormGroup,
  Input,
  InputLabel,
  FormControl,
  Button
} from '@material-ui/core'

const EditUserForm = props => {
  return (
    <Box>
      <FormGroup onSubmit={props.handleSubmit}>
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
        <Button onSubmit={props.handleSubmit} type="submit">
          {' '}
          Submit Changes{' '}
        </Button>
      </FormGroup>
    </Box>
  )
}

export default EditUserForm
