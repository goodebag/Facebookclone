import React, { Component } from 'react';
import  "./Navbar.css";
import Grid from '@material-ui/core/Grid';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div >
              <Grid container>
                        <Grid item xs ={3}>
                            left
                            </Grid> 


                            <Grid item xs ={6}>
                            center
                            </Grid>


                            <Grid item xs ={3}>
                            right
                            </Grid> 

                  </Grid> 
            </div>
          );
    }
}
 
export default Navbar ;