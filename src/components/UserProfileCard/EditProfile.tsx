import { useState } from "react";
import type { User } from "../../index";

interface EditProfileFormProps {
  user: User;
  onSave: (updatedFields: Partial<User>) => void;
  onCancel: () => void;
}

const EditProfileForm = ({ user, onSave, onCancel }: EditProfileFormProps) => {
  const [fields, setFields] = useState({ name: user.name, email: user.email, role: user.role });

  return (
    <div className="p-4 space-y-3 bg-gray-50 rounded-lg">
      <input 
        className="w-full p-2 border rounded text-sm" 
        value={fields.name} 
        onChange={e => setFields({...fields, name: e.target.value})} 
        placeholder="Name" 
      />
      <input 
        className="w-full p-2 border rounded text-sm" 
        value={fields.email} 
        onChange={e => setFields({...fields, email: e.target.value})} 
        placeholder="Email" 
      />
      <input 
        className="w-full p-2 border rounded text-sm" 
        value={fields.role} 
        onChange={e => setFields({...fields, role: e.target.value})} 
        placeholder="Role" 
      />
      <div className="flex gap-2 pt-2">
        <button onClick={() => onSave(fields)} className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">Save</button>
        <button onClick={onCancel} className="flex-1 bg-white border py-2 rounded text-sm hover:bg-gray-100">Cancel</button>
      </div>
    </div>
  );
};

export default EditProfileForm;