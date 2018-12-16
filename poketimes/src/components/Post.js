import React, { Component } from 'react'
//import axios from 'axios'
import { connect } from 'react-redux'

class Post extends Component {
  //not used because of the redux
 /* state = {
    post: null
  }
  //Switch tag is used to open a link at one time in app.js
  
  componentDidMount(){
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        });
        //console.log(res.data);
      });
  }  */
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            DELETE POST
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    //same as
   post: state.posts.find(post => post.id === id)

   /* posts: state.posts.find((post) => {
      return post.id === id;
    })*/
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch({type: 'DELETE_POST', id: id})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)