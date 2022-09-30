import Modal from "react-modal";
import { useState } from "react";
import { GrFormAdd } from "react-icons/gr";
import { Form } from "../components/form/form";
import "./Header.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "40rem",
    height: "50rem",
    transform: "translate(-50%, -50%)",
    backgroundColor: " rgba(0, 0, 0, 0.8)",
    borderRadius: "15px",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");
export function Header({ getAll }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  
  return (
    <>
      <header className="header">
       <section className="header__section">
          <button className="modal__button" onClick={handleModal} >
            <GrFormAdd size={28} /> Add Anime
          </button>
        </section>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="form Create"
      >
        <Form getAll={getAll} handleModal={handleModal} />
        
      </Modal>
    </>
  );
}
// import "./Header.css";
// import { useState } from "react";
// import Modal from "react-modal";
// import { FaPlus } from "react-icons/fa";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     width: "30rem",
//     height: "40rem",
//     marginRight: "-50%",
//     paddingTop: "30px",
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//     transform: "translate(-50%, -50%)",
//     textAlign: "center",
//   },

//   overlay: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
// };
// Modal.setAppElement("#root");

// export function Header() {
//   const [modalIsOpen, setmodalIsOpen] = useState(false);

//   function handleModal() {
//     setmodalIsOpen(!modalIsOpen);
//   }
//   return (
    
//       <div>
//         <header>
//           <section>
//             <img src="../new.png" alt="logo" />
//           </section>
//           <section>
//             <button onClick={handleModal()}>
//               <FaPlus size={30} /> Add Anime
//             </button>
//           </section>
//         </header>
      
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={handleModal}
//         style={customStyles}
//         contentLabel="Create Anime"
//       ></Modal>
//       </div>
    
//   );
// }
