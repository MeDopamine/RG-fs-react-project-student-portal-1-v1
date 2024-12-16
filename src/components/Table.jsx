const Table = ({ students }) => {
  // console.log(props);
  // const rows = [];

  // for (let i = 0; i < props.length; i++) {
  //     const item = props[i];
  //     rows.push(
  //         <tr key={i}>
  //             <td>{i + 1}</td>
  //             <td>{item.fullname}</td>
  //             <td>{item.birthDate}</td>
  //             <td>{item.gender}</td>
  //             <td>{item.faculty}</td>
  //             <td>{item.programStudy}</td>
  //             <td><button type="button" className="delete-btn">Delete</button></td>
  //         </tr>
  //     );
  // }

  return (
    <table id="table-student">
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Faculty</th>
          <th>Program Study</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index} >
            <td>{index + 1}</td>
            <td>{student.fullname}</td>
            <td>{student.birthDate}</td>
            <td>{student.gender}</td>
            <td>{student.faculty}</td>
            <td>{student.programStudy}</td>
            <td><button type="button" className="delete-btn">Delete</button></td>
          </tr>
        ))}
        {/* {rows} */}
      </tbody>
    </table >
  );
};

export default Table;
