import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";

function App() {
  return (
    <>
      <main className="p-4 w-[100%] border border-red-700">
        <h1 className="text-2xl font-bold mb-[50px]">📇 Contact Manager</h1>
        <ContactForm />
        <ContactList />
      </main>
    </>
  );
}

export default App;
