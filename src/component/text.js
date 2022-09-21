import React from 'react';
import './CSS/text.css'
function Text() {
    return (
        <>
            <div className="section">
                <img className="logo" src={require('.//images/gym.png')} alt="logo" />
                <h1>The Best Gym in the World.</h1>
                <p>Having a perfect body requires a lot of training. Nice looking body and powerful are interconnected-and we
                    can help you with both.</p>
            </div>

            <hr className="line1" />

            <div className="desc">
                <span>Personal trainers are responsible for training individuals and developing a healthy workout regimen for
                    all their clients. They often work with different muscle groups and combine this knowledge with
                    cardiovascular training to provide their clients with the best exercise program possible. They may
                    demonstrate various exercises and improve their client's technique. That's why we have the Best trainer in
                    our Gym.</span>
            </div>

            <div className="text-container2">
                <table className="table1">
                <tbody>

                    <tr>
                        <td>
                            <h4 className="name1">Rohan (Gym Trainer)</h4>
                            <p className="para1">“It doesn’t matter what your background is and where you come from, if you have
                                dreams and goals, that’s all that matters.” </p>
                        </td>
                        <td><img className="pic1" src={require(".//images/8.jpg")} alt="" /></td>
                    </tr>
                </tbody>
                </table>
                <hr className="line2" />

                <table className="table2">
                <tbody>
                    <tr>
                        <td><img className="pic2" src={require(".//images/amrit.jpg")} alt="" /></td>
                        <td>
                            <div className="count2">

                                <h4 className="name2"> Amritpal Singh (Gym Trainer)</h4>
                                <p className="para2">
                                    “Give yourself an even greater challenge than the one you are trying to master and you will
                                    develop the powers necessary to overcome the original difficulty.”
                                </p>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr className="line3" />

                <table className="table3">
                <tbody>
                    <tr>
                        <td>
                            <h4 className="name3">Sahil Marwaha (Gym Trainer)</h4>
                            <p className="para3">“There may be people that have more talent than you, but there’s no excuse for
                                anyone to work harder than you do.”</p>
                        </td>
                        <td><img className="pic3" src={require(".//images/sahil.jpg")} alt="" /></td>
                    </tr>
                    </tbody>
                </table>
            </div>



            <div className="foot">
                <footer>
                    <p>&copy; Rohan.in</p>
                </footer>
            </div>
        </>


    );
}

export default Text;