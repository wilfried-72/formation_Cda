import React from 'react';
import { useSelector } from 'react-redux';
import TopLike from './TopLike';

const FourTop = () => {

    // on recupere les data de notre store au niveau du post reducer
    // console.log("state posts ", posts);
    const users = useSelector((state) => state.userReducer);
    // console.log("state user ", users);

    return (
        <div>
            <div className="Topfour">
                <div className="TopfourContent">
                    <h3>Top 4</h3>
                    <ul>
                        {users.length > 0 &&
                            users
                                .sort(function (a, b) {
                                    return b.likes - a.likes;
                                })
                                .slice(0, 4)
                                .map((user, index) => (
                                    <li key={user._id}>
                                        <TopLike user={user} index={index} />
                                    </li>
                                ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FourTop;