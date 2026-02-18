import type { UserProfileCardProps } from "../../types";

function UserProfileCard({user , showEmail, showRole, onEdit, children }:UserProfileCardProps){

    
    return (
        <>
            <div className="max-w-md m-4 border border-gray-200 rounded-lg shadow-md p-6 max-w-sm">
                <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 items-center space-x-4">
                    {user.avatarUrl && <div><img className="rounded-full" src={user.avatarUrl} /></div>}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                            {user.name}
                        </h3>
                        {showEmail && (
                            <p className="text-sm text-gray-600">
                                {user.email}
                            </p>
                        )}
                        {showRole && (
                            <p className="text-sm text-gray-500">
                                {user.role}
                            </p>
                        )}
                    </div>
                </div>
                {onEdit && (
                    <button
                        onClick={()=>onEdit(user.id)}
                        className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    >
                        Edit User
                    </button>
                )}
                <div className="mt-4">
                    {children}
                </div>
            </div>
        </>
    )
}

export default UserProfileCard;