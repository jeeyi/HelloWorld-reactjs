import React from 'react';
import {injectIntl, FormattedMessage} from 'react-intl';

var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <p>
        <FormattedMessage
          defaultMessage = 'Hello World!'
          description = 'Message displayed on main page'
          id = 'main.display'
        />
      </p>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default injectIntl(Component, {withRef: true});;
