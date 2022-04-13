interface ITodosItem {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

export const TODOS_MOCK: ITodosItem[] = [
  {
    id: '1',
    title: 'Task 1',
    description:
      "There's saying, yesterday is history, tomorrow is mystery, but today's the gift",
    isDone: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description:
      "There's saying, yesterday is history, tomorrow is mystery, but today's the gift",
    isDone: true,
  },
  {
    id: '3',
    title: 'Task 3',
    description:
      "There's saying, yesterday is history, tomorrow is mystery, but today's the gift",
    isDone: false,
  },
  {
    id: '4',
    title: 'Task 4',
    description:
      "There's saying, yesterday is history, tomorrow is mystery, but today's the gift",
    isDone: true,
  },
  {
    id: '5',
    title: 'Task 5',
    description:
      "There's saying, yesterday is history, tomorrow is mystery, but today's the gift",
    isDone: false,
  },
  {
    id: '6',
    title: 'Task 6',
    description:
      "There's saying, yesterday is history, tomorrow is mystery, but today's the gift",
    isDone: false,
  },
  {
    id: '7',
    title: 'Task 7',
    description:
      "There's saying, yesterday is history, tomorrow is mystery, but today's the gift",
    isDone: false,
  },
  {
    id: '8',
    title: 'Task 8',
    description:
      "There's saying, yesterday is history, tomorrow is mystery, but today's the gift",
    isDone: false,
  },
];
