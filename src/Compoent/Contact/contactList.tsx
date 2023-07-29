import React from "react";
import { useSelector } from "react-redux";
import { ContactState } from "../../Features/contactSlice/contactSlice";

const contactList: React.FC = () => {
  const contacts = useSelector(
    (state: ContactState) => state.contacts.contacts
  );
  console.log("contacts2", contacts);
  console.log("contacts", contacts.length);
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
              <div key={contact.id} className="flex">
                <h2>
                  {contact.firstName} {contact.lastName}
                </h2>
                <h2 className="self-center ml-2">
                  {contact.isActive ? (
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  ) : (
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  )}
                </h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(contactList);
