import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from '../../utils';

const List = props => {
  const { list } = props;

  return (
    <table className="table mb-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Position</th>
        </tr>
      </thead>
      <tbody>
        {isEmpty(list) ? (
          <tr className="text-center">
            <td colSpan="3">No record found.</td>
          </tr>
        ) : (
          list.map((employee, index) => (
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps)(List);
