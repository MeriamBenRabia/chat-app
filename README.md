# README - Chat App

Welcome to the Chat App repository! 
This simple web application is built using Next.js and is designed to facilitate chat messaging between patients and doctors.

The data model in this chat application is structured to manage how users interact with the chat system, which primarily uses the react-chat-engine package. Here's a breakdown of the key elements:

User Data: This includes the user's username, the user's secret (password), and the user's userType (which tells us if the user is a doctor or a patient).

Storage and Management: All the user information is stored and accessed globally through a React Context. This allows easy access to user's details across the application, avoiding passing data through multiple layers of components.

Chat Engine Integration: The ChatEngine component, which is loaded only when needed, handles the user's login session. It makes sure the user can connect to the chat, send and receive messages in real-time, and checks if the user's login details are correct.
