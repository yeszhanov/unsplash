import React from "react"

import "./Modal.css"

const Modal = ({ isOpen, onCancel, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modalOverlay">
          <div className="modalWindow">
            <div className="modalHeader">
              <button onClick={onCancel} className="modalClose">
                x
              </button>
            </div>
            <div className="modalBody">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
