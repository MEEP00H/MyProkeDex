import React, { Component } from 'react'
import axios from 'axios'
import PokemonCard from '../components/PokemonCard'
import MyPokemon from '../components/MyPokemon'
import styled from 'styled-components'

const Footer =styled.div`
    width: 847px;
    height:60px;
    bottom: 0;
    background-color: #ec5656;
    color: white;
    text-align: center;
`
const H1 = styled.h1`
    text-align:center;
`
const Content = styled.div`
    height:562px;
    /* display:inherit; */
    padding:30px;
    overflow: scroll;

`
const Card = styled.div`
    
`

export default class Pokedex extends Component {
    state ={
        pokemon:[],
        myPokemon:[],
        modalIsOpen:false,
        setModalIsOpen:false

    }
    componentDidMount(){
        axios.get('http://localhost:3030/api/cards')
            .then(response=>{
                this.setState({pokemon : response.data.cards})
                // console.log(this.state.pokemon,'Pokedex')
        })
    }

    setModalIsOpen=()=>{
            this.setState({modalIsOpen:true}) 
    }
    setModalIsClose=()=>{
        this.setState({modalIsOpen:false})
    }
    addMyPokedex=(index)=>{
        let arr = this.state.pokemon
        let store =''
        if (index !== -1) {
            store = arr.splice(index, 1);
            this.setState({pokemon: arr});
            this.state.myPokemon.push(store[0])
            // console.log(index,this.state.myPokemon)
        }
        
    }
  
    Remove=(index)=>{
        let arr =this.state.myPokemon
        let store =[]
        if (index !== -1) {
            store = arr.splice(index, 1);
            this.setState({myPokemon: arr});
            this.state.pokemon.push(store[0])
        }
        
    }
    
    
    render() {
        return (
            
                <Card class="card mb-3">
                    <Content >
                                <MyPokemon class="col-sm"
                                        card ={this.state.myPokemon}
                                        Remove ={this.Remove}
                                        // class="col-lg-4 d-flex align-items-stretch"
                                    />
                            <PokemonCard 
                                isOpen={this.state.modalIsOpen}
                                // isOpen={true} 
                                onRequestClose={this.setModalIsClose}
                                shouldCloseOnOverlayClick={false}
                                cards ={this.state.pokemon}
                                addPokemon = {this.addMyPokedex}
                                >
                            </PokemonCard>
                    </Content>
                    <Footer  onClick ={this.setModalIsOpen}><H1>+</H1></Footer>  
                </Card>
                
            
        )
    }
}
