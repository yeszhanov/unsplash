import React, { useState } from "react"
import Modal from "./Modal"

const ImageWrapper = ({ url }) => {
  const [isOpen, setTrigger] = useState(false)

  const changeModalState = () => {
    setTrigger(!isOpen)
  }
  return (
    <div className="image-item">
      <img src={url} onClick={() => changeModalState()} />
      <Modal isOpen={isOpen} onCancel={() => changeModalState()}>
        <img src={url} />
      </Modal>
    </div>
  )
}

export default ImageWrapper
