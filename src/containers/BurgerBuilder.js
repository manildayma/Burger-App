import React, {Component} from 'react';
import Burger from '../components/Burger/burger';
import Aux from '../hoc/aux';
import BuildControls from '../components/Burger/BuildControls/buildControls';


const ingredient_price={
    salad: 15.25,
    cheese: 15.75,
    meat: 35.50,
    bacon: 25.75
};


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 20
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = ingredient_price[type];
        const oldPrice = this.state.totalPrice;
        const newPrice=oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, 
            ingredients: updatedIngredients
        });
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount<=0)
        return;
        
        const updatedCount = oldCount - 1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceDeduction = ingredient_price[type];
        const oldPrice = this.state.totalPrice;
        const newPrice=oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice, 
            ingredients: updatedIngredients
        });

    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <= 0
        }

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} 
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }

}
export default BurgerBuilder;