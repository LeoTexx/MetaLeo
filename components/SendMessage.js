import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOFMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        userName: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        ((message) => {},
        (error) => {
          console.error(error.message);
        })
      );

    endOFMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 max-w-2xl px-6 py-4 shadow-xl rounded-full border-4 border-pink-700">
      <input
        type="text"
        name="SendMessage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()} ...`}
        className="flex-grow  outline-none bg-transparent text-white placeholder-gray-300 pr-5"
      />
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-[#e36493]"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
