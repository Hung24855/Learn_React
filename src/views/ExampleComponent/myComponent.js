import React , {Component} from "react"



class MyComponent extends Component {
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    

    render() {
        this.setState = {
            name : 'Hồng',
            ho : 'Nghiêm Đình'
        }

        
        return (
            <>
                
                <h1>My name is : {this.setState.ho} {this.setState.name}</h1>
            </>
            
        )
    }

}

//NghiemDinhHong
export default MyComponent;