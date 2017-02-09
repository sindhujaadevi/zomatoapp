import React from 'react';
import { Button, Input} from 'semantic-ui-react';

class Component1 extends React.Component {
	constructor() {
			super();
			this.state = {
					"location": "",
					"cuisine": ""
			}
			this.Clickfn = this.Clickfn.bind(this);
			this.onChange = this.onChange.bind(this);

	}
	Clickfn(location, cuisine)
	{
			this.props.change(location, cuisine);
	}
	onChange(name)
	{
			this.setState({
					[name.target.name]: name.target.value
			});
	}
	render () {
		var divStyle = {
	 margin: '20px',
	 paddingLeft:'50px'
 }
		return (
			<div style={divStyle}>
				{/* <input type="text" name="t1" id="id" placeholder="Enter location"/>
				<input type="text" name="t2" id="cuisine" placeholder="Enter Cuisine"/>
				<button onClick={this.handleClick.bind(this)}>Search</button> */}

 			<form>
			<Input type='text' name="location" placeholder='Enter CityName' onChange={this.onChange}/>
      <Input type='text' name="cuisine" placeholder='Enter Cuisine'  onChange={this.onChange} />
		</form>
      <Button size='large' color='green' onClick={this.Clickfn.bind(this, this.state.location, this.state.cuisine)}>Search</Button>
		</div>
		);
	}
}

module.exports = Component1
