import React from 'react';
import LikeTopUser from './LikeTopUser';

const LikesTop = (props) => {
    const { users } = props;
    // console.log("state users component LikesTop  ", users);

    return (
        <div className="Topfour">
            <div className="TopfourContent">
                <h3>Top 3</h3>
                <ul>
                    {users.sort(function (a, b) {
                        return b.likes - a.likes;
                    }).map((user, index) => (
                        <li key={user._id}>
                            <LikeTopUser user={user} index={index} />
                        </li>
                    )).slice(0, 3)}
                </ul>
            </div>
        </div>
    );
};

export default LikesTop;