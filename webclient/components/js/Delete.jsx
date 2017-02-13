let React = require('react');
import {Icon, Popup} from 'semantic-ui-react';
import $ from 'jquery';

class Delete extends React.Component {
  constructor()
  {
    super();
    this.delete = this.delete.bind(this);
  }

  delete()
  {
    let deleteId = {
      id: this.props.id
    };
    $.ajax({
     url: 'http://localhost:8080/restaurants/deleteid',
     type: 'DELETE',
     data: deleteId
   });
   this.changeState();
  }
    changeState()
    {
      this.props.change();
    }

  render()
  {
    return(
      <Popup
    trigger={<Icon name='remove user' color='red' onClick={this.delete}/>}
    content='Remove from Favourites'
  />
      );
    }
  }
  Delete.propTypes = {
    id: React.PropTypes.string,
    comment: React.PropTypes.func,
    change: React.PropTypes.func
  };
module.exports = Delete;
