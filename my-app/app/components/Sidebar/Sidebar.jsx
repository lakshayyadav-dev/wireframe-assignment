import React from "react";
import styles from "./Sidebar.module.css";
import Image from "next/image";

import menu_1 from "../../../public/static/images/menu_1.png";
import menu_2 from "../../../public/static/images/menu_2.png";
import menu_3 from "../../../public/static/images/menu_3.png";
import menu_4 from "../../../public/static/images/menu_4.png";
import menu_5 from "../../../public/static/images/menu_5.png";
import menu_6 from "../../../public/static/images/menu_6.png";
import menu_7 from "../../../public/static/images/menu_7.png";
import menu_8 from "../../../public/static/images/menu_8.png";
import menu_9 from "../../../public/static/images/menu_9.png";
import menu_10 from "../../../public/static/images/menu_10.png";

import mask_group from "../../../public/static/images/Mask Group.png";
import grid from "../../../public/static/images/Grid.png";
import arrow from "../../../public/static/images/arrow.png";

const MenuItem = ({ imgSrc, title }) => {
    return (
        <div className={styles.menuItem}>
            <Image src={imgSrc}/>
            <p>{title}</p>
        </div>
    );
};

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2>weframetech</h2>
                <div className={styles.burger}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>


            <div className={styles.menuContainer}>
                <h3>MAIN MENU</h3>
                <MenuItem imgSrc={menu_1} title="Dashboard"/>
                <MenuItem imgSrc={menu_2} title="Email"/>
                <MenuItem imgSrc={menu_3} title="Chat"/>
                <MenuItem imgSrc={menu_4} title="Kanban"/>
                <MenuItem imgSrc={menu_5} title="Contact"/>
                <MenuItem imgSrc={menu_6} title="Calendar"/>
                <MenuItem imgSrc={menu_7} title="Courses"/>
                <MenuItem imgSrc={menu_8} title="Shop"/>
                <MenuItem imgSrc={menu_9} title="Invoices"/>
                <MenuItem imgSrc={menu_10} title="Settings"/>
            </div>

            <div className={styles.bottomItem}>
                <div className={styles.bgImage}>
                    <Image src={mask_group}/>
                </div>
                <div className={styles.content}>
                    <Image src={grid}/>
                    <h1>Increase your work with kanban</h1>
                    <Image src={arrow}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;