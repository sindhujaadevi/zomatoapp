import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import $ from 'jquery';
var textBoxStyle = {
    height: '70px'
}
var imgStyle = {
    height: '200px'
}
var textStyle = {
    color: 'green',
    fontSize: '110%'
}
var inputStyle = {
    color: 'black'
}

class Cards extends React.Component {
    constructor() {
        super();
        this.button1 = this.button1.bind(this);
    }
    button1(){

        let value = {
          img : this.props.img,
          name : this.props.name,
          address : this.props.address,
          cuisines : this.props.cuisines,
          ratings : this.props.ratings
        };
      $.ajax({
          url: 'http://localhost:8080/restaurants/add',
          type:'POST',
          data1 : value,
       success: function(data1)
         {
             console.log(data1);
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
            <Card>
                <Image style={imgStyle} src={this.props.img}/>
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
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
                    <a>
                        <span style={textStyle}>Ratings :</span>
                        <span style={inputStyle}>{this.props.ratings}/5</span>
                    </a>
                </Card.Content>
                <Button onClick={this.button1} size='large' primary>Add To Favourities</Button>
            </Card>
        );
    }
}

module.exports = Cards;
