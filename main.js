import Vue from './vue.js';
import {App} from './App.js'
import './main.css'

new Vue({
    el:'#app',
    components:{
        app:App
    },
    template:'<app/>'

})