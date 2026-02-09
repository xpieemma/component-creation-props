import type { UserProfileCardProps } from "../../types";

function UserProfileCard({user , showEmail, showRole, onEdit, children }:UserProfileCardProps){

    
    return (
        <>
            <div className="flex flex-row gap-3.5 border border-gray-300 m-3.5">
                {user.avatarUrl && <div><img src={user.avatarUrl} /></div>}
                <div className="">
                    <p>User ID: {user.id}</p>
                    <p>User Name: {user.name}</p>
                    {showEmail && (<p>Email: {user.email}</p>)}
                    {showRole && (<p>Role: {user.role}</p>)}
                    {onEdit && (<button onClick={()=>onEdit(user.id)} className="border border-gray-300 p-3.5 pt-1.5 pb-1.5">Edit</button>)}
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfileCard;