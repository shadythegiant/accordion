import { useState } from "react";
import { faqs } from "./faqs";
export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <AccordionItem
          num={i + 1}
          title={item.title}
          text={item.text}
          key={i}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
  return (
    <div className={isOpen ? `item open` : "item"} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num}` : { num }}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen ? (
        <div className="content-box">
          <p className="text">{text}</p>
        </div>
      ) : null}
    </div>
  );
}
