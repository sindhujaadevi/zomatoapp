import React from 'react';
import ReactDOM from 'react-dom';
import Color from './components/sample/';
class MainComponent extends React.Component {
constructor() {
super();
this.state = {name: 'sowbi'}
}
onClick() {
  return (
  this.setState({name:'Sowbarnikkaa'})
)
}
render() {
return(
<div>
  <Color.Child1 ondeside={this.onClick.bind(this)} name={this.state.name}/>
<Color.Child2 name={this.state.name}/>
</div>
);
}
}
ReactDOM.render(
<MainComponent/>, document.getElementById('mountapp')
);
