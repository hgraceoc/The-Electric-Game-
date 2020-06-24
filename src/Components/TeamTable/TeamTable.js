import React, { Component } from "react";


const TeamTable = (
    {
        players,
    }
) => {

    return (

        <div>
            <table className="teamTable">
                <thead>
                    <tr>
                        <th className="title">Team</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Player1</td>
                    </tr>

                    <tr>
                        <td>Player2</td>
                    </tr>

                    <tr>
                        <td>Player3</td>
                    </tr>


                    <tr>
                        <td>Player4</td>
                    </tr>

                    <tr>
                        <td>Player5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default TeamTable;