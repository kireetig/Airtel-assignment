import React from 'react';
import PropTypes from 'prop-types';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAllBurger();
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h2 className="text-center">
                            Welcome to Bugger Awesome
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row mt-5">
                            {this.props.allProducts.map((value) => {
                                return (<div className="col-6 text-center" key={value.id}>
                                    <div className="card view-card">
                                        <img className="card-img-top" src={'assets/burger.jpg'} alt="Card image"/>
                                        <div className="card-body text-center">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5 className="card-title mb-0">{value.title} <span>
                                                        {value.category === 'veg' ?<img src="https://png.icons8.com/color/50/000000/vegetarian-food-symbol.png" style={{width: '20px'}}/>:
                                                        <img src="https://png.icons8.com/color/50/000000/non-vegetarian-food-symbol.png" style={{width: '20px'}}/>}
                                                    </span></h5>
                                                    <div className="card-rating" style={{fontSize: '12px'}}>{value.rating} rating</div>
                                                </div>
                                                <div className="col-6">
                                                    <h5>Rs {value.price}</h5>
                                                </div>
                                                <div className="col-12 mt-3">
                                                    <div className="card-rating">
                                                        Ingredients: {value.ingredients}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-4 m-0 p-0">
                                                            <button className="add-item-control left-control">
                                                                <span className="minus-circle">-</span>
                                                            </button>
                                                        </div>
                                                        <div className="col-4 m-0 p-0">
                                                            <p className="item-count text-center">
                                                                0
                                                            </p>
                                                        </div>
                                                        <div className="col-4 m-0 p-0">
                                                            <button className="add-item-control right-control">
                                                                <span className="plus-circle">+</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <a className="btn btn-primary">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const propTypes = {
    getAllBurger: PropTypes.func.isRequired,
    allProducts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const props = {
    allProducts: [],
};

HomeComponent.propTypes = propTypes;


export default HomeComponent;