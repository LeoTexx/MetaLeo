import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

function Messages() {
  const { user } = useMoralis();
  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt"),
    [],
    { live: true }
  );
  const endOFMessagesRef = useRef(null);

  return (
    <div className="pb-56 ">
      <div className="space-y-6 p-4 ">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOFMessagesRef={endOFMessagesRef} />
      </div>
      <div ref={endOFMessagesRef} className="text-center text-gray-300 mt-5">
        <p>That's all for now {user.getUsername()}!🚀🎉 </p>
      </div>
    </div>
  );
}

export default Messages;
