import React, { Component } from 'react';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        imageInput: '',
          nameInput: '',
          priceInput: ''
         }
         this.handleImageInput = this.handleImageInput.bind(this)
         this.handleNameInput = this.handleNameInput.bind(this)
         this.handlePriceInput = this.handlePriceInput.bind(this)
        
    }



    handleImageInput(e) {
        this.setState({
            imageInput: e.target.value
        })
    }
    handleNameInput(e) {
        this.setState({
            nameInput: e.target.value
        })
    }
    handlePriceInput(e) {
        this.setState({
            priceInput: e.target.value
        })
    }
    handleCancel () {

    }



    render() { 
        return ( 

             
            <div className = 'form'>
                
                <input onChange={this.handleImageInput} type="text" name ='Image URL' value={this.state.imageInput} placeholder='Image...' />
                
                <input onChange= {this.handleNameInput} type="text" name ='Product Name' value={this.state.nameInput} placeholder='Product Name...' />

                <input onChange= {this.handlePriceInput} type="number" name ='Price' value={this.state.priceInput} placeholder='Price...' />
                
                <button >Add</button> 
                
                <button onClick =  >Cancel</button>
     
                
            </div> 

         )
    }
}
 
export default Form;