import React from 'react';
import { getFunName } from '../helpers';
// import PropTypes from 'prop-types';
class StorePicker extends React.Component {
    // constructor() {
    //     super(); //creates react.component first and extends storePicker
    //     this.goToStore = goToStore.bind(this); //looks for goToStore method then binds it to this inside contructor attaches to StorePicker

    // }


goToStore(event) {
    event.preventDefault();
    console.log("You changed the URL!");
    
    //grab text from box
    const storeId = this.storeInput.value;

    console.log(`Going to store ${storeId}`);
    //transition from / to /store/:storeId
    // this.context.router.transitionTo(`/store/store${storeId}`);
    this.props.history.push(`/store/${storeId}`);
}
    render() {
        return (
            <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>
                {/*can only return one parent element and use className*/}
                <h2>Please enter a store</h2>
                {/*function ref when input is rendered on the page it will put a reference on the class itself*/}
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker;