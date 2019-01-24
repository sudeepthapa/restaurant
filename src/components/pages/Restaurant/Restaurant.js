import React, { Component } from 'react';

class RestaurantForm extends Component {

    state = {
        name: '',
        address: '',
        email: '',
        phone: '',
        // logo: {
        //     image: '',
        //     url: ''
        // }
    }

    nameChangeHandler=(e)=>{
        this.setState({name: e.target.value})
    }
    addressChangeHandler=(e)=>{
        this.setState({address: e.target.value})
    }
    emailChangeHandler=(e)=>{
        this.setState({email: e.target.value})
    }
    phoneChangeHandler=(e)=>{
        this.setState({phone: e.target.value})
    }
    // logoChangeHandler=(e)=>{
    //     this.setState({name: e.target.value})
    // }

    render() {
        return(
            <div className="row mt-4">
            <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                            <label for="Name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.nameChangeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label for="Address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Address" onChange={this.addressChangeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label for="Phone No">Phone No.</label>
                            <input type="text" className="form-control" id="pno" placeholder="Phone Number" onChange={this.phoneChangeHandler}></input>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.emailChangeHandler}></input>
                        </div>
                        {/* <div className="form-group">
                            <label for="logo">Logo</label>
                            <input type="file" className="form-control" id="logo" placeholder="Logo" onChange={this.fileChangeHandler}></input>
                        </div> */}
                        <input type='submit' className="btn btn-primary" />
                    </form>
                </div>
            </div>
        )
    }
}

export default RestaurantForm;
    