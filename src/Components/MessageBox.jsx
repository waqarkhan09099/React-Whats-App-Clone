import React from "react";
import {
  BsFillChatDotsFill,
  BsEmojiSmile,
  BsFillMicFill,
} from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

import "./MessageBox.css";

import { useEffect, useState } from "react";
import axios from "axios";

const MessageBox = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  let data;
  function sendMessage(e) {
    e.preventDefault();

    if (text === "") {
      return;
    }

    console.log("text: ", text);

    setMessages((prev) => {
      return [...prev, { sender: "user", text }];
    });

    axios
      .post(`https://dailogflow-integration.herokuapp.com/talktochatbot`, {
        text: text,
      })
      .then((response) => {
        let textMessages,
          imageUri,
          quickReplies = [];
        data = response.data.text.fulfillmentMessages;
        console.log("response", data);
        // console.log("response", data[1].text.text);

        {
          data.map((item, index) => {
            textMessages = item.text?.text;
            imageUri = item.image?.imageUri;
            quickReplies = item.quickReplies?.quickReplies;
            setMessages((prev) => {
              return [
                ...prev,
                {
                  sender: "bot",
                  text: textMessages,
                  image: imageUri,
                  suggestion: quickReplies,
                },
              ];
            });
          });
        }
        console.log(textMessages);

        console.log("After get Data;---", messages);
        e.target.reset();
        setText("");
      })
      .catch((error) => {
        console.log("error: ", error);

        setMessages((prev) => {
          return [
            ...prev,
            { sender: "bot", text: "dummy response from chatbot" },
          ];
        });
        e.target.reset();
        setText("");
      });
  }
  return (
    <>
      <div className="container">
        <div className="chatScreen">
          {/* ____________________________________________________________________________________ */}
          {/* <div key="eachMessageIndex-message" className="user">
            <div className="icon">
              <BsFillChatDotsFill />
            </div>
            <div className="message-content">hi Im Waqar</div>
          </div> */}

          {messages?.map(
            (eachMessage, eachMessageIndex) =>
              eachMessage.sender !== "bot" ? (
                <div key={`User-${eachMessageIndex}`} className="user">
                  <div className="icon">
                    <BsFillChatDotsFill />
                  </div>
                  <div className="message-content">{eachMessage.text}</div>
                </div>
              ) : (
                <div key={`bot-${eachMessageIndex}`} className="message-box">
                  <div className="icon">
                    <BsFillChatDotsFill />
                  </div>
                  <div className="message-content">
                    {eachMessage.text
                      ?.map((item, index) => <div className="text">{item}</div>)
                      .concat([
                        eachMessage.image?.map((item, index) => {
                          <div className="Card" key={`image-${index}`}>
                            <img src={eachMessage.image} alt="image/uri" />;
                          </div>;
                        }),
                      ])
                      .concat([
                        eachMessage.suggestion?.map((button) => (
                          <div className="suggestion " key={`sug-${button}`}>
                            <button className="suggestion ">{button}</button>
                          </div>
                        )),
                      ])}
                  </div>
                </div>
              )

            // eachMessage?.textMessages
            //   ?.map((eachText) => {

            //     <div key={`User-${eachText}`} className="user">
            //       <div className="icon">
            //         <BsFillChatDotsFill />
            //       </div>
            //       <div className="message-content">{eachText}</div>
            //     </div>;
            //   })
            //   .concat([
            //     eachMessage.imageUri ? (
            //       <div className="Card">
            //         <img src={eachMessage.imageUri} alt="image/uri" />
            //       </div>
            //     ) : null,

            //     eachMessage.quickReplies ? (
            //       <div className="suggestion ">
            //         {eachMessage.quickReplies.map((button) => (
            //           <button className="suggestion ">
            //             {button.quickReplies}
            //           </button>
            //         ))}
            //       </div>
            //     ) : null,
            //   ])
            // )

            // <div
            //   key={`${eachMessageIndex}-message`}
            //   className={eachMessage.sender !== "bot" ? "user" : "message-box"}
            // >
            //   <div className="icon">
            //     <BsFillChatDotsFill />
            //   </div>
            //   <div className="message-content">{eachMessage.text}</div>
            // </div>
          )}
        </div>
      </div>
      <div className="messageSenderBox">
        <button className="primaryBtn smile">
          <BsEmojiSmile />
        </button>
        <form onSubmit={sendMessage} className="chat-bar">
          <input
            type="text"
            placeholder="Enter your Message"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="primaryBtn">
            <IoMdSend />
          </button>
        </form>
        <button className="primaryBtn voice">
          <BsFillMicFill />
        </button>
      </div>
    </>
  );
};

export default MessageBox;
