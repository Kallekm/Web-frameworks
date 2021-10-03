//import data from './data.json'
import React from 'react';
import ShowSite from './components/ShowSite';
import Admin from './components/AdminClass';
import axios from 'axios';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      itemSearchString: "",
      AdminActive : false,


    }
  }
  

  componentDidMount() {
    console.log("mounted");
    axios.get('http://localhost:4000/products')
    .then((response) => {
      console.log(response)
      this.setState({items: response.data.items});
    })
    .catch(err => console.log(err))
  }

  onSearchChange = (event) => {
    console.log("keyboard works");
    console.log(event.target.value);
    this.setState({itemSearchString: event.target.value});
    
  }


  addNewProduct = (name,author,price,rating,format,delivery,) => {
    let newProducts = [...this.state.items]
      newProducts.push({
      id:newProducts.length + 1,
      name: name,
      author: author,
      price: price,
      rating: rating,
      format: format,
      delivery: delivery
    })         
      this.setState({
      items: newProducts
    })
   
    
  }
 

  deleteProduct = itemId => this.setState({items:this.state.items.filter(item =>item.id !== itemId)})

  render()
  {
    console.log("render");
    return(
      <>
      {this.state.AdminActive ? 
       <Admin disableAdminMode = {() => this.setState({AdminActive:false}) }
       addNewProduct={this.addNewProduct}
       items={this.state.items}
       deleteProduct={this.deleteProduct}/> :
       <>
       <div> 
       Search <input type="text" onChange={this.onSearchChange}value={this.state.itemSearchString}/>
       </div>
       <ShowSite items={this.state.items.filter((item)=> item.name.toLowerCase().includes(this.state.itemSearchString.toLowerCase()))}
       />
       <button onClick={() => this.setState({AdminActive: !this.state.AdminActive})}>Admin mode</button>
    </>
    }
      </>
    )
  }
}
export default App;
