import React from "react";
import './CSS/packages.css'

export default function Packages() {

    return (
        <>
            <div className="packages_container">
                <table>
                    <tbody>
                        <tr>
                            <td align="right" valign="top">
                                <table width={"100%"} border={'0'} cellSpacing={'0'} cellPadding={'0'}>
                                    <tbody>
                                        <tr></tr>
                                        <tr>
                                            <td align="left" valign="top">
                                                <table width={'100%'} border={'0'} cellSpacing={'0'} cellPadding={'0'}>
                                                    <tbody>
                                                        <tr>
                                                            <td align="left" valign="top" className="gray12_txt">
                                                                <table width={'100%'} border={'0'} cellSpacing={'1'} cellPadding={'1'}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={'4'} align={'left'} valign={'top'}>
                                                                                <p id="about"><strong>About Fitness-Packages</strong></p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width={'25%'} align={'left'} valign={'top'}>
                                                                                <strong>Duration &nbsp;</strong>
                                                                            </td>
                                                                            <td width={'25%'} align={'center'} valign={'top'}>
                                                                                <strong>Couple</strong>
                                                                            </td>
                                                                            <td width={'25%'} align={'center'} valign={'top'}><strong>Happy Hours</strong>
                                                                            </td>
                                                                            <td width={'25%'} align={'center'} valign={'top'}><strong>Single</strong>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width={'522'}><strong>Monthly&nbsp;</strong></td>
                                                                            <td align={"center"} valign={'top'}>1500</td>
                                                                            <td align={'center'} valign={'top'}>2500</td>
                                                                            <td align={'center'} valign={'top'}>1000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width={'522'}><strong>Half-Yearly</strong></td>
                                                                            <td align={'center'} valign={'top'} >3500</td>
                                                                            <td align={'center'} valign={'top'}>6500</td>
                                                                            <td align={'center'} valign={'top'}>2500</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width={'522'}><strong>Yearly</strong></td>
                                                                            <td align={'center'} valign={'top'}>10000</td>
                                                                            <td align={'center'} valign={'top'}>18000</td>
                                                                            <td align={'center'} valign={'top'}>7500</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5 id="about2">About Fitness is having highly qualified team of trainers,they are widely
                acknowledged as being among the industry's finest and take enormous
                pride in assisting members wherever they are needed. All are fully
                accredited on the Exercise Professionals Register and are, of course,
                insured to deliver some of the most advanced training. They can focus
                clearly on your goals and pointedly be on hand to ensure you reach them.
            </h5><br />

            <h3 id="note">Note:</h3>
            <p id="all">

                » All Rates are in Indian Rs.<br />
                » General Rates are applicable for Per Person Bases.<br />
                » Couple Rates are applicable for Husband & Wife only.<br />
                » Happy hours Rates are applicable between 11:00 am to 5:00 pm only.</p>



            <div className="foot">

                <footer>
                    <p>&copy; Rohan.in</p>
                </footer>
            </div>
        </>

    );
}


