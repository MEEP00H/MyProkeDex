import React,{Component} from 'react';
import styled from 'styled-components'
import cute from '../assets/cute.png'


const COLORS = {
    Psychic: "#f8a5c2",
    Fighting: "#f0932b",
    Fairy: "#c44569",
    Normal: "#f6e58d",
    Grass: "#badc58",
    Metal: "#95afc0",
    Water: "#3dc1d3",
    Lightning: "#f9ca24",
    Darkness: "#574b90",
    Colorless: "#FFF",
    Fire: "#eb4d4b"
  }
  


const Card = styled.div`
    box-shadow : 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
    transition : all 0.3s cubic-bezier(0.25, 0.8, 0.2, 1);
    &:hover{
        box-shadow : 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);
    }
    -moz-user-select:none;
    -webkit-user-select:none;
    user-select:none;
    -o-user-select:none;
    background-color: #f3f4f7;
    border:none;
`
const Frame = styled.div` 
    margin: 13px 0 10px 5px
`
const Cute = styled.img` 
    height:2rem;   
`
const Image = styled.img` 
    width:110px
`
const Text = styled.div` 
    margin-top:-3px;
    font-size:14px;
`
const Close = styled.div`
    margin: -200px 0 0 310px
`
export default class MyCard extends Component {
    
    state= {
        name:'',
        imageUrl:'',
        index:'',
        hp:'',
        STR:'',
        weak:'',
        pokemon:'',
        type:'',
        isHovering: false,
     }
     
     componentDidMount(){
         const {name,imageUrl} =this.props
         if(this.props.STR){
             let statSTR  = this.props.STR
             statSTR  = statSTR.length*50
             this.setState({STR:statSTR})
         }
         if(this.props.weak){
             this.setState({weak:(this.props.weak).length*100})
         }else{
             this.setState({weak:0})
         }
         if(this.props.hp > 100){
             this.setState({hp:100})
         }else if(this.state.hp === 'None'){
             this.setState({hp:0})
         }
         this.setState({name,imageUrl})
         console.log(this.props.index,'d')
         const objectArray = Object.entries(COLORS);
 
         objectArray.forEach(([key, value]) => {
             if(key===this.props.type){
                 this.setState({type:value})
             }
         })      
     } 
     componentWillReceiveProps(nextProps){
        // console.log(nextProps.pokemon,'pokemon')
        this.setState({
            name:nextProps.name,
            imageUrl:nextProps.imageUrl,
            hp:nextProps.hp,
            STR :nextProps.STR,
            weak:nextProps.weak
        })
        if(nextProps.STR){
            let statSTR  = nextProps.STR
            statSTR  = statSTR.length*50
            this.setState({STR:statSTR}) 
        }else{
            this.setState({STR:0}) 
        }
        if(nextProps.weak){
            this.setState({weak:(nextProps.weak).length*100})
        }else{
            this.setState({weak:0})
        }
        
        if(parseInt(nextProps.hp) > 100){
            let hp= 100
            this.setState({hp:hp})
            
        }else if(nextProps.hp === 'None'){
            this.setState({hp:0})
        }
    }
    handleMouseHover = this.handleMouseHover.bind(this);
    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !this.state.isHovering,
        };
    }
    
        
    render(){
       return (
        
            <div className="col-md-6 mb-4">
                <Card className="card" 
                    onClick ={(e)=>this.props.Remove(this.props.index)}
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}>
                    <div className="row">
                        <Frame className="col-md-3">
                            <Image src={this.state.imageUrl} 
                                className="card-img-top rounded mx-auto" alt='pokemon'/>
                        </Frame>
                        <div className="col mt-10">
                            <div className="card-body">
                            <h5 className="card-title">{this.state.name}</h5>
                            <span 
                                class="badge badge-secondary"
                                style={{
                                        backgroundColor: `${this.state.type}`,
                                        color: 'white',
                                        margin: '0 5px 10px 0'                                     }}
                            >
                                {this.props.type}
                            </span>
                            <div className= 'row mb-2'>
                                <div className="col-md-3 ">
                                <Text>HP</Text> 
                                </div>
                                <div className={`col-md-9`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.hp}%`,
                                            backgroundColor: `#f3701a`
                                            }}
                                        >
                                            <small>{this.state.hp}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className= 'row mb-2'>
                                <div className="col-md-3">
                                    <Text>STR</Text>
                                </div>
                                <div className={`col-12 col-md-9`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.STR}%`,
                                            backgroundColor: `#f3701a`
                                            }}
                                        >
                                            <small>{this.state.STR}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className= 'row mb-2'>
                                <div className="col-md-3">
                                    <Text>Weak</Text>
                                </div>
                                <div className={`col-12 col-md-9`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.weak}%`,
                                            backgroundColor: `#f3701a`
                                            }}
                                        >
                                            <small>{this.state.weak}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className= 'row'>
                                <div className={`col-12 col-md-9`}>
                                    <Cute 
                                        alt= 'cute' 
                                        src = {cute}
                                        />
                                </div>
                            </div>
                            </div>
                        </div>
                        {this.state.isHovering &&
                        <Close className ="col">
                            Delete
                        </Close>}
                    </div>
                </Card>
            </div>
        
        )
    }
}
