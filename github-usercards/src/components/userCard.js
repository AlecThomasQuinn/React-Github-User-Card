import React from 'react';

const UserCard = (props) => {
    return(
        <div>
            <h2>{props.userData.Name}</h2>
            <p>{props.userData.location}</p>
            <a href={props.userData.url}>{props.userData.bio}</a>
            <h3>Followers</h3>
            {props.userFollowers.map(follower =>
                <div key={follower.id}>{follower.login}</div>
            )}

        </div>
    );
}

export default UserCard;