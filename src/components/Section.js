import React,{ Component } from 'react';

import Ionicon from 'react-ionicons'

class Section extends Component {
  render() {
    const { containerStyle } = styles;
    return (
      <div className="container" style={{ ...containerStyle, ...this.props.style}}>
        <h2 onClick={this.props.onPress} className="tab-title" style={{margin: 0, paddingRight: '2%',display:'table-cell', verticalAlign:'middle', fontWeight: 400}}>
          {this.props.title}
          <Ionicon style={{opacity: this.props.arrow ? 1: 0}} icon={this.props.arrowUp ? "ion-android-arrow-dropup" : "ion-android-arrow-dropdown"} color={this.props.arrowColor} fontSize="24px"/>
        </h2>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    width: '100%',
    height: 64,
    textAlign: 'right',
    display: 'table',
  },
};

export default Section;