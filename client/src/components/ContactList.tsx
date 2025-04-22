// src/components/ContactList.tsx

import { trpc } from "../utils/trpc";

export function ContactList() {
  const { data, isLoading, isError } = trpc.contacts.getAll.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load contacts.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">Contacts</h2>
      <ul className="mt-2">
        {data?.map((contact) => (
          <li key={contact.id} className="border-b py-2">
            <strong>{contact.name}</strong> — {contact.email} — {contact.mobile}
          </li>
        ))}
      </ul>
    </div>
  );
}
