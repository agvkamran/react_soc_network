import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {
    let getUsers = () => {
    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            // debugger;
            props.setUsers(response.data.items)
        })
    }
    // props.setUsers( 
    //     [
    //     {id: 1, photoUrl: 'https://www.google.com/search?q=user+photo&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiz34-7p7HsAhWlx4UKHfCRAp4Q_AUoAXoECA0QAw#imgrc=0WCMHJOqQ0-MmM', followed: false, fullName: 'John', status: 'Busy', location: {city: 'Antananarivo', country: 'Madagascar'}},
    //     {id: 2, photoUrl: 'https://www.google.com/search?q=user%20photo&tbm=isch&tbs=rimg:CdFgjByTqkNPYfggZsrgIPXN&hl=ru&sa=X&ved=0CBsQuIIBahcKEwjw0OHAp7HsAhUAAAAAHQAAAAAQEA&biw=1903&bih=969#imgrc=kqQop62Q4kT01M', followed: true, fullName: 'Jabreel', status: 'No war', location: {city: 'Palestine', country: 'Jordan'}},
    //     {id: 3, photoUrl: 'https://www.google.com/search?q=user%20photo&tbm=isch&tbs=rimg:CdFgjByTqkNPYfggZsrgIPXN&hl=ru&sa=X&ved=0CBsQuIIBahcKEwjw0OHAp7HsAhUAAAAAHQAAAAAQEA&biw=1903&bih=969#imgrc=lq8ogveTctM6bM', followed: false, fullName: 'Natalia', status: 'Cambio Dolor', location: {city: 'Barcelona', country: 'Spain'}},
    // ])
}

    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;