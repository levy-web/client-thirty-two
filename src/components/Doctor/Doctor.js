import {UserAuth} from '../context/AuthContext'

function Doctor(){
    const {user} = UserAuth()

    return(
        <div className = "container p-5 m-auto">
            <h2 >{`Name: Dr ${user.username}`} </h2>
            <h2 >{`Email: Dr ${user.email}`} </h2>
            <h2 >{`Speciality: Dr ${user.speciality}`} </h2>
        </div>
    )
}

export default Doctor