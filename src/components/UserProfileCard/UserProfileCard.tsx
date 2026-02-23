import type { UserProfileCardProps } from "../../types";

function UserProfileCard({ user, showEmail, showRole, onEdit, children }: UserProfileCardProps) {
  if (!user) return <p className="text-gray-500">Loading...</p>;

  const { id, name, email, role, avatarUrl } = user;

  return (
    <div className="flex flex-row gap-3.5 border border-gray-300 m-3.5 p-4 rounded-lg shadow-sm">
      {avatarUrl ? (
        <img 
          src={avatarUrl} 
          alt={`${name}'s avatar`} 
          className="w-16 h-16 rounded-full object-cover"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">
          No Avatar
        </div>
      )}
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">ID: {id}</p>
        {showEmail && (
          <p className="text-sm">
            <span className="font-medium">Email:</span>{' '}
            {email || <span className="text-red-500">Not provided</span>}
          </p>
        )}
        {showRole && (
          <p className="text-sm">
            <span className="font-medium">Role:</span>{' '}
            {role || <span className="text-red-500">Not provided</span>}
          </p>
        )}
        {onEdit && (
          <button
            onClick={() => onEdit(id)}
            className="border border-gray-300 px-4 py-1.5 rounded hover:bg-gray-50 self-start mt-2"
          >
            Edit Profile
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default UserProfileCard;