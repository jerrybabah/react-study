import React, { useEffect } from 'react';

const timer = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time)
  });
};

// 함수형 컴포넌트를 async function으로 만들 수 없다.
export default function Async() {
  // useEffect의 인자에 비동기 함수를 전달할 수 없다.
  useEffect(() => {
    async function logAfterTime(time) {
      await timer(time);
      console.log('log something after times');
    }
    logAfterTime(2000);
  });

  async function handleClick(e) {
    await timer(3000);
    console.log('you click button and wait seconds');
  }

  return (
    <>
      <h2>async component</h2>
      <button onClick={(e) => handleClick(e)}>click for testing async</button>
    </>
  )
}