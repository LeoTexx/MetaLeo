import { useState } from "react";
import { useMoralis } from "react-moralis";
import Modal from "react-modal";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const updateUsername = (e) => {
    e.preventDefault();
    if (!username) return;

    setUserData({ username });
    closeModal();
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(user.getUsername());

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="absolute top-5 right-5  ">
      <button
        disable={isUserUpdating}
        onClick={openModal}
        className="hover:text-pink-700 transition text-xs  "
      >
        Change your Username
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Change Username Modal"
        defaultStyles={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: '"Press Start 2P"',
            zIndex: 999,
          },
        }}
      >
        <div
          className=" border-2 border-pink-700 
    bg-black text-pink-500 font-press p-4 rounded-lg text-xs lg:text-xl text-center"
        >
          <h1>Change your Username</h1>
          <h3>{`Current: ${user.getUsername()}`}</h3>
          <form className="flex h-full flex-col items-center justify-center space-y-4 ">
            <input
              className="mt-4 w-[80%] bg-gray-800 p-5 rounded-full h-[2rem] lg:h-[3rem] outline-none focus:outline-pink-500 border-2 border-pink-700"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              className="border-2 border-pink-500  bg-black rounded-full py-6 px-12 mt-6 font-bold  text-sm lg:text-xl transition-all duration-400 hover:shadow-pink-900 hover:shadow-lg hover:-translate-y-2 active:-translate-y-1 active:shadow-sm"
              type="submit"
              onClick={updateUsername}
            >
              Update
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default ChangeUsername;
