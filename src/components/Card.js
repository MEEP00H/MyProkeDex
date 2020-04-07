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
    Colorless: "#FFFF",
    Fire: "#eb4d4b"
  }
  



const Cards = styled.div`
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
    height:190px;
    width:355px;
    margin: 0 0 0 13px

`

const Cute = styled.img` 
    height:2rem;   
`
const Image = styled.img` 
    width:120px
`
const Frame = styled.div` 
    margin: 11px 0 10px 13px
`
const Text = styled.div` 
    font-size:9px;
`
const Detail = styled.div`
    margin: 10px 0 10px 35px
`
const Close = styled.div`
    margin: -180px 0 0 310px
`
// const colorType = Object.keys(COLORS);
// console.log(colorType)

export default class Card extends Component {

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
        const {name,imageUrl,hp} =this.props
        this.setState({name,imageUrl,hp})
        
        if(this.props.STR){
            let statSTR  = this.props.STR
            statSTR  = statSTR.length*50
            this.setState({STR:statSTR})
            // console.log('props',this.props.STR)
        }else{
            this.setState({STR:0}) 
        }
        if(this.props.weak){
            this.setState({weak:(this.props.weak).length*100})
        }else{
            this.setState({weak:0})
        }
        this.setState({hp:this.props.hp})
        if(this.props.hp > 100){
            this.setState({hp:100})
        }else if(this.props.hp === 'None'){
            this.setState({hp:0})
        }
        
        
        // console.log(this.props.index,'d')
        const objectArray = Object.entries(COLORS);

        objectArray.forEach(([key, value]) => {
            if(key===this.props.type){
                this.setState({type:value})
            }
        })      
    }
    componentWillReceiveProps(nextProps){
        
        this.setState({
            name:nextProps.name,
            imageUrl:nextProps.imageUrl,
            hp:nextProps.hp,
            STR:nextProps.STR,
            weak:nextProps.weak

        })
        console.log(this.props,'pokemon')
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
        console.log(parseInt(this.state.hp),'poke',nextProps.name)
        
    }
    handleMouseHover = this.handleMouseHover.bind(this);
    handleMouseHover() {
        this.setState(this.toggleHoverState);
        // console.log('hover',this.isHovering)
    }

    toggleHoverState(state) {
        return {
            isHovering: !this.state.isHovering,
        };
    }
    
        
    render(){
        
    //  console.log(this.state.type)
        
        // let damage =cKey.attacks
        
        // let totalDamage = 0
        // if(damage){
        //     damage = damage.map(dmg =>{
        //         damage = dmg.damage
        //         let sum = ''
        //         for(let i =0 ; i<damage.length;i++){
        //             if(damage.charAt(i)!== '+' && damage.charAt(i)!== '×'){
        //                 sum = sum+damage.charAt(i)
        //             }
        //         }
        //         totalDamage += parseInt(sum) 
        //     })
        //     let happiness = ((hp/10)+(totalDamage/10)+10-weak)/5
        //    console.log(happiness,'happy') 

       
        return (
            
            <div onClick ={(e)=> this.props.ADD(this.props.index)}>
            <Cards className="card mb-3" 
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}>
                <div className="row">
                    <Frame className="col-md-3">
                        <Image src={this.state.imageUrl} 
                            className="card-img" alt='pokemon'/>
                    </Frame>
                    <Detail className="col-md-7">
                            <h5 className="card-title">{this.state.name}</h5>
                            <span 
                                class="badge badge-secondary"
                                style={{
                                        backgroundColor: `${this.state.type}`,
                                        color: 'black'
                                     }}
                            >
                                {this.props.type}
                            </span>
                            <div className= 'row mt-1'> 
                                <div className="col-md-3">
                                    <Text>HP</Text> 
                                </div>
                                <div className={`col-12 col-md-9`}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.state.hp}%`,
                                            backgroundColor: `#f3701a`,
                                            }}
                                        >
                                            <small>{this.state.hp}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className= 'row mt-1'>
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
                            <div className= 'row mt-1'>
                                <div className="col-md-3">
                                    <Text>WEAK</Text>
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
                            <div className= 'row mt-1'>
                                <div className={`col-12 col-md-9`}>
                                    <Cute 
                                        alt= 'cute' 
                                        src = {cute}
                                        />
                                </div>
                            </div>
                    </Detail>
                    {this.state.isHovering &&
                        <Close className ="col">
                            ADD
                        </Close>}
                </div> 
            </Cards>
            
            </div>
            )   
    }
}

