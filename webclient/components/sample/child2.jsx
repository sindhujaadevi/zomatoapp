import React from 'react';

class Child2 extends React.Component{
constructor(){
super();
}

render(){

return(
<div>
<h1>Hi Child2 is {this.props.name}</h1>
</div>
)
}
}
export default Child2;
