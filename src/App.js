import './App.css';
import Navbar from './components/navbar/navbar';
import MobileAppBar from './components/MobileAppBar/MobileAppBar'; // Import MobileAppBar component
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faTrash } from '@fortawesome/free-solid-svg-icons';
import Greeting from './components/Greeting/Greeting';
import Notes from './components/Notes/notes';
import NotesModel from './models/Notes';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [notes, setNotes] = useState([
    new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic!  😍', '10', 'Feb', '2022', 'yellow'),
    new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '11', 'Mar', '2022', 'orange'),
    new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '12', 'Apr', '2022', 'lilac'),
    new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '13', 'Jun', '2022', 'green'),
    new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '14', 'Nov', '2022', 'cyan'),
    new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic!  😍', '10', 'Feb', '2022', 'yellow'),
    new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '11', 'Mar', '2022', 'orange'),
    new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '12', 'Apr', '2022', 'lilac'),
  ]);
  const [draggedNote, setDraggedNote] = useState(null);
  const [isGettingDragged, setIsGettingDragged] = useState(false);
 
  const handleDragStart = (e, note) => {
    setDraggedNote(note);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', JSON.stringify(note));
    setIsGettingDragged(true);
  };

    const onDragEnd = (result) => {
    const { destination, source } = result;

    // If there's no destination, do nothing
    if (!destination) {
      return;
    }

    // If the item is dropped in the trash
    if (destination.droppableId === 'trash') {
      const newNotes = Array.from(notes);
      newNotes.splice(source.index, 1);
      setNotes(newNotes);
      return;
    }

    // If the item is dropped in the same place, do nothing
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    // Reorder the notes array
    const newNotes = Array.from(notes);
    const [movedNote] = newNotes.splice(source.index, 1);
    newNotes.splice(destination.index, 0, movedNote);

    setNotes(newNotes);
  };

  // const handleDrop = () => {
  //   if (draggedNote) {
  //     setNotes(notes.filter(note => note !== draggedNote));
  //     setDraggedNote(null);
  //   }
  // };


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <DragDropContext>
    

    <div className="App min-h-screen flex flex-col items-start md:justify-start bg-white dark:bg-custom-gray-800">
      <Navbar />
      <div className="block md:hidden w-full">
        <MobileAppBar />
      </div>
      <button
        className="themeMode text-custom-gray-300 md:text-black font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105 absolute top-4 right-4 dark:text-white md:hover:bg-custom-rose"
        onClick={toggleDarkMode}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
      <div className="mainBodyContainer pl-4 pt-4 md:pt-[2%] md:pl-[13%] flex w-full">
        <Greeting />
      </div>
      <div className="notesContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   md:pl-[12%] md:pt-[1%] pr-10">
      {notes.map((note, index) => (
        
            <Notes note={note} />   
   ))}
      </div>
      {
      //{(isGettingDragged) ? 
     
   
        <div
          className="trashContainer fixed bottom-4 right-4 bg-custom-gray-300 dark:bg-custom-gray-700 p-4 rounded-full"
          
        >
          <FontAwesomeIcon icon={faTrash} className="text-white text-3xl" />
        
        </div>
     
   
      
      //: null} 
      }
    </div>
    
    </DragDropContext>
  );
}

export default App;


// import './App.css';
// import Navbar from './components/navbar/navbar';
// import MobileAppBar from './components/MobileAppBar/MobileAppBar'; // Import MobileAppBar component
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon, faTrash } from '@fortawesome/free-solid-svg-icons';
// import Greeting from './components/Greeting/Greeting';
// import Notes from './components/Notes/notes';
// import NotesModel from './models/Notes';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [notes, setNotes] = useState([
//     new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic!  😍', '10', 'Feb', '2022', 'yellow'),
//     new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '11', 'Mar', '2022', 'orange'),
//     new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '12', 'Apr', '2022', 'lilac'),
//     new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '13', 'Jun', '2022', 'green'),
//     new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '14', 'Nov', '2022', 'cyan'),
//     new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic!  😍', '10', 'Feb', '2022', 'yellow'),
//     new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '11', 'Mar', '2022', 'orange'),
//     new NotesModel('This is how a Note on Note.me looks like! Very simple, clean and aesthetic! 😍', '12', 'Apr', '2022', 'lilac'),
//   ]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (!darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   };

//   const onDragEnd = (result) => {
//     const { destination, source } = result;

//     // If there's no destination, do nothing
//     if (!destination) {
//       return;
//     }

//     // If the item is dropped in the trash
//     if (destination.droppableId === 'trash') {
//       const newNotes = Array.from(notes);
//       newNotes.splice(source.index, 1);
//       setNotes(newNotes);
//       return;
//     }

//     // If the item is dropped in the same place, do nothing
//     if (destination.droppableId === source.droppableId && destination.index === source.index) {
//       return;
//     }

//     // Reorder the notes array
//     const newNotes = Array.from(notes);
//     const [movedNote] = newNotes.splice(source.index, 1);
//     newNotes.splice(destination.index, 0, movedNote);

//     setNotes(newNotes);
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="app">
//       <div className="App min-h-screen flex flex-col items-start md:justify-start bg-white dark:bg-custom-gray-800">
//         <Navbar />
//         <div className="block md:hidden w-full">
//           <MobileAppBar />
//         </div>
//         <button
//           className="themeMode text-custom-gray-300 md:text-black font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:scale-105 absolute top-4 right-4 dark:text-white md:hover:bg-custom-rose"
//           onClick={toggleDarkMode}
//         >
//           <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
//         </button>
//         <div className="mainBodyContainer pl-4 pt-4 md:pt-[2%] md:pl-[13%] flex w-full">
//           <Greeting />
//         </div>
//         <Droppable droppableId="notes">
//           {(provided) => (
//             <div
//               className="notesContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:pl-[12%] md:pt-[1%] pr-10"
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//             >
//               {notes.map((note, index) => (
//                 <Draggable key={note.id} draggableId={note.id} index={index}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       className="flex justify-center items-center"
//                     >
//                       <Notes note={note} />
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//         <Droppable droppableId="trash">
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               className="trashContainer fixed bottom-4 right-4 bg-custom-gray-300 dark:bg-custom-gray-700 p-4 rounded-full"
//             >
//               <FontAwesomeIcon icon={faTrash} className="text-white text-3xl" />
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </div>
//       </Droppable>
//     </DragDropContext>
//   );
// }

// export default App;