export type Contact = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  location: string;
};

export const contacts: Contact[] = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@gmail.com",
    mobile: "+243999999999",
    location: "",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    mobile: "+243888888888",
    location: "",
  },
  {
    id: "3",
    name: "Mark Doe",
    email: "markdoe@gmail.com",
    mobile: "+243777777777",
    location: "",
  },
  {
    id: "4",
    name: "Jack Doe",
    email: "jackdoe@gmail.com",
    mobile: "+243666666666",
    location: "",
  },
];
