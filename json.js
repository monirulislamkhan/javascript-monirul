let x;
const post = {
  id: 10,
  title: 'Title 1',
  postDes: 'lorem ipsum content for test',
};

const str = JSON.stringify(post);
// x = str;
// x = s

console.log(str.id);
const obj = JSON.parse(str);
console.log(obj.id);

// JSON & ARRAYS
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

x = posts;
x = JSON.stringify(posts);

console.log(x);
