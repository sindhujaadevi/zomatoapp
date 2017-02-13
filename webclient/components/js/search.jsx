import React from 'react';
import { Button, Input, Icon, Reveal} from 'semantic-ui-react';

class Search extends React.Component {
	constructor() {
			super();
			this.state = {location: '', cuisine: ''};
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
		let divStyle = {
	margin: '20px',
	paddingLeft: '50px'
};
		return (
			<div className='ui one column center aligned column grid position' style={divStyle}>
			<Input type='text' name="location" placeholder='Enter CityName' onChange={this.onChange} value = {this.state.location}/>
      <Input type='text' name="cuisine" placeholder='Enter Cuisine' onChange={this.onChange} value = {this.state.cuisine}/>
				<Button onClick={this.Clickfn.bind(this, this.state.location, this.state.cuisine)}>
            <Reveal.Content visible><Icon name='search' /></Reveal.Content>
            <Reveal.Content hidden>
              Search
            </Reveal.Content>
          </Button>
		</div>
		);
	}
}

module.exports = Search;
