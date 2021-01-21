import React from 'react'
import {Box, Paper, Typography} from '@material-ui/core'

const Footer = () => {
  return (
    <Box
      paddingTop="30px"
      paddingBottom="20px"
      paddingLeft="20px"
      paddingRight="20px"
    >
      <Paper
        style={{
          height: '100px',
          width: '100%',
          backgroundColor: '#333333',
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h6" color="primary">
          wallpaper.io
        </Typography>
      </Paper>
    </Box>
  )
}

export default Footer
