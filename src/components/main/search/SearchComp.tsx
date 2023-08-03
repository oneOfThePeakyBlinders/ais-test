import React, {useEffect, useState} from 'react';
import styles from './Search.module.css';
import {fetchHotels} from "../../redux/slices/hotelSlice";
import {useDispatch} from "react-redux";

const SearchComp = () => {

    const [location, setLocation] = useState<string>('Moscow');
    const [checkIn, setCheckIn] = useState('2023-09-10');
    const [numberOfDays, setNumberOfDays] = useState('7');

    const dispatch = useDispatch<any>();

    const onChangeLocation = (e: React.ChangeEvent <HTMLInputElement>) => {
       setLocation(e.target.value);
    }

    const onChangeRentDate = (e: React.ChangeEvent <HTMLInputElement>) => {
       setCheckIn(e.target.value);
    }

    const onChangeRentDays = (e: React.ChangeEvent <HTMLInputElement>) => {
       setNumberOfDays(e.target.value);
    }

    const calculateCheckOutDate = (checkInDate: string, days: number): string => {
        const checkInDateObj = new Date(checkInDate);
        const checkOutDateObj = new Date(checkInDateObj.getTime() + days * 24 * 60 * 60 * 1000);
        const year = checkOutDateObj.getFullYear();
        const month = String(checkOutDateObj.getMonth() + 1).padStart(2, '0');
        const day = String(checkOutDateObj.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

     const handleSearch = () => {
        const checkOut = calculateCheckOutDate(checkIn, parseInt(numberOfDays));
        dispatch(fetchHotels({location,checkIn,checkOut}));
     };


    return (
        <div className={styles.search}>
             <div className={styles.search_container}>
                     <div className={styles.search_container_location}>
                         <label className="text-2xl p-2 flex">{'Локация'}</label>
                         <input type='text'
                                placeholder='Москва'
                                value={location}
                                onChange={onChangeLocation}
                         />
                     </div>
                 <div className={styles.search_container_location}>
                     <label className="text-2xl p-2 flex">{'Дата заселения'}</label>
                     <input type='date'
                            placeholder='07.07.2020'
                            value={checkIn}
                            onChange={onChangeRentDate}
                     />
                 </div>
                 <div className={styles.search_container_location}>
                     <label className="text-2xl p-2 flex">{'Количество дней'}</label>
                     <input type='number'
                            placeholder='1'
                            value={numberOfDays}
                            onChange={onChangeRentDays}
                     />
                 </div>
                     <button onClick={handleSearch}>Найти</button>
             </div>
        </div>
    );
};

export default SearchComp;