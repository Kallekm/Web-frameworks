
import React from 'react'

class Admin extends React.Component {

    constructor(props){
        super(props);
    this.state = {
      itemSearchString: "",
      newProductName: "",
      newProductAuthor: "",
      newProductPrice: "",
      newProductRating: "",
      newProductType: "",
      newProductShipping: ""
    }
 }
 addNewProduct = () => {
    this.props.addNewProduct(this.state.newProductName,
      
        this.state.newProductAuthor,
        this.state.newProductPrice,
        this.state.newProductRating,
        this.state.newProductFormat,
        this.state.newProductShipping);
       
}
deleteItem = (itemId) =>{
    console.log('clicked' + itemId );
    this.props.deleteProduct(itemId);
}
    
    
    render(){

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
      <button onClick = {this.addNewProduct}>Add item</button>
      </div>
      
      <button onClick= {this.props.disableAdminMode}>Disable admin mode</button>
      
         <h1> Product ItemList</h1>
          {this.props.items.map((item, index) => <div key = {index}><button onClick = {() => this.deleteItem(item.id)}>x</button> {item.name}, {item.author}, $ {item.price}</div>)}
      
      </div>
      

        )
    }
}
    export default Admin;   

