import React, {useState , useRef} from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });

    const {name, nickname} = inputs;

    const nameInput = useRef();

    const onChange = (e) => {
        const {name, value} = e.target;
        // console.log(e.target.name);
        // console.log(e.target.value);
        setInputs( {
            ...inputs,
            [name]: value
        });

        // nextInputs[name] = value;
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();//다시 focus를 이름입력 하는 input으로 넘어옴.
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;