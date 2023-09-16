import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "@/app/components/Sidebar/Sidebar";
import Navbar from "@/app/components/Navbar/Navbar";
import Tasks from "@/app/components/Tasks/Tasks";
import Lists from "@/app/components/Lists/Lists";

const Dashboard = () => {
    return (
        <div className={styles.container} >
            <Sidebar priority={true}/>

            <div className={styles.verticalSection}>
                <Navbar priority={true}/>
                <Tasks priority={true}/>
                <Lists priority={true}/>
            </div>
        </div>
    );
};

export default Dashboard;