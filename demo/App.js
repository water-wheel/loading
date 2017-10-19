import React, { Component } from 'react'
import Loading from '../src/index.js'
import './index.scss'

export default class App extends Component {

    constructor(args, context){
        super(args);

        this.state = {
            open: false,
        }

        this.handleAc = this.handleAc.bind(this);
    }

    handleAc() {
        this.setState({
            open: true
        })

        setTimeout(() => {
            this.setState({
                open: false
            })
        }, 2000);
    }


    render() {
        return (
            <section className="container">
                <button onClick={this.handleAc}>显示loading</button>
                <Loading {...this.state}/>
            </section>
        )
    }
}
