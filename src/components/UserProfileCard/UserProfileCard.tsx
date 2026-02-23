import type { UserProfileCardProps } from "../../types";

function UserProfileCard({user , showEmail, showRole, onEdit, children }:UserProfileCardProps){
 if (!user) return <p> loading ... </p>;
    const {id = "No ID", name = "No Name", email, role, avatarUrl} = user;

    return (
    
            <div className="flex flex-row gap-3.5 border border-gray-300 m-3.5">
                {avatarUrl ? (<img src={avatarUrl} alt={`${name}'s avatar`} />) :
                
                  (<div className = "w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center" > No Avatar</div>)}
                <div className="flex flex-col gap-1">
                    <p> <strong> User ID:</strong> {id}</p>
                    <p><strong>User Name:</strong> {name}</p>
                    {showEmail && ( email ? (<p><strong>Email:</strong> {email}</p>):
                    (<p className="text-red-500"> Email not provided</p>) )}
                    {showRole && (role ?  (<p><strong>Role:</strong> {role}</p>) :
                    (<p className="text-red-500">Role not provided</p>))}
                    {onEdit && (<button onClick={()=>onEdit(id)} className="border border-gray-300 p-3.5 pt-1.5 pb-1.5">Edit</button>)}
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        
    );

}

export default UserProfileCard;