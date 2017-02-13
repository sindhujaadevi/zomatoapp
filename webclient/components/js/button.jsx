let React = require('react');
import Update from './modal.jsx';
import Save from './save.jsx';
import Delete from './Delete.jsx';

class Crud extends React.Component {
  constructor()
  {
    super();
  }

  render() {
    let detail = this.props.detail;
      if(detail === 'save')
      {
        return (
          <Save id = {this.props.id} name = {this.props.name}
          address = {this.props.address} rating = {this.props.rating}
          cuisine = {this.props.cuisines}
          image = {this.props.image} refresh={this.props.refresh}/>);
        }
      else {
        return (
          <div>
            <Update id = {this.props.id} name = {this.props.name}
              address = {this.props.address} rating = {this.props.rating}
              cuisine = {this.props.cuisines}
              image = {this.props.image} change={this.props.change}/>
              <Delete id = {this.props.id} change={this.props.change}/>
        </div>);
      }
  }
}
Crud.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  address: React.PropTypes.string,
  image: React.PropTypes.string,
  detail: React.PropTypes.string,
  votes: React.PropTypes.string,
  rating: React.PropTypes.string,
  cuisines: React.PropTypes.string,
  comment: React.PropTypes.func,
  change: React.PropTypes.func,
  refresh: React.PropTypes.func
};
module.exports = Crud;
