import React from "react";
import styles from "./Tasks.module.css";
import Image from "next/image";

import buttonBack from "../../../public/images/btnback.png";
import add_friend from "../../../public/images/add-friend 1.png";
import task_chat from "../../../public/images/task_chat.png";
import user from "../../../public/images/user.png";
import companyLogo from "../../../public/images/companyLogo.png";
import icVert from "../../../public/images/icVert.png";

const Tasks = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.heading}>
                    <Image src={buttonBack} className={styles.back}/>
                    <div>
                        <h1>School November Tasks</h1>
                        <p>Created by Instructor Day on November 31, 2022</p>
                    </div>
                </div>

                <div className={styles.publisherInfo}>
                    <div>
                        <h3>Centered Martial Arts</h3>
                        <p>Sunnywale, Ca</p>
                    </div>
                    <Image src={companyLogo}/>
                    <Image src={icVert} className={styles.more}/>
                </div>
            </div>

            <div className={styles.bottom}>
                <Image src={user} width={125}/>

                <div className={styles.buttons}>
                    <div className={`${styles.button} ${styles.inviteBtn}`}>
                        <Image src={add_friend}/>
                        <p>Invite People</p>
                    </div>

                    <div className={`${styles.button}`}>
                        <p>Private</p>
                    </div>

                    <div className={`${styles.button} ${styles.editBtn}`}>
                        <p>Edit</p>
                    </div>

                    <div className={`${styles.button}`}>
                        <Image src={task_chat}/>
                        <p>45 Comments</p>
                    </div>
                </div>

                <div className={styles.progress}>
                    <p>Total Progress 60%</p>
                    <div className={styles.progressBar}>
                        <div className={styles.progressBarFill}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;