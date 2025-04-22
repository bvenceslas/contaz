// src/components/ContactForm.tsx
import { useState } from "react";
import { trpc } from "../utils/trpc";

export function ContactForm() {
  const utils = trpc.useUtils();

  const mutation = trpc.contacts.create.useMutation({
    onMutate: async (newContact) => {
      console.log("🌀 onMutate", newContact);
      await utils.contacts.getAll.cancel();

      const previousData = utils.contacts.getAll.getData();

      utils.contacts.getAll.setData(undefined, (old = []) => [
        ...old,
        { ...newContact, id: Date.now().toString() },
      ]);

      return { previousData };
    },
    onSuccess: () => {
      console.log("✅ onSuccess");
      utils.contacts.getAll.invalidate();
    },
    onError: (err, _newContact, context) => {
      console.error("❌ onError", err);
      utils.contacts.getAll.setData(undefined, context?.previousData);
    },
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
    setForm({ name: "", email: "", mobile: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 space-y-2 mb-10">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        required
      />
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? "Adding..." : "Add Contact"}
      </button>
    </form>
  );
}
