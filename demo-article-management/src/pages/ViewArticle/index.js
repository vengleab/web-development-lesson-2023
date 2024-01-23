import React, { Component } from 'react'

export default class ViewArticle extends Component {
  state = {};

  async componentDidMount() {
  }

  render() {
    console.log(this.props);
    const {params} = this.props?.match || {}
    const id = 'test-id';
    return (
      <div>
        View Article: id: {params.id} - {JSON.stringify(this.state.article)}
      </div>
    )
  }
}
