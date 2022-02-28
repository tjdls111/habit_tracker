import React, { memo } from "react";
import "../App.css";

const CreateForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault(); // 기본 기능 취소
    // console.log('submit!!');
    const name = inputRef.current.value;
    name && props.onAdd(name); // 이름 받아왔으면, onAdd에 넘김
    inputRef.current.value = "";
  };

  return (
    <form ref={formRef} action={onSubmit} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="만들고 싶은 습관을 입력하세요!"
      />
      <button className="input-btn">추가하기</button>
    </form>
  );
});

export default CreateForm;
