const questions = [
  {
    id: 1,
    user: 'You',
    title: 'How do I use React Navigation?',
    body: 'I am having trouble setting up the Stack Navigator. Can someone provide guidance?',
    answers: [
      {
        id: 1,
        user: 'John Doe',
        body: 'You can check the React Navigation documentation for detailed instructions.',
      },
      {
        id: 2,
        user: 'Jane Smith',
        body: 'You can also watch some video tutorials on YouTube.',
      },
    ],
  },
  {
    id: 2,
    user: 'John Doe',
    title: 'What is the difference between state and props in React?',
    body: 'I am confused about when to use state and when to use props. Can someone explain?',
    answers: [
      {
        id: 1,
        user: 'Jane Smith',
        body: 'State is used to manage internal component state, while props are used to pass data from parent to child components.',
      },
      {
        id: 2,
        user: 'You',
        body: 'Additionally, state can be updated using setState(), while props are read-only.',
      },
    ],
  },
];

export default questions;
