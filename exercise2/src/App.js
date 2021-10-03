import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';


class App extends React.Component {
  constructor(props)
  {
    
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
    
 
  }
  addSomeCarrots = () =>
  {
    this.setState({items:  [...this.state.items,{id: 5,value: "Carrots", qty: 5}]} );
  }
  addSomeStrawberries = () =>
  {
    this.setState({items:  [...this.state.items,{id: 6,value: "Strawberries", qty: 25}]} );
  }
  addSomeYogurth = () =>
  {
    this.setState({items:  [...this.state.items,{id: 7,value: "Yogurth", qty: 3}]} );
  }
  addSomeBeer = () =>
  {
    this.setState({items:  [...this.state.items,{id: 8,value: "Beer", qty: 12}]} );
  }

  addItems = (itemDescription, quantity) =>
  {
    return() => {
    const matchIndex = this.state.items.findIndex((element, index, array) => {
      if(element.value === itemDescription)
      {
        return true;
      }
      else
      {
        return false;
      }
    });
        
      
     if(matchIndex != -1) 
    {
      console.log("succes, element with index " + matchIndex + " is matchind for" + itemDescription);  
      let newItems =  [...this.state.items];
      newItems[matchIndex].qty += quantity;

      this.setState({items: newItems});
    }
    else
    {
    console.log("Item not yet in shopping list");
    this.setState({
      items:  
      [...this.state.items,
        {
          id: this.state.items.lenght + 1,
          value: itemDescription, qty: quantity
        }
      ]
    });
    }
  }
 }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick= { this.addItems('Carrots', 5)}>Add Carrots </button>
      <button onClick= { this.addItems('Strawberries', 15)}>Add Strawberries</button>
      <button onClick= { this.addItems('Yogurth', 2)}>Add Yogurth</button>
      <button onClick= { this.addItems('Beer', 12)}>Add Beer</button>
    </div>
  }
}

export default App;