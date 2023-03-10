import React, {useState, useEffect} from "react";

/*
class Invoices1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            birthday: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({birthday: "01/01/2000"});
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <input onChange = {this.handleChange} name = "name" value = {this.state.name}/>
            </div>
        )
    }
}
*/

export default function Invoices2() {
    const [name, setName] = useState(""); //useState takes care of binding 
    const [birthday, setBirthday] = useState("");
    //setName of setState

    //this function runs when the useEffect function runs 
    //the blue is the call back function 

    //useEffect is the equivalent between ComponentDIdMount componentwillumount all three
    useEffect(() => {
        setBirthday("01/01/2000");
    })

    function handleNameChange(evt) {
        setName(evt.target.value); //dont need name 
    }
    //if you had another input you would need another function 

    return ( 
        <div>
            <h1>Hello Word</h1>
            <input onChange = {handleNameChange} value = {name}/> 
            <h1>{name}</h1>
        </div>
    )
}