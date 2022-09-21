import React from "react";
import './CSS/facilities.css'

export default function Facilities() {
    return (
        <>
            <div className="facilities_container">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4>Cardio Center</h4>
                                Cardio is short for cardiovascular, which refers to the heart. Cardiovascular exercise is exercise
                                that raises your heart rate and keeps it elevated for a period of time. Another name for it is
                                aerobic exercise. The kinds of exercise that are associated with cardiovascular workouts are things
                                like jogging, fast walking, and swimming where there is no break in the routine. Exercises that
                                emphasize stretch and strength, like Pilates, are generally not considered cardio exercise, though
                                Pilates can be done in a cardio way, and can certainly be combined with cardio workouts to great
                                effect.
                            </td>
                            <td><img src={require(".//images/cardio.png")} alt="" /></td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={'1'}> <img src={require(".//images/strength.png")} alt="" /></td>
                            <td valign={'top'}>&nbsp;&nbsp;&nbsp;<h4>Strength Training</h4>A method of improving muscular strength by
                                gradually increasing the ability to resist force through the use of free weights, machines, or the
                                person's own body weight. Strength training sessions are designed to impose increasingly greater
                                resistance, which in turn stimulates development of muscle strength to meet the added demand. This
                                section is equipped with the latest machines from Larous, India, which isolate targeted muscles for
                                more specialized training.</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h4>Aerobics</h4>
                                Aerobics is an effective physical exercise which is often done to music. Apart from staying power,
                                strength, flexibility, coordination, and tact are trained. Aerobics is very popular with women who
                                do it together in a group following an instructor or alone in front of the television. In the 1960s,
                                Dr. Med. Kenneth H. Cooper introduced an exercise training in order to strengthen the heart and the
                                lungs and took the first step of the "aerob" training in the United States. His published book
                                Aerobics finally led to a gymnastic staying power-training, to Aerobics.
                            </td>
                            <td><img src={require(".//images/aerobics.png")} alt="" /></td>
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