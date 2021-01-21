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
          {props.name.length === 0 ? <span>Field is required</span> : null}
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email"> Email: </InputLabel>
          <Input
            name="email"
            type="text"
            onChange={props.handleChange}
            value={props.email}
          />
          {props.email.length === 0 ? (
            <span>Field is required</span>
          ) : props.email.includes('@') || props.email.includes('.com') ? (
            <span>Must be a valid email!</span>
          ) : null}
        </FormControl>

        {props.email.length === 0 || props.name.length === 0 ? (
          <button type="submit" disabled={true}>
            {' '}
            Submit Changes{' '}
          </button>
        ) : (
          <button type="submit" disabled={false}>
            {' '}
            Submit Changes{' '}
          </button>
        )}

      </FormGroup>
    </Box>
  )
}

export default EditUserForm
