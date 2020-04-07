import React, { Component } from 'react'
import Card from './Card'
import styled from 'styled-components';
import Filter from '../assets/search.png'

const Searching = styled.div`
    margin-top:20px,
`
const Input = styled.input`
   width:500px;
   margin-left:80px;
`
const FilterSearch = styled.img`
    width:25px;
`

export default class Search extends Component {
    state ={
        search:'' ,
        pokemon:'',
        
    }
    onchange =(e)=>{
        this.setState({search:e.target.value});
    }
    componentDidMount(){
        this.setState({pokemon:this.props.card})
    }
 
   
    
    
    render() {
        return (
            <Searching>
                <div class="input-group mb-3">
                   
                   

                    <div class="input-group mb-3">
                    <Input onChange= {this.onchange} placeholder="Find Pokemon" type="text" class="form-group col-md-6"/> 
                    <div class="input-group-append">
                        <span class="input-group-text" style={{backgroundColor:'white',borderLeft:'none'}}>
                            <FilterSearch src={Filter} alt="filter"/>
                        </span>
                    </div>
                    </div>
                </div>
                
                {this.state.pokemon ? (
                    <div className ="row">
                        {this.state.pokemon.map((pokemon,index)=>{
                            if(this.state.search !=='' && pokemon.name.indexOf(this.state.search)===-1){
                                return null
                            }
                            return  <Card 
                                        name= {pokemon.name}
                                        index={index}
                                        imageUrl={pokemon.imageUrl}
                                        hp ={pokemon.hp}
                                        STR ={pokemon.attacks}
                                        weak={pokemon.weaknesses}
                                        ADD = {this.props.ADD}  
                                        pokemon={pokemon}
                                        type = {pokemon.type}
                                    />
                        })}
                    </div>
                ):(<h1>Loading Pokemon</h1>)}
            </Searching>
        )
    }
}
