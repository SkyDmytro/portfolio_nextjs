import { highlightText } from "../helpers/functions";

export const MobileChatDescription = () => {
  return (
    <span>
      This is a chat application developed using {highlightText("React Native")}{" "}
      and {highlightText("Expo")}. The app enables users to easily create and
      delete chat sessions, connecting seamlessly through a{" "}
      {highlightText("WebSocket")} server. Users can add new chats and remove
      them using an icon next to user-created chats. Once connected to a chat,
      users can send messages and receive immediate feedback from the server.
      This project enhanced my skills in mobile app development, state
      management with {highlightText("Redux")}, and real-time communication.
    </span>
  );
};
