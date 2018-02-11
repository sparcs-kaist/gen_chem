import React,{ Component } from 'react';
import axios from '../axios-auth';

import NoticeSection from './NoticeSection';

class Notice extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }
  componentWillMount() {
    const subject = this.props.subject;
    const route = `${subject}/notice/`;
    axios.get(route)
      .then((response) => {
        const result = JSON.parse(response.data);
        const data = result.map((notice) => {
          const date = new Date(notice.fields.event_date);
          const realDate = `${date.getMonth()}/${date.getDate()}`;
          return {
            title: notice.fields.title,
            date: realDate,
            content: notice.fields.description,
          };
        });
        this.setState({
          data: data
        });
      })
  }

  render() {
    const { containerStyle } = styles;

    const rows = this.state.data.map((e) => {
      return <NoticeSection data={e} />;
    });

    return (
      <div onClick={this.props.onPress} className="container" style={containerStyle}>
        {rows}
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: '54px',
  }
};

export default Notice;