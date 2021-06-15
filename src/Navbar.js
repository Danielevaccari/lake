import { React, useState } from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText, makeStyles, Badge } from '@material-ui/core';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import MenuSharp from '@material-ui/icons/MenuSharp';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    listI: {
        width: 300
    }
})

function Navbar({ totalItems }) {

    const classes = useStyles()

    const [state, setState] = useState(false)

    const changeState = () => {
        setState(prevState => !prevState)
    }

    return (
        <>
            <div className='nav'>
                <div className='left'>
                    Clothing INC
                </div>

                <div className='right'>
                    <div className='links'>
                        <input className='searchInput' placeholder='Search...'></input>
                        <div className='link'>
                            <Badge badgeContent={totalItems} color='primary'>
                                <ShoppingCartIcon component={Link} to='/cart' style={{ color: 'white' }} />
                            </Badge>
                        </div>
                        <a className='link' href='/#'><AccountBoxSharpIcon style={{ color: 'white' }} /></a>
                    </div>
                </div>
            </div>
            {/*Second part of nav-bar*/}
            <div className='categories'>
                <Button onClick={changeState} className='mButton' disableRipple={true}>
                    <MenuSharp style={{ color: 'white', fontSize: '30px' }} />
                </Button>
                <div className='category'>
                    {/*Lisää tähän jotain jos haluat*/}
                </div>
            </div>
            {/*Drawer*/}
            <div>
                <Drawer anchor={'left'} open={state} onClose={changeState}>
                    <div onClick={changeState}>
                        <List className={classes.listI}>
                            <ListItem divider disableRipple={true} button>
                                <ListItemText>
                                    something
                            </ListItemText>
                            </ListItem>

                            <ListItem divider disableRipple={true} button>
                                <PhotoAlbumIcon />
                                <ListItemText>
                                    <div>Lookbook</div>
                                </ListItemText>
                            </ListItem>

                            <ListItem divider disableRipple={true} button>
                                <ListItemText>
                                    About us
                            </ListItemText>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        </>
    )
}

export default Navbar
