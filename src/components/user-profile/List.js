import React from 'react';
import { isEmpty } from '../../utils';

const List = ({ list }) => {
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

export default List;
