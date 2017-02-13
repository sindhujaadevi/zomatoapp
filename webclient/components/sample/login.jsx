let React = require('react');
let {browserHistory} = require('react-router');
import $ from 'jquery';

class Login extends React.Component {
  constructor() {
      super();
      this.state = {username: '', password: '', isLoggedIn: ''};
  }

handleUserName(e)
{
this.setState({username: e.target.value});
}
handlePassword(e)
{
this.setState({password: e.target.value});
}
LoginUser() {
$.ajax({
 url: 'http://localhost:8080/users/login',
 type: 'POST',
 datatype: 'JSON',
 data: {
   username: this.state.username,
   password: this.state.password
 },
 success: function(res) {
   console.log(res.responseText);
   browserHistory.push('/home');
 }.bind(this),
 error: function(err) {
   alert('Invalid username or password');
   console.log(err.responseText);
 }.bind(this)
});
}
render() {
 return(
 <div className='Login'>
      <h2 className='text-center'>Login</h2>
      <form className="ui form">
      <div className='form-group'>
      <input className='form-control' onChange={this.handleUserName.bind(this)} placeholder='Enter User Name' type='text' />
      </div>
      <div className='form-group'>
      <input className='form-control' onChange={this.handlePassword.bind(this)} placeholder='Enter Password' type='password' />
      </div>
      <input className="ui big green submit button" onClick={this.LoginUser.bind(this)} value='Login' />
</form>
 </div>);
}
}

module.exports = Login;