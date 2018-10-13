import React from 'react';
import {INDEX_PATH, ORDER_PLACED} from "../constants/RouterConstants";

let total = 0;

class CartComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity: []
        };
        this.subValue = this.subValue.bind(this);
        this.addValue = this.addValue.bind(this);
    }

    subValue(i) {
        let quantityArray = this.state.quantity;
        quantityArray[i] = this.state.quantity[i] !== undefined && this.state.quantity[i] !== 0 ? this.state.quantity[i] - 1 : 0;
        this.setState({
            quantity: quantityArray
        })
    }

    addValue(i) {
        let quantityArray = this.state.quantity;
        quantityArray[i] = this.state.quantity[i] !== undefined ? this.state.quantity[i] + 1 : 1;
        this.setState({
            quantity: quantityArray
        })
    }


    render(){
        return(<div className={'container'}>
            <div className="row">
                <div className="col-12">
                    <h4 className='text-center mt-3'>Checkout</h4>
                </div>
            </div>
            <div className="row">
                {this.props.cartItems.map((item) => {
                    total = total + (parseInt(item.price, 10)*item.quantity);
                    return (<div className="col-12" key={item.id}>
                    <div className="row">
                        <div className="col-8 border-all">
                            <h5>{item.title}</h5>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="col-4 border-all">
                            RS. {item.quantity*item.price}
                        </div>
                    </div>
                    </div>)
                })}
                <div className="col-12">
                    <div className="row">
                        <div className="col-8 border-all">
                            <h4>Total</h4>
                        </div>
                        <div className="col-4 border-all">
                            Rs. {total}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-6">
                    <button className="btn btn-primary" onClick={() => {
                        const route = {
                            path: INDEX_PATH,
                            keys: {},
                            options: {},
                        };
                        this.props.navigateTo(route);
                    }}>Modify</button>
                </div>
                <div className="col-6">
                    <button className="ml-auto float-right btn btn-success" onClick={() => {
                        const route = {
                            path: ORDER_PLACED,
                            keys: {},
                            options: {},
                        };
                        this.props.navigateTo(route);
                    }}>Order</button>
                </div>
            </div>
        </div>)
    }
}

export default CartComponent;