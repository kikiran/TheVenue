import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import  { scroller }  from "react-scroll";


const SideBar = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        })
    }

    return ( 
        <Drawer 

            anchor='right'
            open = {props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
            {['Event Starts In', 'Venue Info', 'Highlights', 'Pricing', 'Info'].map((text, index) => (
                <ListItem button key={text} onClick={() => scrollToElement(`${text}`)}>
                    
                    {text}
                </ListItem>
        ))}

            </List>
        </Drawer>
     );
}
 



export default SideBar;