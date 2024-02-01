const coursesModel = {
  "intro-to-react-native": {
    id: "intro-to-react-native",
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: "alice-johnson",
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: "bob-smith",
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  "advanced-react-topics": {
    id: "advanced-react-topics",
    name: "Advanced React Topics",
    instructor: "Jane Smith",
    description: "Dive deeper into advanced topics in React development.",
    enrollmentStatus: "Open",
    thumbnail: "your.another.image.here",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Intermediate React knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "React Hooks and Context API",
        content: "Understanding and using React Hooks and Context API.",
      },
      {
        week: 2,
        topic: "Server-Side Rendering (SSR)",
        content: "Implementing SSR in React applications.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: "david-williams",
        name: "David Williams",
        email: "david@example.com",
      },
      {
        id: "eva-davis",
        name: "Eva Davis",
        email: "eva@example.com",
      },
      // Additional enrolled students...
    ],
  },
  "frontend-web-development": {
    id: "frontend-web-development",
    name: "Frontend Web Development",
    instructor: "Alice Brown",
    description: "Master the essentials of building modern web applications.",
    enrollmentStatus: "Closed",
    thumbnail: "your.additional.image.here",
    duration: "12 weeks",
    schedule: "Fridays, 5:00 PM - 7:00 PM",
    location: "Onsite",
    prerequisites: ["HTML", "CSS", "Basic JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "HTML and CSS Fundamentals",
        content: "Introduction to HTML and CSS for web development.",
      },
      {
        week: 2,
        topic: "JavaScript Basics",
        content: "Fundamental concepts of JavaScript programming.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: "frank-miller",
        name: "Frank Miller",
        email: "frank@example.com",
      },
      {
        id: "grace-turner",
        name: "Grace Turner",
        email: "grace@example.com",
      },
      // Additional enrolled students...
    ],
  },
  "data-science-fundamentals": {
    id: "data-science-fundamentals",
    name: "Data Science Fundamentals",
    instructor: "Michael Johnson",
    description:
      "An introduction to the foundations of data science and analysis.",
    enrollmentStatus: "Open",
    thumbnail: "your.data.science.image.here",
    duration: "10 weeks",
    schedule: "Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science, key concepts, and applications.",
      },
      {
        week: 2,
        topic: "Data Analysis with Pandas",
        content: "Exploring and manipulating data using the Pandas library.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: "hannah-smith",
        name: "Hannah Smith",
        email: "hannah@example.com",
      },
      {
        id: "john-miller",
        name: "John Miller",
        email: "john@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Add more courses as needed...
};

const course1 = {
  id: "intro-to-react-native",
  name: "Introduction to React Native",
  instructor: "John Doe",
  description:
    "Learn the basics of React Native development and build your first mobile app.",
  enrollmentStatus: "Open",
  thumbnail: "your.image.here",
  duration: "8 weeks",
  schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
  location: "Online",
  prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
  syllabus: [
    {
      week: 1,
      topic: "Introduction to React Native",
      content:
        "Overview of React Native, setting up your development environment.",
    },
    {
      week: 2,
      topic: "Building Your First App",
      content: "Creating a simple mobile app using React Native components.",
    },
    // Additional weeks and topics...
  ],
  students: [
    {
      id: "alice-johnson",
      name: "Alice Johnson",
      email: "alice@example.com",
    },
    {
      id: "bob-smith",
      name: "Bob Smith",
      email: "bob@example.com",
    },
    // Additional enrolled students...
  ],
};

const course2 = {
  id: "advanced-react-topics",
  name: "Advanced React Topics",
  instructor: "Jane Smith",
  description: "Dive deeper into advanced topics in React development.",
  enrollmentStatus: "Open",
  thumbnail: "your.another.image.here",
  duration: "10 weeks",
  schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
  location: "Online",
  prerequisites: ["Intermediate React knowledge"],
  syllabus: [
    {
      week: 1,
      topic: "React Hooks and Context API",
      content: "Understanding and using React Hooks and Context API.",
    },
    {
      week: 2,
      topic: "Server-Side Rendering (SSR)",
      content: "Implementing SSR in React applications.",
    },
    // Additional weeks and topics...
  ],
  students: [
    {
      id: "david-williams",
      name: "David Williams",
      email: "david@example.com",
    },
    {
      id: "eva-davis",
      name: "Eva Davis",
      email: "eva@example.com",
    },
    // Additional enrolled students...
  ],
};

const course3 = {
  id: "frontend-web-development",
  name: "Frontend Web Development",
  instructor: "Alice Brown",
  description: "Master the essentials of building modern web applications.",
  enrollmentStatus: "Closed",
  thumbnail: "your.additional.image.here",
  duration: "12 weeks",
  schedule: "Fridays, 5:00 PM - 7:00 PM",
  location: "Onsite",
  prerequisites: ["HTML", "CSS", "Basic JavaScript"],
  syllabus: [
    {
      week: 1,
      topic: "HTML and CSS Fundamentals",
      content: "Introduction to HTML and CSS for web development.",
    },
    {
      week: 2,
      topic: "JavaScript Basics",
      content: "Fundamental concepts of JavaScript programming.",
    },
    // Additional weeks and topics...
  ],
  students: [
    {
      id: "frank-miller",
      name: "Frank Miller",
      email: "frank@example.com",
    },
    {
      id: "grace-turner",
      name: "Grace Turner",
      email: "grace@example.com",
    },
    // Additional enrolled students...
  ],
};

const course4 = {
  id: "data-science-fundamentals",
  name: "Data Science Fundamentals",
  instructor: "Michael Johnson",
  description:
    "An introduction to the foundations of data science and analysis.",
  enrollmentStatus: "Open",
  thumbnail: "your.data.science.image.here",
  duration: "10 weeks",
  schedule: "Wednesdays, 6:00 PM - 8:00 PM",
  location: "Online",
  prerequisites: ["Basic Python knowledge"],
  syllabus: [
    {
      week: 1,
      topic: "Introduction to Data Science",
      content: "Overview of data science, key concepts, and applications.",
    },
    {
      week: 2,
      topic: "Data Analysis with Pandas",
      content: "Exploring and manipulating data using the Pandas library.",
    },
    // Additional weeks and topics...
  ],
  students: [
    {
      id: "hannah-smith",
      name: "Hannah Smith",
      email: "hannah@example.com",
    },
    {
      id: "john-miller",
      name: "John Miller",
      email: "john@example.com",
    },
    // Additional enrolled students...
  ],
};

exports.course = [course1, course2, course3, course4];
