import React, { Component } from 'react';
import ButtonList from './ButtonList' ;
import Character from './Character';
import ReactDOM from 'react-dom';

class App extends Component {
    
    state = {
        characters : [
            {
             name: 'Iron Man',
             image:'https://www.kindpng.com/picc/m/68-682525_lego-clipart-iron-man-lego-marvel-super-heroes.png', 
             selected: false
            },

            {
             name: 'Captain America',
             image: 'https://w0.pngwave.com/png/549/314/captain-america-lego-marvel-super-heroes-2-lego-marvel-s-avengers-bruce-banner-captain-america-png-clip-art.png',   
             selected: false
            },
            
            {
             name: 'Hulk',
             image:'https://cdn.imgbin.com/17/0/10/imgbin-lego-marvel-super-heroes-2-lego-marvel-s-avengers-hulk-spider-man-hulk-incredible-hulk-4RNdbVADynLxbrR9pVSLD1jEL.jpg',   
             selected: false
            },
                
            {
             name: 'Thor',
             image: 'https://img.favpng.com/6/0/8/lego-marvel-super-heroes-lego-marvel-s-avengers-thor-hulk-png-favpng-AdYSs8PAT8LWy2ihpi2Bbd2cz.jpg',  
             selected: false
            },
        ]
    }

    onClickHandle = (index) => _ => {
        this.setState({
            characters: this.state.characters.map( (char, charIndex) => 
            ( (charIndex === index) ? ({...char, selected: true}) : ({...char, selected: false}) )
            )
        });

    }

    render() {
        return(
            <div>
                <ButtonList onClickFunc={this.onClickHandle} characters={this.state.characters}/>
                <Character selectedChar={ this.state.characters.find(char => char.selected) } />
            </div>
        );
    }

}

export default App;