import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../Projects/Modal//Modal.js";
import "./HeroSection.css";

const Button = styled.button`
  color: #fff;
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  background: #141414;
  font-size: 24px;
  cursor: pointer;
  background-color: #fff;
  color: black;
  padding: 8px 20px;
  border: 1px solid var(--primary);
  transition: all 0.6s ease-out;

  &:hover {
    transition: all 0.3s ease-out;
    background: rgb(41, 113, 228);
    color: #242424;
    transition: 0.6s;
    border: 1px solid black;
  }
`;

function HeroComponent() {

  const [showModal, setShowModal]= useState(false)
  const opensModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className='hero-container'>
    <Modal showModal={showModal} setShowModal={setShowModal}/>
      <h1>ADVENTURES IN REACT</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          onClick={opensModal}
        >
          Cool Hooks Example <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroComponent;
