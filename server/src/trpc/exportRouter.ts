import { contacts } from "../data";
import { defaultProcedure, router } from "./trpc";
import { z } from "zod";

export const contactRouter = router({
  // get all contacts
  getAll: defaultProcedure.query(() => {
    return contacts;
  }),

  // add a contact
  create: defaultProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        mobile: z.string(),
        location: z.string(),
      })
    )
    .mutation(({ input }) => {
      const newContact = { ...input, id: Date.now().toString() };
      contacts.push(newContact);
      return newContact;
    }),

  //delete a contact
  //   delete: defaultProcedure.input(z.string()).mutation(({ input }) => {
  //     const filteredContacts = contacts.filter(
  //       (contact) => contact.email === input.email
  //     );

  //     return filteredContacts.length > 0 ? filteredContacts[0] : [];
  //   }),
});
