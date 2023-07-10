// --------------------------------------------------------------------------
// Promise, Async await -> 비동기 함수

function main() {
  console.log('start!');

  //Promise
  delayPromise()
    .then(async()=> {
      console.log('1s')
      await delayPromise()
    })
    .then(async()=> {
      console.log('2s')
      await delayPromise()
    })
    .then(async()=> {
      console.log('3s')
      await delayPromise(1500)
    })
    .then(async()=> {
      console.log('4.5s')
      await delayPromise()
    })

  // callback hell
  // 참고: https://bit.ly/3r5iUfe
  delay(() => {
    console.log('1s');
    delay(() => {
      console.log('2s');
      delay(() => {
        console.log('3s');
        delay(() => {
          console.log('4s');
        });
      });
    });
  });
}

function delay(callback, time = 1000) {
  setTimeout(callback, time);
}

function delayPromise(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

main();
