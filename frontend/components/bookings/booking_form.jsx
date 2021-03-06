import React from 'react';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in_date: "",
      check_out_date: "",
      listing_id: this.props.listingId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearBookingForm = this.clearBookingForm.bind(this);
    this.renderBookingErrors = this.renderBookingErrors.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  clearBookingForm(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({
      check_in_date: "",
      check_out_date: "",
      listing_id: this.props.listingId,
    });
  }

  renderBookingErrors() {
    return(
      <ul>
        {this.props.bookingErrors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.createBooking(this.state);
  }

  render () {
    return (
      <div className="booking-form">
        <form onSubmit={this.handleSubmit}>

          {this.props.bookingErrors && (
            <ul className="errors">
              {this.renderBookingErrors()}
            </ul>
          )}

          <article className="booking-form-dates group">
            <div>
              <span className="check-in">
                <span className="date-label-checkin">Check In: </span>
                <input
                  className="standard-input"
                  type="date"
                  value={this.state.check_in_date}
                  placeholder="Check-In"
                  onChange={this.update('check_in_date')}
                />
              </span>
            </div>
            <div>
              <span className="check-out">
                <span className="date-label-checkout">Check Out: </span>
                <input
                  className="standard-input"
                  type="date"
                  value={this.state.check_out_date}
                  placeholder="Check-Out"
                  onChange={this.update('check_out_date')}
                />
              </span>
            </div>
          </article>
          <div>
            <button onClick={this.handleSubmit} className = "form-button" type="submit">Request</button>
            <button className='header-button' onClick={this.clearBookingForm}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookingForm;
