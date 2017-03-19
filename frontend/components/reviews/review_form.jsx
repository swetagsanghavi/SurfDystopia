import React from 'react';
import Stars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
    this.updateStars = this.updateStars.bind(this);
    this.clearReviewForm = this.clearReviewForm.bind(this);
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchReview(this.props.params.reviewId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.review);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateStars(newRating) {
    this.setState({
      title: "",
      body:"",
      rating: 0
    });
  }

  clearReviewForm() {
     this.setState({
       title: "",
       body:"",
       rating:0
     });
 }


  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.clearReviewForm();
  }

  render () {
    const text = this.props.formType === 'new' ? "Review Your Host" : "Update Your Review";
    return (
      <div className="review-form">
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2 className="rating">How Was Your Host?</h2>
              <Stars
                className="stars"
                count={5}
                char={"⚙"}
                size={32}
                value={this.state.rating}
                onChange={this.updateStars}
                color1={'#585c6c'}
                color2={'#b48395'} />
            </div>
            <span className="title">
            <input
              className="standard-input"
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={this.update('title')} />
            </span>
            <span className="body ">
            <textarea
              className="standard-input"
              value={this.state.body}
              onChange={this.update('body')}
              placeholder="Tell us about your host..." />
            </span>

          <span className="form-button">
            <button className = "form-button" type="submit">Submit</button>
            <button className='cancel' onClick={this.clearReviewForm}>Cancel</button>

          </span>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
