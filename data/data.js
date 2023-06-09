const courses = [
  {
    id: '1',
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming with Python',
    roadmap: [
      {
        id: 1,
        key: 'Java Programming',
        value:
          'https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q',
      },
      {
        id: 2,
        key: 'Python Programming',
        value:
          'https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME',
      },
      {
        id: 3,
        key: 'C++ Course',
        value:
          'https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL',
      },
    ],
    notes: [],
    books: [],
    PYQs: [],
  },
  {
    id: '2',
    title: 'Web Development',
    description:
      'Learn to build web applications with HTML, CSS, and JavaScript',
    roadmap: [
      {
        id: 1,
        key: 'Frontended development roadmap',
        value: 'https://roadmap.sh/frontend',
      },
      {
        id: 2,
        key: 'Frontended devlopment roadmap',
        value: 'https://roadmap.sh/backend',
      },
      {
        id: 3,
        key: 'Complete Playlist for web devlopment',
        value:
          'https://www.youtube.com/playlist?list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1',
      },
    ],
    notes: [
      {
        id: 1,
        key: 'Web development notes',
        values:
          'https://mrcet.com/downloads/digital_notes/IT/WEB%20APPLICATION%20DEVELOPMENT.pdf',
      },
    ],
    books: [],
    PYQs: [],
  },
  {
    id: '3',
    title: 'Data Science',
    description: 'Learn to analyze data and make predictions using Python',
    roadmap: [
      {
        id: 1,
        key: 'Introduction to Programming Concepts',
        value: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
      },
      {
        id: 2,
        key: 'Conditional Statements and Loops',
        value: 'https://www.youtube.com/watch?v=6iF8Xb7Z3wQ',
      },
      {
        id: 3,
        key: 'Functions and Modules',
        value: 'https://www.youtube.com/watch?v=9Os0o3wzS_I',
      },
      {
        id: 4,
        key: 'Arrays and Lists',
        value: 'https://www.youtube.com/watch?v=gG3Ju6spdJ4',
      },
      {
        id: 5,
        key: 'Complete Course Playlist',
        value:
          'https://www.youtube.com/playlist?list=PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1',
      },
    ],
    notes: [
      {
        id: 1,
        key: 'Data Science Notes',
        value:
          'https://mrcet.com/downloads/digital_notes/CSE/II%20Year/DS/Introduction%20to%20Datascience%20[R20DS501].pdf',
      },
    ],
    books: [],
    PYQs: [],
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description:
      'Learn to build mobile applications for iOS and Android with React Native',
    roadmap: [
      {
        id: 1,
        key: 'complete roadmap for android development:',
        value: 'https://roadmap.sh/roadmaps/android/roadmap.png',
      },
      {
        id: 2,
        key: 'Introdunction to mobile app development:',
        value:
          'https://www.youtube.com/watch?v=_P7wHN_kOv4&list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR',
      },
      {
        id: 3,
        key: 'Learning Javascript:',
        value:
          'https://www.youtube.com/watch?v=X52b-8y2Hf4&list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR&index=2',
      },
      {
        id: 4,
        key: 'Learning React Native basics:',
        value:
          'https://www.youtube.com/watch?v=7O43VDOlQ_o&list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR&index=4',
      },
      {
        id: 5,
        key: 'Lists,User input and Debugging concept:',
        value:
          'https://www.youtube.com/watch?v=-E1tQPQSAxc&list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR&index=6',
      },
      {
        id: 6,
        key: 'Data, Expo and redux concept:',
        value:
          'https://www.youtube.com/watch?v=jWwOTg35COs&list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR&index=9',
      },

      {
        id: 7,
        key: 'Complete course:',
        value:
          'https://www.youtube.com/playlist?list=PLhQjrBD2T382gdfveyad09Ierl_3Jh_wR',
      },
    ],
    notes: [
      {
        id: 1,
        key: 'Notes of Mobile devlopment:',
        value:
          'https://mrcet.com/downloads/digital_notes/IT/(R17A1206)%20Mobile%20Application%20Development.pdf',
      },
    ],
    books: [],
    PYQs: [],
  },
  {
    id: '5',
    title: 'Computer Networks',
    description: 'Computer Network course',
    roadmap: [
      {
        id: 1,
        key: 'Computer Network Videos:',
        value:
          'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_',
      },
      {
        id: 2,
        key: 'Computer Network Practical Videos:',
        value:
          'https://www.youtube.com/playlist?list=PLNACxJ6nKQvxOtVKUdaI4CLMXjaIx6DRa',
      },
      {
        id: 3,
        key: 'Computer Network written Content:',
        value: 'https://www.javatpoint.com/computer-network-tutorial',
      },
    ],
    notes: [
      {
        id: 1,
        key: 'Computer Network Notes:',
        value:
          'https://mrcet.com/downloads/digital_notes/CSE/III%20Year/COMPUTER%20NETWORKS%20NOTES.pdf',
      },
    ],
    books: [],
    PYQs: [],
  },
  {
    id: '6',
    title: 'Computer Organization and architecture',
    description: 'COA Full Course',
    roadmap: [
      {
        id: 1,
        key: 'COA Videos:',
        value:
          'https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX',
      },
    ],
    notes: [
      {
        id: 1,
        key: 'COA content:',
        value:
          'https://www.javatpoint.com/computer-organization-and-architecture-tutorial',
      },
      {
        id: 2,
        key: 'COA notes:',
        value:
          'https://mrcet.com/downloads/digital_notes/IT/R18A1201%20COA.pdf',
      },
    ],
    books: [],
    PYQs: [],
  },
  {
    id: '7',
    title: 'Software engineering',
    description: 'software engineering(SE) Full Course',
    roadmap: [
      {
        id: 1,
        key: 'SE Videos:',
        value:
          'https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2',
      },
    ],
    notes: [
      {
        id: 1,
        key: 'SE content:',
        value: 'https://www.javatpoint.com/software-engineering',
      },
      {
        id: 2,
        key: 'SE notes:',
        value:
          'https://mrcet.com/downloads/digital_notes/CSE/III%20Year/Software%20Engineering.pdf',
      },
    ],
    books: [],
    PYQs: [],
  },
];

export default courses;
