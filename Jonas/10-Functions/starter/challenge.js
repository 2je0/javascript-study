'use strict';
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   displayResults(type = 'string') {
//     if (type === 'string') {
//       console.log(`Poll results are ${this.answers}.`);
//     } else if (type === 'array') {
//       console.log(this.answers);
//     }
//   },
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}`)
//     );
//     typeof answer === 'number' &&
//       +answer < this.options.length &&
//       this.answers[+answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const data1 = [1, 2, 3, 4, 5, 6];
// poll.displayResults.call({ answers: data1 });
// poll.displayResults.call({ answers: data1 }, 'array');
let ch;

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  header.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
