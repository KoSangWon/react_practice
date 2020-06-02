import React from 'react';

const CreateUser = ({username, email, onChange, onCreate, active}) => {
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
                active={active}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
                active={active}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default React.memo(CreateUser);