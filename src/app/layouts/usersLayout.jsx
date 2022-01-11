/* eslint-disable */
import { divide } from "lodash";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import Quality from "../components/quality";

const UsersLayout = ({ match }) => {
    const [findedUser, setFindedUser] = useState();
    const history = useHistory();
    const handleSave = () => {
        history.replace("/users");
    };
    useEffect(() => {
        api.users.getById(match.params.id).then((data) => setFindedUser(data));
    }, []);

    return (
        <>
            {findedUser ? (
                <>
                    <h1>{findedUser.name}</h1>
                    <h3>Профессия: {findedUser.profession.name}</h3>
                    {findedUser.qualities.map((q) => (
                        <Quality key={q._id} {...q} />
                    ))}
                    <p>completedMeetings: {findedUser.completedMeetings}</p>
                    <h3>Rate: {findedUser.rate}</h3>
                    <button onClick={() => handleSave()}>
                        Все пользователи
                    </button>
                </>
            ) : (<div>Loading.........</div>)}
        </>
    );
};

export default UsersLayout;
