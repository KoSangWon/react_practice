import React from 'react';

const User = React.memo(function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    // useEffect(() => {
    //     console.log("컴포넌트가 화면에 나타남.");
    //     //props -> state
    //     //REST API
    //     //D3 Video.js
    //     //setInterval, setTimeout
    //     return () => {
    //         //clearInterval, clearTimeout
    //         //라이브러리 인스턴스 제거
    //         console.log("컴포넌트가 화면에서 사라짐.");
    //     }
    // }, []);

    // useEffect(() => {
    //     console.log('user값이 설정됨')
    //     console.log(user);
    //     return () => {
    //         console.log('user값이 바뀌기 전')
    //         console.log(user);
    //     }
    // }, [user]);//user인자 사용하는 경우.


    // useEffect(() => {
    //     console.log(user);
    // }, [user])//전부다 뜸.


    return (
        <div>
            <b style={{
                cursor: 'pointer',
                color: active ? 'green':'black'
            }}
            onClick={() => onToggle(id)}
        >{username}</b>
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
});


const UserList = ({users, onRemove, onToggle}) => {

    return (
        <div>
            {
                users.map((user) => (
                    <User 
                        user={user} 
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))
            }
        </div>
    )
}

export default React.memo(UserList);