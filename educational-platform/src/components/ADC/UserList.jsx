// import React from 'react';
// import { ListGroup, Button } from 'react-bootstrap';

// function UserList({ users, onEditUser }) {
//   return (
//     <ListGroup className="mt-3">
//       {users.map(user => (
//         <ListGroup.Item key={user.id}>
//           {user.name} ({user.email})
//           <Button variant="secondary" className="ms-2" onClick={() => onEditUser(user)}>Edit</Button>
//         </ListGroup.Item>
//       ))}
//     </ListGroup>
//   );
// }

// export default UserList;
import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    try {
      const res = await axios.get(`/api/auth/users?page=${page}&limit=${usersPerPage}`);
      setUsers(res.data.users);
      setTotalUsers(res.data.totalUsers);
    } catch (err) {
      console.error('Error fetching users:', err);
      setUsers([]); // Ensure users is set to an empty array on error
      setTotalUsers(0); // Ensure totalUsers is set to 0 on error
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalUsers / usersPerPage) || 1; // Ensure totalPages is at least 1

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => (
            <tr key={user._id}>
              <td>{(currentPage - 1) * usersPerPage + index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => handlePageChange(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default UserList;