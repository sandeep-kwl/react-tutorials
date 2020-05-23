import React, { Component } from 'react';
import List from './List';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {},
      list: []
    };
  }

  onChange = e => {
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        [e.target.name]: e.target.value
      }
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { list, form } = this.state;

    this.setState({
      list: [...list, form],
      form: {}
    });

    // form = { name:"Sandeep", profile:"Lead consultant" }
    // list = [{name:"Sandeep", profile:"Lead consultant"}, {name:"Rajesh", profile:"Lead consultant"}, ...]
  };

  render() {
    const { form, list } = this.state;

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
            <label htmlFor="exampleInputPassword1">Profile</label>
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

        {/* Below, the list component is called to show data table */}
        <List list={list} />
      </>
    );
  }
}

export default Profile;
