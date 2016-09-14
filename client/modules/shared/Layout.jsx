import React from 'react';

class Layout extends React.Component {
  render() {
    const content = this.props.children;
    return (
      <section id="layout">
        <h2>Layout</h2>
        {content}
      </section>
    );
  }
}

module.exports = Layout;
