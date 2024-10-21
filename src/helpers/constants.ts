import typingTestOverview1 from "../assets/TypingTest_overview_1.png";
import typingTestOverview2 from "../assets/TypingTest_overview_2.png";
import typingTestOverview3 from "../assets/TypingTest_overview_3.png";
import typingTestOverview4 from "../assets/TypingTest_overview_4.png";

import StarWarsOverview1 from "../assets/StarWars_overview_1.png";
import StarWarsOverview2 from "../assets/StarWars_overview_2.png";
import StarWarsOverview3 from "../assets/StarWars_overview_3.png";

import MobileChatOverview1 from "../assets/Chat_App_overview_1.png";
import MobileChatOverview2 from "../assets/Chat_App_overview_2.png";
import MobileChatOverview3 from "../assets/Chat_App_overview_3.png";
import MobileChatOverview4 from "../assets/Chat_App_overview_4.png";

import { Feature } from "../types/featureTypes";
import { ProjectType } from "../types/types";

export const keyTechnologiesTypingTestProject = [
  "React",
  "TypeScript",
  "Sass",
  "Vite",
  "Jest",
];

export const starWarstechnologies = [
  "Vite",
  "React",
  "TypeScript",
  "Jest",
  "React Testing Library",
  "React Flow",
];

export const mobilChatKeyTechnologies = [
  "React Native",
  "Expo",
  "React-navigation",
  "Reduxjs",
  "Jest",
  "TypeScript",
];

export const mySkills = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "React Native",
  "Next.js",
  "Node.js",
  "WebSockets",
  "Redux",
  "Material-UI",
  "Tailwind",
  "JEST",
  "React Testing Library",
  "GIT",
];

export const linkedInLink =
  "https://www.linkedin.com/in/dima-skydan-160010247/";
export const gitHubLink = "https://github.com/SkyDmytro";
export const cvLink =
  "https://drive.google.com/file/d/15h6cf67pk6qUQw2lC5Kcsu1PFJiNJKU9/view?usp=sharing";

export const typingTestOverviewScreenshots = [
  typingTestOverview1,
  typingTestOverview3,
  typingTestOverview4,
  typingTestOverview2,
];
export const descriptionTypingTestProject =
  "This project is an educational typing application inspired by MonkeyType. It helps users improve their typing speed and accuracy in an interactive, multi-language environment, while tracking key performance metrics like Words Per Minute (WPM), time, accuracy, and a breakdown of correct and incorrect characters.";

export const conclusionTypingTestProject =
  "This typing speed training web application helps users improve their typing skills through customizable test modes, multilingual support, and detailed performance metrics like WPM and accuracy. It offers an engaging and efficient solution for enhancing typing speed and accuracy. Explore the live demo and GitHub repo to see the project in action.";
export const keyFeaturesTypingTest: Feature[] = [
  {
    title: "Typing Test Modes",
    details: [
      "Words Mode: Users can practice typing based on specific word lists.",
      "Time Mode: Users can test their typing speed for a set duration.",
    ],
  },
  {
    title: "Multilingual Support",
    details: [
      "English: Includes a test with the top 1000 most frequently used English words.",
      "Ukrainian: Includes a test with the top 1000 most frequently used Ukrainian words.",
    ],
  },
  {
    title: "Customizable Test Durations",
    details: [
      "Support for different test lengths: 15 seconds, 30 seconds, 45 seconds, and 60 seconds.",
    ],
  },
  {
    title: "Statistics Tracking",
    details: [
      "Words Per Minute (WPM): Tracks typing speed.",
      "Time: Measures the time spent on the test.",
      "Accuracy: Tracks the percentage of correctly typed characters.",
      "Correct/Incorrect Characters: Detailed breakdown of accurate and inaccurate keystrokes.",
    ],
  },
];
export const starWarsScreenshots = [
  StarWarsOverview1,
  StarWarsOverview2,
  StarWarsOverview3,
];
export const descriptionStarWarsProject =
  "This Star Wars Database lets users explore a hero list with infinite scroll, automatically loading more heroes as they browse. Each hero's detailed connections to movies and starships are displayed through an interactive graph, offering an intuitive and engaging user experience. The project is designed for smooth performance and reliability, ensuring a dynamic and efficient interface for users.";

