import todoLogo from "../../assets/vulogo.png";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState, useEffect } from "react";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  const useTypewriter = (text, speed = 300) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }, [text, speed]);

    return displayText;
  };
  const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);

    return <p>{displayText}</p>;
  };

  return (
    <header className={styles.header}>
      <Typewriter text='本ー日のやること' />

      <img src={todoLogo} />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder='新しいタスク'
          type='text'
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          作成する <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
