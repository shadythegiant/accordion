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
  const [currOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <AccordionItem
          num={i + 1}
          title={item.title}
          text={item.text}
          key={i}
          currOpen={currOpen}
          onOpen={setIsOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, currOpen, onOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    if (!isOpen) {
      onOpen(num);
    } else {
      onOpen(null);
    }
  }

  const isOpen = num === currOpen;
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
