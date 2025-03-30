// import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";

export default function SimpleSticker() {
    return (
        <Box
            sx ={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    p: 2,
                    width: 200,
                    height: 200,
                    backgroundColor: '#36454F',
                    color: 'white',
                },
            }}
            >
            <Paper elevation={0} square={false}>Sample</Paper>
        </Box>
    )
}