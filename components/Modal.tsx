// import { useState } from "react";

// export default function Modal() {
//   const [selectedPicture, setSelectedPicture] = useState(null);

//   const handlePictureChange = (event: any) => {
//     const file = event.target.files[0];
//     setSelectedPicture(file);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-8">
//         <div className="mb-4">
//           <h2 className="text-xl font-bold">Upload Picture</h2>
//         </div>
//         <div className="mb-4">
//           <input type="file" onChange={handlePictureChange} />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// interface ModalProps {
//   onClose: () => void;
// }

// export default function Modal({ onClose }: ModalProps) {
//   const [selectedPicture, setSelectedPicture] = useState(null);

//   const handlePictureChange = (event: any) => {
//     const file = event.target.files[0];
//     setSelectedPicture(file);
//   };

//   const handleClose = () => {
//     setSelectedPicture(null);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-8">
//         <div className="mb-4">
//           <h2 className="text-xl font-bold">Upload Picture</h2>
//         </div>
//         <div className="mb-4">
//           <input type="file" onChange={handlePictureChange} />
//         </div>
//         <div className="flex justify-end">
//           <button
//             className="bg-gray-200 px-4 py-2 rounded"
//             onClick={handleClose}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [selectedPicture, setSelectedPicture] = useState(null);

  const handlePictureChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedPicture(file);
  };

  const handleClose = () => {
    setSelectedPicture(null);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-modal-overlay">
        <div className="bg-white rounded-lg p-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Upload Picture</h2>
          </div>
          <div className="mb-4">
            <input type="file" onChange={handlePictureChange} />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-gray-200 px-4 py-2 rounded"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-modal-overlay {
          backdrop-filter: blur(4px);
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 999;
        }
      `}</style>
    </>
  );
}
