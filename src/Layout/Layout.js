import React,{Component} from 'react';
import styled from 'styled-components'


const Header = styled.header`
    height: 70px;
    margin-top:20px
    `
const Content  = styled.main`
    height:566px;
`
const H1 = styled.h1`
    text-align:center;
`  
class Layout extends Component {

    

    render(){
        return(
                <div>
                    <Header><H1>MY POKEDEX</H1></Header>
                    <Content>
                        {this.props.children}
                    </Content>
                </div>
        )
    }
    
}
   


export default Layout
