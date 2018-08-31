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
        this.resetForm = this.resetForm.bind(this)
        this.baseState = this.state
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
    resetForm = () => {
        this.setState(this.baseState)
      }



    render() { 
        // const {imageInput} = this.state
        
        return ( 

             
            <div className = 'form'>
                {/* <form> */}
                <input onChange={this.handleImageInput} type="text" name ='Image URL' value = {this.state.imageInput} placeholder='Image...' />
                
                <input onChange= {this.handleNameInput} type="text" name ='Product Name' value={this.state.nameInput} placeholder='Product Name...' />

                <input onChange= {this.handlePriceInput} type="number" name ='Price' value={this.state.priceInput} placeholder='Price...' />
               
                <button>Add</button>
                <button onClick = {this.resetForm}>Cancel</button>
                

                {/* <button onClick =  >Cancel</button> */}
                {/* </form> */}
                
            </div> 

         )
    }
}
 
export default Form;