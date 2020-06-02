import React, {useRef, useState, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

const countActiveUsers = (users) => {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}


function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const {username, email} = inputs;
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }, [inputs]);
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'abc',
        email: 'abc@gmail.com',
        active: true,
    }, {
        id: 2,
        username: 'efef',
        email: 'efef@gmail.com',
        active: false,
    }, {
        id: 3,
        username: 'glgl',
        email: 'glgl@gmail.com',
        active: false,
    }
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user={
      id: nextId.current,
      username,
      email,
      active:true
    };
//두가지 방법 (배열에 원소 삽입)(push는 사용하면 안됨.update가 안된다.)
    //setUsers([...users, user]);//배열에 원소삽입(spread연산자사용)
    setUsers(users.concat(user));//배열에 원소삽입(concat연산자사용)

    setInputs({
      username:'',
      email:'',
    })
    nextId.current += 1;
  },[username, email, users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(user => user.id === id
      ? {...user, active: !user.active}
      : user
      ));
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);//users가 바뀔 때만 변경

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
