'use client';
import { useState } from 'react';
import { data } from '../leavedata';
const Leave = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name);
    // if no value, do nothing
    if (!name) return;
    // if value, setup new user and add to current users
    const fakeId = Date.now();
    console.log(fakeId);
    // const newUser = { id: fakeId, name: name };
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    // set back to empty
    setName('');
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4 className='font-dosis text-3xl text-center mb-4 capitalize'>
          Leave Request Form
        </h4>
        <h4 className='font-quicksand mb-2 text-xs font-bold capitalize'>
          Kindly Add your name for Leave Request and be patient while the admin
          approves
        </h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
            id='name'
          />
        </div>

        <button type='submit' className='btn btn-block mt-8 ml-56'>
          submit
        </button>
      </form>
      {/* render users */}
      <h2 className='font-quicksand text-center font-bold text-3xl'>
        Pending Leave Requests
      </h2>

      {users.map((user) => {
        return (
          <div
            key={user.id}
            className='flex flex-col  justify-center items-center rounded mb-7'
          >
            <h4 className='font-dosis mt-8 capitalize text-center text-xl'>
              {user.name}
            </h4>
            <button onClick={() => removeUser(user.id)} className='btn mt-4 '>
              Approve
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Leave;