import React, { Component } from 'react'
import MyCard from '../components/MyCard'

export default class MyPokemon extends Component {
    state ={
        pokemon :'',
    }
    componentWillReceiveProps(nextProps){
            this.setState({pokemon:this.props.card})
            console.log('d',this.state.pokemon)
    }
    
    
    render() {
        return (
            <div>
                {this.state.pokemon ? (
                    <div className ="row">
                        {this.state.pokemon.map((pokemon,index)=>{
                            console.log(index)
                            return  <MyCard 
                                        name= {pokemon.name}
                                        index={index}
                                        imageUrl={pokemon.imageUrl}
                                        hp ={pokemon.hp}
                                        STR ={pokemon.attacks}
                                        weak={pokemon.weaknesses}
                                        ADD = {this.props.ADD}  
                                        pokemon={pokemon}
                                        type = {pokemon.type}
                                        Remove = {this.props.Remove}
                                    />
                        })}
                    </div>
                ):(<h1>Loading Pokemon</h1>)}
            </div>
                // {/* <MyCard 
                //     myDex = {this.props.card}
                //     Remove = {this.props.Remove}
                //     /> */}
                    
            
        )
    }
}
