let React = require('react');
let ListItem = require('./view.jsx');
import {Card} from 'semantic-ui-react';
class Display extends React.Component {

  constructor() {
    super();
  }

  render() {
    let ingredients = this.props.viewArray;
    let detail = this.props.detail;
    let ch = '';
    if(detail === 'update')
    {
      ch = this.props.change;
    }

    if(ingredients.length > 0)
    {
    let ListItems = ingredients.map(function(item) {
        return (
          <ListItem key={arguments[1]} id={item._id} name={item.name} address = {item.address}
          rating = {item.rating} cuisine = {item.cuisines} image={item.image} detail = {detail}
          comment = {item.comments} change={ch}/>);
      });
        return (
          <div>

          <Card.Group style={{padding: 40}}>{ListItems}</Card.Group>
        </div>
        );
    }
    else {
      return <div >No Fav</div>;
    }
  }
}
Display.propTypes = {
  id: React.PropTypes.number,
  change: React.PropTypes.func,
  detail: React.PropTypes.string,
  viewArray: React.PropTypes.array
};
module.exports = Display;
