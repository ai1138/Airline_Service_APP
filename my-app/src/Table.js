import React, {Component} from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Flight Number</th>
            <th>Departure Location</th>
            <th>Arrival Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>*Airline from DB* 1 </td>
            <td>Flight Num from DB* 1</td>
            <td>Departure Loc from DB</td>
            <td>Arrival Loc from DB</td> 
          </tr>
          <tr>
            <td>For</td>
            <td>Formatting</td>
          </tr>
          <tr>
            <td>Purposes</td>
            <td>Only</td>
          </tr>
          <tr>
            <td>Abed</td>
            <td>Hellen</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table