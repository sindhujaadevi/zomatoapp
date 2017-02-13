let React = require('react');
import {Button, Comment, Form, Icon, TextArea} from 'semantic-ui-react';
import $ from 'jquery';

class Update extends React.Component {
    constructor()
    {
        super();
        this.onClose = this.onClose.bind(this);
        this.change1 = this.change1.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            id: '',
            name: '',
            address: '',
            rating: '',
            cuisine: '',
            viewArray: [],
            comment: ''
        };
    }
    onClose(e) {
        this.setState({commit: e.target.value});
        this.changeState = this.changeState.bind(this);
        this.update();
    }

    change1(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    update()
    {
        let dat = {
            id: this.props.id,
            comment: this.state.comment
        };
        $.ajax({url: 'http://localhost:8080/restaurants/update', type: 'PUT', data: dat});
        this.changeState();
    }

    changeState()
    {
        this.props.change();
    }

    render()
    {
        return (
            <Comment.Group>
                <Comment>
                    <Form>
                        <TextArea name="comment" value={this.state.comment} onChange={this.change1}
                          placeholder='Try adding multiple lines' autoHeight/>
                    </Form>
                    <span>
                        <Button color='green' onClick={this.onClose} value={this.state.comment}>
                            <Icon name='checkmark'/>Update</Button>
                    </span>
                </Comment>
            </Comment.Group>
        );
    }
}
Update.propTypes = {
    // id: React.PropTypes.number,
    comment: React.PropTypes.func,
    change: React.PropTypes.func
};
module.exports = Update;
