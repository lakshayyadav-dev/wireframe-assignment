"use client";
import React, { useEffect, useState } from "react";
import styles from "./Lists.module.css";
import Image from "next/image";

import userList from "../../../public/images/userList.png";
import horizontalDots from "../../../public/images/horizontalDots.png";

const Lists = () => {
    const [list1, setList1Count] = useState(0);
    const [list2, setList2Count] = useState(0);
    const [list3, setList3Count] = useState(0);

    const ListItem = ({list, type = "Important", text="Create sign up sheet for holiday student/parent conferences.", dueIn="4"}) => {
        const [visible, setVisible] = useState(true);
        const [showMenu, setShowMenu] = useState(false)
        return <>
            {visible && (
                <div className={styles.listItem}>
                    <div className={styles.topHalf}>
                        <p>{type}</p>
                        <Image src={horizontalDots} onClick={() => setShowMenu(prev => !prev)}/>

                        {showMenu && (
                            <div className={styles.deleteMenu}>
                            <span onClick={() => {
                                {list(prev => prev - 1)}
                                setVisible(false);
                            }}>Delete</span>
                            </div>
                        )}
                    </div>

                    <textarea placeholder={text} />

                    <div className={styles.progressBar}>
                        <div className={styles.progressBarFill}/>
                    </div>

                    <div className={styles.bottomHalf}>
                        <Image src={userList} width={80}/>
                        <p>Due in {dueIn} days</p>
                    </div>
                </div>
            )}
        </>
    };

    let todoListItems = [];
    for (let i = 0; i <= list1; i++) {
        todoListItems.push(i);
    }

    let list2Items = [];
    for (let i = 0; i <= list2; i++) {
        list2Items.push(i);
    }

    let list3Items = [];
    for (let i = 0; i <= list3; i++) {
        list3Items.push(i);
    }

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <div className={styles.listTitle}>
                    <h3>To-Do-List ({todoListItems.length})</h3>
                    <div className={styles.addIcon} onClick={() => setList1Count(prev => prev + 1)}>
                        <p className={styles.plus}>+</p>
                    </div>
                </div>

                <ul className={styles.listItems}>
                    {todoListItems.map(() => <li><ListItem list={setList1Count}/></li>)}
                </ul>
            </div>

            <div className={styles.list}>
                <div className={styles.listTitle}>
                    <h3>In Progress ({list2Items.length})</h3>
                    <div className={styles.addIcon} onClick={() => setList2Count(prev => prev + 1)}>
                        <p className={styles.plus}>+</p>
                    </div>
                </div>

                <ul className={styles.listItems}>
                    {list2Items.map(() => <li><ListItem list={setList2Count}/></li>)}
                </ul>
            </div>

            <div className={styles.list}>
                <div className={styles.listTitle}>
                    <h3>Done ({list3Items.length})</h3>
                    <div className={styles.addIcon} onClick={() => setList3Count(prev => prev + 1)}>
                        <p className={styles.plus}>+</p>
                    </div>
                </div>

                <ul className={styles.listItems}>
                    {list3Items.map(() => <li><ListItem list={setList3Count}/></li>)}
                </ul>
            </div>
        </div>
    );
};

export default Lists;