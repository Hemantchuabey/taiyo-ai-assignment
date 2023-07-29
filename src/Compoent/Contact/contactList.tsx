import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Contact, ContactState } from "../../Features/contactSlice/contactSlice";
import ContactForm from "./contactForm";
const contactList: React.FC = () => {
  const contacts = useSelector(
    (state: ContactState) => state.contacts.contacts
  );
  console.log("contacts2", contacts);
  console.log("contacts", contacts.length);

  const [editingContact, setEditingContact] = useState<Contact | null>(null);



  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
  };

  const handleEditComplete = () => {
    setEditingContact(null);
  };

  return (
    <div>
      {contacts.length < 1 ? (
        <div className="text-3xl m-auto text-center text-gray-300">
          No Contact Found
        </div>
      ) : (
        <div>
          {contacts.map((contact) => {
            return (
              <div key={contact.id} className="flex mb-2">
                <div>
                  {contact.firstName} {contact.lastName}
                </div>
                <h2 className="self-center ml-2">
                  {contact.isActive ? (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full flex"></div>
                    </>
                  ) : (
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  )}
                </h2>
                <button className="bg-green-600 min-w-fit p-1 rounded-md ml-2 text-white" onClick={() => handleEdit(contact)}>
                  Edit
                </button>
                <button className="bg-red-600 min-w-fit p-1 rounded-md ml-2 text-white">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
       {editingContact ? <ContactForm contact={editingContact} onEditComplete={handleEditComplete} /> : <></>}
    </div>
  );
};

export default React.memo(contactList);
