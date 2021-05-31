import React, { Component } from 'react';
import  "./Navbar.css";
import Grid from '@material-ui/core/Grid';
import fblogo from '../../images/logo.png';
import home from '../../images/home.svg';
import page from '../../images/pages.svg';
import watch from '../../images/watch.svg';   
import group from '../../images/groups.svg';
import market from '../../images/market.svg';
import { Avatar } from '@material-ui/core';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  } 
    }
    render() { 
        return (
            <div >
              <Grid container className="navbar_main">
                        <Grid item xs ={3}>
                                    <div className = "navbar_left">
                                    <img className = "navbar_logo" src={fblogo} width = "40px" ></img> 
                                    <input className ="navbar_search" type = "Text" placeholder ="Search facebook"/>
                                    </div>
                        </Grid> 


                            <Grid item xs ={6}>
                                <div className = "navbar_Container">
                                <div className = "navbar_tabs active"> <img  src ={home} height ="35px" width ="35px"></img>  </div>
                                <div className = "navbar_tabs"> <img src ={page} height ="35px" width ="35px"></img>  </div>
                                <div className = "navbar_tabs"> <img  src ={watch} height ="35px" width ="35px"></img>  </div>
                                <div className = "navbar_tabs"> <img src ={market} height ="35px" width ="35px"></img>  </div>
                                <div className = "navbar_tabs"> <img  src ={group} height ="35px" width ="35px"></img>  </div>
                                </div>
                            </Grid>

 
                            <Grid item xs ={3}>
                                    <div className ="navbar_right">
                                        <di className ="navbar_righttab">
                                            <Avatar className="navbar_right_img" src =""/>
                                            <div className= "navbar_profilename"> Username</div>
                                        </di>
                                    </div>
                            </Grid> 

                  </Grid>  
            </div>
          ); 
    }
}
 
export default Navbar ;