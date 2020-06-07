import React from 'react';
import Button from '@material-ui/core/Button';
import BtnIcon from '../../resources/images/icons/ticket.png';

const ButtonComponent = ({label}) => {
    return ( 
        <Button variant="contained" color='primary' href='http://www.google.com' 
        style={{
            background: '#ffa800',
            color: 'white'
        }}
        >            <img src={BtnIcon} alt='img' className="iconImage" />

            {label}
        </Button>

     );
}
 
export default ButtonComponent;