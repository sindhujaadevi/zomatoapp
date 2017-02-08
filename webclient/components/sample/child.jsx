import React from 'react';
import Child3 from './child3.jsx'
class Child1 extends React.Component{
constructor(){
super();

}

render() {

return(
<div>
  <button onClick={this.props.ondeside}>Change</button>
<h1>Hi Child1 is {this.props.name}</h1>
{/* <Child3 name="sindhu"/> */}

</div>
)
}
}
export default Child1;
