let React = require('react');
import {Icon, Button, Input, Form} from 'semantic-ui-react';
import $ from 'jquery';

class Save extends React.Component {
  constructor()
  {
    super();
    this.onClose = this.onClose.bind(this);
    this.change = this.change.bind(this);
    this.save = this.save.bind(this);
    this.find = this.find.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state = {'id': '' , 'name': '' , 'address': '', 'rating': '' ,'viewArray' : [],
     'comment': '',  content: 'Add to Favourites', disable: false}
  }

    onClose(e) {
      this.save();
  }

  change(event)
  {
    this.setState({[event.target.name]: event.target.value});
  }

  save()
  {
    let dat = {
      _id: this.props.id,
      name: this.props.name,
      address: this.props.address,
      image: this.props.image,
      rating: this.props.rating,
      comments: this.state.comment
    };
    $.ajax({
     url: 'http://localhost:8080/restaurants/add',
     type: 'POST',
     data: dat,
     success: function(data) {
       this.setState({content:'Added'});
       this.setState({disable:true});
     }.bind(this),
     error: function(err) {
       console.error(err);
     }.bind(this)
   });
   this.refresh();
  }

  refresh() {
    this.props.refresh();
  }
  find() {
    $.ajax({
     url: 'http://localhost:8080/restaurants/display/'+this.props.id,
     success: function(data) {
       if(data !== 'enter a valid id')
       {
           this.setState({content: 'Added'});
           this.setState({disable: true});
       }
     }.bind(this),
     error: function(err) {
       console.error(err);
     }
   });
  this.refresh();
  }

  componentDidMount()
  {
    this.find();
  }

  render()
  {
    return(
      <Form>
         <Input name="comment" value={this.state.comment} onChange={this.change} placeholder='Put down your task'>
          <Button color='green' floated = 'right' onClick={this.onClose} disabled={this.state.disable}>
            <Icon name='add' />{this.state.content}</Button></Input>
      </Form>);
    }
  }
module.exports = Save;
