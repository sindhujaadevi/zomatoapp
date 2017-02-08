import React from 'react';

class Child3 extends React.Component{
constructor(){
super();
}

render(){

return(
<div>
<h1>Child3 name is {this.props.name}</h1>
</div>
)
}
}
export default Child3;