export const conclusionStarWarsProject =
  "The Star Wars Database project offers a smooth and interactive way for users to explore detailed information about their favorite Star Wars characters. With infinite scrolling and a visually engaging graph for hero connections, the app provides an enjoyable user experience. By leveraging modern development tools, this app showcases a performant and scalable way to present complex data in an engaging format.";
export const keyFeaturesStarWarsProject: Feature[] = [
  {
    title: "Infinite Scroll for Hero List",
    details: [
      "Automatically loads more heroes as the user scrolls down.",
      "Offers a continuous browsing experience without the need for pagination.",
    ],
  },
  {
    title: "Detailed Hero Information Displayed as a Graph",
    details: [
      "Clicking on a hero renders a graph using React Flow.",
      "The graph displays connections between the selected hero, movies they appear in, and the starships they traveled on.",
    ],
  },
];

export const descriptionChatAppProject =
  "The Chat App is an educational messaging platform designed to facilitate seamless communication. The primary goal of this project was to enhance my knowledge of WebSocket and React Native. It features easy chat creation, deletion, and real-time connectivity through a responsive WebSocket server, supporting multiple chat sessions and allowing for simultaneous conversations while maintaining an intuitive interface.";

export const conclusionChatAppProject =
  "As an educational project, the Chat App serves as a valuable learning tool. Through the development of this app, I improved my skills in WebSocket and React Native, gaining practical experience in building real-time communication applications while creating an enjoyable experience.";
export const keyFeaturesChatAppProject: Feature[] = [
  {
    title: "Adding a Chat",
    details: [
      "Users can easily add a new chat by pressing the 'Add' button at the bottom of the screen.",
      "A dialog box will prompt for a chat name; after entering it and clicking 'Add', the chat will be created .",
    ],
  },
  {
    title: "Deleting a Chat",
    details: [
      "Users can delete chats they have created themselves.",
      "The delete icon is only visible for user-created chats, and deleting will always remove the 4th chat in the list.",
    ],
  },
  {
    title: "Connecting to a Chat",
    details: ["To connect to a chat, users must enter the chat interface."],
  },
  {
    title: "Sending Messages",
    details: [
      "Users can send messages in the chat.",
      "Upon sending, they will receive the same response, confirming their connection to the WebSocket server.",
    ],
  },
];

export const chatAppScreenshots = [
  MobileChatOverview1,
  MobileChatOverview2,
  MobileChatOverview3,
  MobileChatOverview4,
];

export const starWarsProject: ProjectType = {
  name: "Star Wars Data Base",
  description: descriptionStarWarsProject,
  url: "https://star-wars-database-tt.netlify.app/",
  githubUrl: "https://github.com/SkyDmytro/star_wars_base",
  keyFeatures: keyFeaturesStarWarsProject,
  techStack: starWarstechnologies,
  conclusion: conclusionStarWarsProject,
  screenshots: starWarsScreenshots,
};

export const mobileChatProject: ProjectType = {
  name: "Mobile Chat App",
  description: descriptionChatAppProject,
  githubUrl: "https://github.com/SkyDmytro/star_wars_base",
  keyFeatures: keyFeaturesChatAppProject,
  techStack: mobilChatKeyTechnologies,
  conclusion: conclusionChatAppProject,
  screenshots: chatAppScreenshots,
};

export const TypingTestProject: ProjectType = {
  url: "https://skytype.vercel.app/",
  githubUrl: "https://github.com/SkyDmytro/typing_test",
  description: descriptionTypingTestProject,
  conclusion: conclusionTypingTestProject,
  name: "Typing Speed Training Web Application",
  screenshots: typingTestOverviewScreenshots,
  keyFeatures: keyFeaturesTypingTest,
  techStack: keyTechnologiesTypingTestProject,
};
