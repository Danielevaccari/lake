import { React, useState } from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText, makeStyles, Badge, Typography } from '@material-ui/core';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import MenuSharp from '@material-ui/icons/MenuSharp';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'

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
                    <div className='leftLeft'>
                        <Typography style={{ textDecoration: 'none' }} component={Link} to='/' >
                            <div style={{ fontSize: '3vw' }} className='left'>
                                Clothing INC
                            </div>
                        </Typography>
                    </div>
                    <div>

                    </div>
                </div>

                <div className='right'>
                    <div className='rightLeft'>
                        <input className='searchInput' placeholder='Search...'></input>
                    </div>

                    <div className='rightRight'>
                        <Badge component={Link} to='/cart' badgeContent={totalItems} color='primary'>
                            <ShoppingCartIcon style={{ color: 'black' }} />
                        </Badge>
                        <AccountBoxSharpIcon component={Link} to='/profile' style={{ color: 'black' }} />
                    </div>
                </div>
            </div>
            {/*Second part of nav-bar*/}
            <div className='nav2'>
                <Button onClick={changeState} className='mButton' disableRipple={true}>
                    <MenuSharp style={{ color: 'black', fontSize: '30px' }} />
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
                            <ListItem component={Link} to='/lookbook' divider disableRipple={true} button>
                                <PhotoAlbumIcon />
                                <ListItemText>
                                    <div>Lookbook</div>
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
