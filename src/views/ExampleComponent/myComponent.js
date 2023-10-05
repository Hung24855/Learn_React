import React , {Component} from "react"



class MyComponent extends Component {

    state = {
        name : 'Hồng',
        ho : 'Nghiêm Đình'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    

    render() {
        

        
        return (
            <>
                <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}/>
                <br></br>
                <h1>My name is : {this.state.name}</h1>
            </>
            
        )
    }

}

//NghiemDinhHong
export default MyComponent;