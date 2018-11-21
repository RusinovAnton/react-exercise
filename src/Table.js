import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Avatar</td>
            <td>Name</td>
            <td>Gender</td>
            <td>Age</td>
            <td>Email</td>
            <td>IP</td>
            <td>Registered</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(avatar)</td>
            <td>(first_name last_name)</td>
            <td>(gender)</td>
            <td>(birthDate)</td>
            <td>(email emailValidated)</td>
            <td>(ip_address)</td>
            <td>(created_at) ago</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table
