import React, {useState} from 'react'

export default function Admin(props) {

    const[ newProductName, setnewproductName] = useState("");
    

     const addNewProduct = () => {
         this.props.addNewProduct(this.state.newProductName,this.state.newProductAuthor,this.state.newProductPrice,this.state.newProductRating,this.state.newProductFormat,this.state.newProductShipping);

        console.log('not working');
    }

    return (
        <div>
            <div>
        Add new item
      </div>
      <div>
        Name <input type = "text" onChange={ (event) => this.setState({newProductName: event.target.value})} />
      </div>
      <div>
        Author <input type = "text"  onChange={ (event) => this.setState({newProductAuthor: event.target.value})}/>
      </div>
      <div>
        Price <input type = "text"  onChange={ (event) => this.setState({newProductPrice: event.target.value})}/>
      </div>
      <div>
        Rating <input type = "text"  onChange={ (event) => this.setState({newProductRating: event.target.value})}/>
      </div>
      <div>
        Format <input type = "text"  onChange={ (event) => this.setState({newProductFormat: event.target.value})}/>
      </div>
      <div>
        Shipping <input type = "text"  onChange={ (event) => this.setState({newProductShipping: event.target.value})}/>
      </div> 
      <div>
      <button onClick = {addNewProduct}>Add item</button>
      </div>
      <button onClick= {props.disableAdminMode}>Disable admin mode</button>
        </div>
    )
}
