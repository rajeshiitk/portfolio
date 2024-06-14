"use server";
import { db } from "@/lib/db";
import { contactSchema } from "@/schema/contact";
import { Contact } from "@/schema/contact";

export const submitContactForm = async (data: Contact) => {
  const contact = contactSchema.parse(data);
  try {
    await db.contact.create({ data: contact });
  } catch (error) {
    return { message: "An error occurred." };
  }
  return { message: "Your message has been sent." };
};

// contact from component
