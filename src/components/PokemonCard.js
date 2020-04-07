import React from 'react';
import Modal from 'react-modal'
import Search from './Search'


const pokemonCard=(props)=>{  
        

        return ( 
                    <Modal
                        isOpen={props.isOpen} 
                        onRequestClose={props.onRequestClose}
                        shouldCloseOnOverlayClick={true}
                        >
                        <Search 
                            card= {props.cards}
                            ADD = {props.addPokemon}               
                        />
                    </Modal>
        )
}

export default pokemonCard

