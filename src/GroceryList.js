import { Component } from "react";

export class GroceryList extends Component{
	state={
		userInput:"",
		groceryList:[]
	}

	onChangeEvent(e){
		this.setState({userInput: e});
	}
	// onChangeEvent=(e)=>{
	// 	this.setState({userInput:e.target.value})
	// }
	addItem(input){
		if(input === ""){
			alert("Please write what you want to buy!")
		}
		else{
			let listArray = this.state.groceryList;
			listArray.push(input);
			this.setState({groceryList: listArray, userInput: ""});
		}
	}

	deleteItem(){
		let listArray = this.state.groceryList;
		listArray = []
		this.setState({groceryList:listArray})
	}

	crossedWord(event){
		const li = event.target;
		li.classList.toggle("crossedLi")
	}

	onFormSubmit(e){
		e.preventDefault()
	}

	render(){
		return(
			<form className="block_UserAction" onSubmit={this.onFormSubmit}>
				<div className="userAction_input">
					<input 
						type="text" 
						placeholder="What do you want to buy?"
						value={ this.state.userInput }
						// onChange={this.onChangeEvent}
						onChange={ (e)=> this.onChangeEvent(e.target.value) }
						/>
				</div>
				<div className="btn add" >
					<button onClick={ ()=>this.addItem(this.state.userInput) }>Add</button>
				</div>
				<div className="btn delete" >
					<button onClick={()=>this.deleteItem()}>Delete</button>
				</div>
				<ul>
					{this.state.groceryList.map((item, index)=> (
						<li onClick={this.crossedWord} key={index}>
							{item}
						</li>
					))}
				</ul>
			</form>
		)
	}
}