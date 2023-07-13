/**
 * @prettier
 */

const PICTURES = [
  {
    name: 'Beauty',
    description: 'The most beautiful cat.',
    path: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHx8fHwxNjg4NjQ5NDIyfDA&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'home', 'furniture', 'red'],
    id: '0001',
  },
  {
    name: 'Friendship',
    description: 'The most friendly cat.',
    path: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHw2fHxjYXR8ZW58MHx8fHwxNjg4NjQ5NDIyfDA&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'friends', 'happiness', 'blue'],
    id: '0002',
  },
  {
    name: 'Laying cat',
    description: 'The cat is laying on the floor.',
    path: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHw5fHxjYXR8ZW58MHx8fHwxNjg4NjQ5NDIyfDA&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'laying', 'red', 'floor'],
    id: '0003',
  },
  {
    name: 'Green',
    description: 'A cat and a green background.',
    path: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHx8fHwxNjg4NjQ5NDIyfDA&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'green'],
    id: '0004',
  },
  {
    name: 'Spying',
    description: 'This cat is looking at you.',
    path: 'https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHw1fHxjYXR8ZW58MHx8fHwxNjg4NjQ5NDIyfDA&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'spy', 'green', 'window'],
    id: '0005',
  },
  {
    name: 'Fashionista',
    description: 'This cat is a fashion icon.',
    path: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHw0fHxjYXR8ZW58MHx8fHwxNjg4NjQ5NDIyfDA&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'fashion', 'glasses', 'gray', 'grey'],
    id: '0006',
  },
  {
    name: 'CozyCat',
    description: 'A cat on a couch.',
    path: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHwxNHx8Y2F0fGVufDB8fHx8MTY4ODY1ODI0OHww&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'couch', 'furniture'],
    id: '0007',
  },
  {
    name: 'Mr. Happy',
    description: 'A happy one.',
    path: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHwxMnx8Y2F0fGVufDB8fHx8MTY4ODY1ODI0OHww&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'smile', 'happiness', 'floor'],
    id: '0008',
  },
  {
    name: 'Summertime',
    description: 'Maybe this one lives in a desert.',
    path: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHwxM3x8Y2F0fGVufDB8fHx8MTY4ODY1ODI0OHww&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'blue', 'sky', 'blue'],
    id: '0009',
  },
  {
    name: 'Mysterious',
    description: "What she's looking at?",
    path: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzE0NDB8MHwxfHNlYXJjaHwxNXx8Y2F0fGVufDB8fHx8MTY4ODY1ODI0OHww&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['cat', 'mystery', 'black', 'blue'],
    id: '0010',
  },
];

export default PICTURES;
