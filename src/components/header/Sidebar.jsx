import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideBar = (props) => {
    return ( 
        <Drawer 

            anchor='right'
            open = {props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
            {['Event Starts In', 'Venue Info', 'Highlights', 'Pricing', 'Info'].map((text, index) => (
                <ListItem button key={text}>
                    
                    {text}
                </ListItem>
        ))}

            </List>
        </Drawer>
     );
}
 



export default SideBar;