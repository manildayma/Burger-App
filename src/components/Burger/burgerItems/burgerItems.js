import React, { Component } from 'react';
import './burgerItems.css';
import PropTypes from 'prop-types';

class BurgerItems extends Component {
    
    render() { 
        let item=null;
        switch(this.props.type){
            case('breadtop'):
                item = ( 
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            case('breadbottom'):
                item = (
                    <div className="BreadBottom"></div>
                );
                break;
            case('meat'):
                    item = <div className="Meat"></div>
                    break;
            case('cheese'):
                    item = <div className="Cheese"></div>
                    break;
            case('salad'):
                    item = <div className="Salad"></div>
                    break;
            case('bacon'):
                    item = <div className="Bacon"></div>
                    break;   
            default: 
                item=null;
        }

        return item;    
    }
}
 
BurgerItems.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerItems;
