import React from 'react';


class OrderPlacedComponent extends React.Component {
    render(){
        return(<div className="container">
            <div className="row mt-5">
                <div className="col-12 text-center">
                    <h4>Your Order is Placed</h4>
                    <p>Order will be reaching you in X mins</p>
                    <h4>Thanks for shopping with Us</h4>
                </div>
            </div>
        </div>)
    }
}

export default OrderPlacedComponent;