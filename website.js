const block1 = document.querySelector('.block-1');
const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
  block.addEventListener('mouseenter', () => {
    blocks.forEach(otherBlock => {
      otherBlock.style.backgroundColor = '';
    });
    block.style.backgroundColor = 'white';
  });
  
  block.addEventListener('mouseleave', () => {
    block.style.backgroundColor = '';
  });
});

block1.addEventListener('mouseleave', () => {
  blocks.forEach(block => {
    block.style.backgroundColor = '';
  });
});

