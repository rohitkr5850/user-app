import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserDetailsPage() {
  const { id } = useParams();
  const user = useSelector((state) => state.users.users.find((u) => u.id === parseInt(id)));

  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default UserDetailsPage;
