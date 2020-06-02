import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  };
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'abc',
        email: 'abc@gmail.com'
    }, {
        id: 2,
        username: 'efef',
        email: 'efef@gmail.com'
    }, {
        id: 3,
        username: 'glgl',
        email: 'glgl@gmail.com'
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user={
      id: nextId.current,
      username,
      email
    };
//두가지 방법 (배열에 원소 삽입)(push는 사용하면 안됨.update가 안된다.)
    //setUsers([...users, user]);//배열에 원소삽입(spread연산자사용)
    setUsers(users.concat(user));//배열에 원소삽입(concat연산자사용)

    setInputs({
      username:'',
      email:'',
    })
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }


  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
