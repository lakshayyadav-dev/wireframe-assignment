import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

import search from "../../../public/static/images/search.png";
import check from "../../../public/static/images/check.png";
import folder from "../../../public/static/images/folder.png";
import activities from "../../../public/static/images/activities.png";
import notification from "../../../public/static/images/notification.png";
import united_states_1 from "../../../public/static/images/united-states 1.png";
import profilePicture from "../../../public/static/images/profilePicture.png";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <Image src={search} width={20}/>
                <input type="text" placeholder="Search here" />
            </div>


            <div className={styles.menu}>
                <p className={styles.menuHeading}>OTHER MENUS</p>
                <Image src={notification} width={55}/>
                <Image src={activities} width={55}/>
                <Image src={check} width={55}/>
                <Image src={folder} width={55}/>
            </div>

            <div className={styles.language}>
                <Image src={united_states_1}/>
                <select>
                    <option>English</option>
                    <option>Indonesia</option>
                    <option>Hindi</option>
                </select>
            </div>

            <div className={styles.profile}>
                <Image src={profilePicture}/>
                <div>
                    <p className={styles.name}>Instructor Day</p>
                    <p className={styles.designation}>Super Admin</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;