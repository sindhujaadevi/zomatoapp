import React from 'react';
import Fav from './../js/fav.jsx';

class ViewComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
      return (
            <div>
              <Fav/>
            </div>
        );
    }

}

module.exports = ViewComponent;
