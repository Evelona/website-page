import React from 'react'
import { Button } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledBtn = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '44px',
        padding: '0 25 px',
        boxSizing: 'border-box',
        borderRadius: 0,
        background: '#4f25f7',
        color: '#fff',
        transform: 'none',
        boxShadow: '6px 6px 0 0 #c7d8ed',
        transition: 'background .3s, border-coloe: .3s, color .3s',
        '&:hover': {
            background: '#4f25f7'
        },
    },
    label: {
        textTransform: 'capitalize',
    }
})(Button)

function CustomButton({text}) {
    return (
        <StyledBtn variant='contained'>{text}</StyledBtn>
    )
}

export default CustomButton
