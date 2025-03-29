/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

////
// Data Injection
////

((title) => {
  const headTitle = document.getElementById('js-head-title');
  const homeTitle = document.getElementById('js-home-title');
  headTitle.textContent = title;
  homeTitle.textContent = title;
})("Ramen For All");


// (()=> {
const toggler = () => {
  const collapsable = document.getElementById('js-collapsable-footer-refs');
  collapsable.classList.toggle('d-none');  
}
globalThis.toggler = toggler;
// })();
