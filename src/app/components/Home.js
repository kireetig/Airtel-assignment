import React from 'react';
import PropTypes from 'prop-types';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: [],
            ratingFilter: 0,
            categoryFilter: '',
            priceFilter: '1000',
            searchText: ''
        };
        this.subValue = this.subValue.bind(this);
        this.addValue = this.addValue.bind(this);
        this.myfilterChange = this.myfilterChange.bind(this);
    }

    componentWillMount() {
        this.props.getAllBurger();
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

    myfilterChange(i, val) {
        if (i === 1) {
            this.setState({
                ratingFilter: val,
            });
        } else if (i === 2) {
            this.setState({
                categoryFilter: val,
            });
        } else if (i === 3) {
            this.setState({
                priceFilter: val,
            });
        } else if (i === 4) {
            this.setState({
                searchText: val,
            });
        }
        setTimeout(() => {
            this.props.filterProducts(this.state.ratingFilter, this.state.categoryFilter, this.state.priceFilter, this.state.searchText, this.props.allProducts);
        }, 200);
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
                <div className="row mt-5">
                    <div className="col-2">
                        Filters:
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-md-3">
                                Ratings: <select onChange={(e) => this.myfilterChange(1, e.target.value)}>
                                <option value="">Select</option>
                                <option value="3">  {'2 <'}  </option>
                                <option value="4"> {'3 <'} </option>
                                <option value="5"> = 5</option>
                            </select>
                            </div>
                            <div className="col-md-5">
                                Category: <select onChange={(e) => this.myfilterChange(2, e.target.value)}>
                                <option value="">Select</option>
                                <option value="veg">Veg</option>
                                <option value="non-veg">Non-Veg</option>
                            </select>
                            </div>
                            <div className="col-md-4">
                                Price: <select onChange={(e) => this.myfilterChange(3, e.target.value)}>
                                <option value="1000">Select</option>
                                <option value="100">{'< 100'}</option>
                                <option value="200">{'< 200'}</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <input type="text" placeholder={'search'}
                               onChange={(e) => {
                                   this.myfilterChange(4, e.target.value);
                               }}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row mt-5">
                            {this.props.filteredProducts.map((value, index) => {
                                return (<div className="col-md-6 col-12 text-center" key={value.id}>
                                    <div className="card view-card">
                                        <img className="card-img-top" src={'assets/burger.jpg'} alt="Card image"/>
                                        <div className="card-body text-center">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h5 className="card-title mb-0">{value.title} <span>
                                                        {value.category === 'veg' ? <img
                                                                src="https://png.icons8.com/color/50/000000/vegetarian-food-symbol.png"
                                                                style={{width: '20px'}}/> :
                                                            <img
                                                                src="https://png.icons8.com/color/50/000000/non-vegetarian-food-symbol.png"
                                                                style={{width: '20px'}}/>}
                                                    </span></h5>
                                                    <div className="card-rating"
                                                         style={{fontSize: '12px'}}>{value.rating} rating
                                                    </div>
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
                                                            <button className="add-item-control left-control"
                                                                    onClick={() => this.subValue(index)}>
                                                                <span className="minus-circle">-</span>
                                                            </button>
                                                        </div>
                                                        <div className="col-4 m-0 p-0">
                                                            <p className="item-count text-center">
                                                                {this.state.quantity[index] === undefined ? 0 : this.state.quantity[index]}
                                                            </p>
                                                        </div>
                                                        <div className="col-4 m-0 p-0">
                                                            <button className="add-item-control right-control"
                                                                    onClick={() => this.addValue(index)}>
                                                                <span className="plus-circle">+</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <button
                                                        disabled={(this.state.quantity[index] === undefined || this.state.quantity[index] === 0)}
                                                        className="btn btn-primary"
                                                        onClick={() => this.props.addToCart(value, this.state.quantity[index])}>Add
                                                        to Cart
                                                    </button>
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
    addToCart: PropTypes.func.isRequired,
    filterProducts: PropTypes.func.isRequired,
    allProducts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    filteredProducts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};


HomeComponent.propTypes = propTypes;


export default HomeComponent;