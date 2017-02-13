let React = require('react');
import {Card, Icon, Image} from 'semantic-ui-react';
import Add from './button.jsx';
import $ from 'jquery';


class ListItem extends React.Component {
  constructor() {
    super();
    this.find = this.find.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state = {comment: ''};
  }

  find() {
    this.setState({comment: this.props.comment});
    $.ajax({
     url: 'http://localhost:8080/restaurants/display/' + this.props.id,
     success: function(data) {
       if(data !== 'enter a valid id')
       {
           this.setState({comment: data});
       }
     }.bind(this)
   });
  }

  componentDidMount() {
    this.find();
  }

  refresh() {
    this.find();
  }

  render() {
    let detail = this.props.detail;
    let ch = '';
    let comment = '';
    if(detail === 'update')
    {
      ch = this.props.change;
    }
    if(detail === 'update')
    {
      comment = this.props.comment;
    }
    else {
      comment = this.state.comment;
    }
    return (
    // <Segment color='pink' style={{padding: 40, paddingLeft: 20}}>
                    <Card>
                            <Image src={this.props.image} style={{height: 170}}/>
                            <Card.Content>
                              <Card.Header>
                                {this.props.name}
                              </Card.Header>
                               <Card.Meta>
                                 {this.props.cuisine}
                               </Card.Meta>
                               <Card.Description>
                                 <h5>Address:</h5>{this.props.address}
                                     <h5>Planned Task:</h5> {comment}
                                     <Icon className='heart'>{this.props.rating}/5</Icon>
                                 </Card.Description>
                             </Card.Content>
                             <Card.Content extra>

                                    <Add id = {this.props.id} name = {this.props.name}
                                    address = {this.props.address} rating = {this.props.rating}
                                    image = {this.props.image} detail={this.props.detail} change={ch}
                                     votes={this.props.votes} refresh = {this.refresh}/>

                              </Card.Content>
                        </Card>
                      // </Segment>
    );
  }
}
ListItem.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  address: React.PropTypes.string,
  image: React.PropTypes.string,
  detail: React.PropTypes.string,
  votes: React.PropTypes.string,
  rating: React.PropTypes.string,
  cuisine: React.PropTypes.string,
  comment: React.PropTypes.string,
  change: React.PropTypes.func
};

module.exports = ListItem;
