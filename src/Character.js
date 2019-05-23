import React, { Component } from 'react';
import character from './images/character.svg';
import { relative } from 'path';
import { timeout } from 'q';

class Character extends Component{

    constructor(props) {
        super(props);
        this.state = {
          position: {
              x: 1,
              y: 1
          },
          positionOffset:{
              top: -459,
              left: -153
          }
        };
    }
    
    moveForward(){
        if(this.state.position.y < 9) {
            this.state.position.y++;
            this.state.positionOffset.top += 51;
            this.setState(this.state);
        }
        else {
            console.log("Can't move any further forward!");
        }
    }

    moveBack(){
        if(this.state.position.y > 1) {
            this.state.position.y--;
            this.state.positionOffset.top -= 51;
            this.setState(this.state);
        }
        else {
            console.log("Can't move any further back!");
        }
    }

    moveLeft(){
        if(this.state.position.x > 1) {
            this.state.position.x--;
            this.state.positionOffset.left -= 51;
            this.setState(this.state);
        }
        else{
            console.log("Can't move any further left!");
        }
    }

    moveRight(){
        if (this.state.position.x < 8) {
            this.state.position.x++;
            this.state.positionOffset.left += 51;
            this.setState(this.state);
        }
        else {
            console.log("Can't move any further right!");
        }
    }



    render(){
        var style = {
            margin: "0",
            position: "relative",
            left: this.state.positionOffset.left.toString().concat("px"),
            top: this.state.positionOffset.top.toString().concat("px")
        };

        return(
            <img src={character} alt="character" width="50px" id="character" style={style} />
        );
    }
}

export default Character;