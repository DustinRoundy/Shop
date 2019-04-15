import React from 'react';
import {Link} from "react-router-dom";
import store from "../store";

class Login extends React.Component{
    state={
        username : ''
    };
    render(){
        return(
            <div className='login'>
                <div className='mx-auto col-md-3 box'>
                    <h3>Login</h3>
                    <form>
                        <input type='text' placeholder='Username' className='form-control' onChange={(e) => this.updateUsername(e.target.value)}/>
                        <input type='password' placeholder='Password' className='form-control'/>
                        <Link to={`/`} className='item btn btn-success mx-auto' onClick={this.saveUsername}>Login</Link>
                    </form>

                </div>
            </div>

        )

    }

    updateUsername = (username) => {
        console.log(username);
        this.setState({username : username});
    };

    saveUsername = () => {
        store.dispatch({
            type: 'LOGIN',
            username: this.state.username,
        });
        console.log(store.getState().account);
    }
}

export default Login