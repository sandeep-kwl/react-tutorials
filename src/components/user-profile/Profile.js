import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { addProfile } from '../../store/actions';

class Profile extends Component {
  state = {
    form: {},
    redirect: false
  };

  onChange = e => {
    const targetValue = { [e.target.name]: e.target.value };

    this.setState(prevState => ({
      form: { ...prevState.form, ...targetValue }
    }));
  };

  submitForm = e => {
    e.preventDefault();

    this.props.addProfile(this.state.form);
    this.setState({ redirect: true });
  };

  render() {
    const { form, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/list" />;
    }

    return (
      <>
        <form className="mb-4" action="post">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name || ''}
              onChange={this.onChange}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter fullname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">position</label>
            <input
              type="text"
              name="position"
              value={form.position || ''}
              onChange={this.onChange}
              className="form-control"
              placeholder="Enter Profile"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.submitForm}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default connect(
  null,
  { addProfile }
)(Profile);
