import React, { Component } from 'react';
import Product from '../Product/Product'


class Dashboard extends Component {
    constructor(props) {
        super(props);
    //     this.state = {  }
    // }







    }
    render() { 
        const {inventory} = this.props
        let inventoryDisplay = inventory.map((e, i) => {
            
                
              
        return ( 
            <div>

                <div>
                
                {inventoryDisplay}
                <Product/>
                </div>

            </div>
            
         )
     });

        
    }
}
 
export default Dashboard;