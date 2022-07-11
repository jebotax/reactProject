import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
    render() {
        return (
        <div class="wrapper fadeInDown">
        <div id="formContent">
            
            <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="Username"/>
            <input type="password" id="password" class="fadeIn third" name="password" placeholder="Password"/>
            <input type="submit" class="fadeIn fourth" value="Log In"/>
            </form>

            <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
            </div>

        </div>
        </div>
        );
    }
}