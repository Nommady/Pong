import React, { Components, Fragment } from 'react'
import Player1 from '../components/Player1'
import Player2 from '../components/Player2'
import Bola from '../components/Bola'
import './Campo.css'


var p1Press = document.addEventListener("keydown", function (event) {
    if (event.keyCode == 87) {
        document.getElementById('play1').classList.remove('down')
        document.getElementById('play1').classList.add('up')
    }else if(event.keyCode == 83){
        document.getElementById('play1').classList.remove('up')
        document.getElementById('play1').classList.add('down')
    }
})


//document.body.onkeypress = MovDown;


export default () =>
    <Fragment>
        <div className="Campo">
            <div className="lado1">
                <div className="scoreP1">0</div>
                <Player1 />
            </div>
            <hr className="linha" />
            <Bola />
            <div className="lado2">
                <div className="scoreP2">0</div>
                <Player2 />
            </div>
        </div>
    </Fragment>
