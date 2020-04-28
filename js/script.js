console.log('js 已引入')

// document.addEventListener('DOMContentLoaded', (event) => {
//     document.querySelectorAll('pre code').forEach((block) => {
//       hljs.highlightBlock(block);
//     });
//   });
//   document.addEventListener('load', (event) => {
//       console.log('load')
//     document.querySelectorAll('pre code').forEach((block) => {
//       hljs.highlightBlock(block);
//     });
//   });
hljs.initHighlightingOnLoad()