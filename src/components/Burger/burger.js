import React from 'react';
import '../Burger/burger.css';
import BurgerItems from './burgerItems/burgerItems';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])]
            .map((_, i) => {
                return <BurgerItems key = {igkey + i} type ={igkey} />;
            });
        })

        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
        if(transformedIngredients.length === 0){
            transformedIngredients=<p> Please Start Adding Ingredients</p>
        }

        console.log(transformedIngredients);
    return(
        <div className="Burger">
            <BurgerItems  type="breadtop" />
            {transformedIngredients}
            <BurgerItems  type="breadbottom" />
        </div>
    );
};
export default burger;