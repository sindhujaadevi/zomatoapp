import React from 'react';
import { Card, Icon, Image, Button, Input } from 'semantic-ui-react';
import $ from 'jquery';
// import View from './view.jsx';
let textBoxStyle = {
    height: '70px'
}
let imgStyle = {
    height: '200px'
}
let textStyle = {
    color: 'green',
    fontSize: '110%'
}
let inputStyle = {
    color: 'black'
}

class Cards extends React.Component {
    constructor() {
        super();
        this.button1 = this.button1.bind(this);
        this.state = {res: [] , comment:''};
    }
    change(event)
    {
      this.setState({[event.target.name]: event.target.value})
    }
    button1(){
        let value = {
          id:this.props.id,
          img : this.props.img,
          name : this.props.name,
          address : this.props.address,
          cuisines : this.props.cuisines,
          ratings : this.props.ratings
        };
      $.ajax({
          url: 'http://localhost:8080/restaurants/add',
          type: 'POST',
          data : value,
       success: function(data)
         {
           this.setState({res:data})
            console.log("success");
         }.bind(this),
         error: function(err)
         {
           console.log('error occurred on AJAX');
           console.log(err);
         }.bind(this)
        });
    }
    render() {
        return (
            <Card className='ui four card'>
                <Image style={imgStyle} src={this.props.img}/>
                <Card.Content>
                    <Card.Header>
                      <span>{this.props.id}</span>
                        <span>{this.props.name}</span>
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            <span style={textStyle}>Address :</span>
                            <span style={inputStyle}>{this.props.address}</span>
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        <span style={textStyle}>Cuisines :</span>
                        <span style={inputStyle}>{this.props.cuisines}</span>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        <span style={textStyle}>Ratings :</span>
                        <span style={inputStyle}>{this.props.ratings}/5</span>
                        <h3>Do you wish to add a comment?</h3>
                        <Input type='text' name='comment' value={this.state.comment}
                          onChange={this.change}/>
                </Card.Content>
                <Button onClick={this.button1} size='large' primary>Add To Favourities</Button>
            </Card>
        );
    }
}

module.exports = Cards;
