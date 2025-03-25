/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

((title) => {
  const headTitle = document.getElementById('head-title');
  const homeTitle = document.getElementById('home-title');
  headTitle.textContent = title;
  homeTitle.textContent = title;
})("Ramen For All");
