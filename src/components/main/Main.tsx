import React, {useEffect, useState} from 'react';
import SearchComp from "./search/SearchComp";
import styles from './Main.module.css';
import FavoritesComp from "./favorites/FavoritesComp";
import ItemsComp from "./items/ItemsComp";

const Main = () => {

    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <SearchComp/>
                <FavoritesComp/>
            </div>
            <div className={styles.main_section}>
                <ItemsComp/>
            </div>
        </div>
    );
};

export default Main;