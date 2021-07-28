import React, {useRef, useState, useEffect, useCallback} from 'react'
import {useSpring, useChain, animated} from 'react-spring'
import styled from 'styled-components' 
import {MdClose} from 'react-icons/md'
import Waves from "./Images/2021.png";
import './Modal.css'

const Modal = ({showModal, setShowModal}) => {
  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  const text4Ref = useRef();
  const imgRef = useRef();

  const text1Style = useAnimation(text1Ref);
  const text2Style = useAnimation(text2Ref);
  const text3Style = useAnimation(text3Ref);
  const text4Style = useAnimation(text4Ref);

  const imgStyle = useSpring({
    from: {
      opacity: 0,
      transform: "scale(1)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
    ref: imgRef,
  });


    const modalRef = useRef()
    
    //Clicking anywhere other than the modal closes
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    //Escape key will close modal
    const keyPress = useCallback(
        e => {
        if(e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
     );

    useChain(showModal ? [text1Ref, text2Ref, text3Ref, text4Ref, imgRef] :[0, showModal ? 0.1 : 0.6])

    return (
        <>
        {showModal ? (
          <div className="modal-background" ref={modalRef} onClick={closeModal} >
            <div className="modal-wrapper" showModal={showModal}>         
                <div className="modal-app">
                <animated.h1 className='h1' style={text1Style}>
                    Ready
                </animated.h1>
                <animated.h1 className='h1' style={text2Style}>
                    For
                </animated.h1>
                <animated.h1 className='h1' style={text3Style}>
                    2021
                </animated.h1>
                <animated.h1 className='h1' style={text4Style}>
                    ? ? ? ?
                </animated.h1>
                <animated.img className='image' style={imgStyle} src={Waves} alt='' />
                </div>
             <MdClose 
                size={32}
                className='modal-close' 
                onClick={() => setShowModal(prev => !prev)} />
            </div>
         </div>
        )
    : null}
    </>
    )
}

const useAnimation = (ref) => {
    const spring = useSpring({
      from: {
        opacity: 0,
        position: "absolute",
        transform: "scale(0.2)",
      },
      to: [
        {
          opacity: 1,
          transform: "scale(2.0)",
        },
        {
          opacity: 0,
          transform: "scale(0.2)",
        },
      ],
      ref: ref,
    });
    return spring;
  };

export default Modal;
