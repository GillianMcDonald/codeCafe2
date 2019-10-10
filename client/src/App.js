import React, { Component } from 'react'
import './App.css';
import Layout from './layout'
import CoffeeTypes from './CoffeeTypes';

const coffees =
[
 {
   type: "Latte",
   description: "Also called a café latte, this drink is a single shot of espresso with three parts steamed milk. It is usually bigger than a cappuccino because it contains more milk and can be ordered with flavouring – usually vanilla, hazelnut or caramel.",
   size: ["Small", "Medium", "Large"],
   caffeine:["Caffeine", "Decaf"],
   milkType: ["Full", "Semi", "Goat", "Soya"]
 },
 {
   type: "Cappuccino",
   description: "Equal parts espresso, steamed milk and foamed milk. Usually served straight up without any flavoring, but the foam is often sprinkled with powdered chocolate or cinnamon.",
   size: ["Small", "Medium", "Large"],
   caffeine:["Caffeine", "Decaf"],
   milkType: ["Full", "Semi", "Goat", "Soya"]
 },
 {
   type: "Americano",
   description: "A single shot of espresso added to a cup of hot water. Many like to drink this as they would a regular brewed coffee with milk and sugar. Purists say to keep milk to a minimum to get the most flavor from the espresso.",
   size: ["Small(£2.20)", "Medium", "Large"],
   caffeine:["Caffeine", "Decaf"],
   milkType: ["Full", "Semi", "Goat", "Soya"]
 },
 {
   type: "Mocha",
   description:"Also called a café mocha, this drink is widely varied depending on the coffeehouse making it. Our Mocha is espresso, steamed milk, chocolate syrup and whipped cream.",
   size: ["Small", "Medium", "Large"],
   caffeine:["Caffeine", "Decaf"],
   milkType: ["Full", "Semi", "Goat", "Soya"]
 },
 {
   type: "Espresso",
   description: "A strong, concentrated coffee made by forcing pressurized water through finely ground coffee beans. Served in a small cup called a demitasse, and meant to be taken quickly, like a shot.",
   size: ["Small", "Medium", "Large"],
   caffeine:["Caffeine", "Decaf"],
   milkType: ["Full", "Semi", "Goat", "Soya"]
 },
 {
   type: "Macchiato",
   description: "Espresso with either steamed milk or foamed milk (depending on the coffeehouse), and flavoring. The most common combination is the caramel macchiato – espresso, vanilla, steamed milk, drizzled with caramel.",
   size: ["Small", "Medium", "Large"],
   caffeine:["Caffeine", "Decaf"],
   milkType: ["Full", "Semi", "Goat", "Soya"]
 },
]

// function App () {
//  return (
   
// )
// }


export default class App extends Component {

  render() {
    return (
      <div>
      <Layout />
       <div className = "sixCoffees">
         <div id= "Latte">
            <CoffeeTypes data={coffees[0]}/>
         </div> 
             <div id= "Cappuccino">
         <CoffeeTypes data={coffees[1]}/>
             </div><div  id= "Americano">
         <CoffeeTypes data={coffees[2]}/>
             </div><div id= "Mocha">
         <CoffeeTypes data={coffees[3]}/>
             </div><div id= "Espresso">
         <CoffeeTypes data={coffees[4]}/>
             </div><div id= "Macchiato">
         <CoffeeTypes data={coffees[5]}/>
           </div>
        
        
      

    </div>
    </div>
    )
  }
}




