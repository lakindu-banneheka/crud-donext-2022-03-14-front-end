import React, { FC, useEffect, useState } from 'react';
import FormComponent from '../components/Form/FormComponent';
import NavBar from '../components/NavBar/NavBar';
import { addUser, getUsers } from '../features/userSlice';
import { useAppDispatch } from '../store/store';
import './home.css';
import View from './View/View';

interface Home1Props {
    
};

export enum RouteEnum {
    ADD = "ADD",
    VIEW = "VIEW"
};

const Home1: FC<Home1Props> = () => {
    const [route,setroute] = useState<RouteEnum>(RouteEnum.ADD);
    const dispatch = useAppDispatch();
    const [name,setname] = useState<string>('');
    const [email,setemail] = useState<string>('');
    const [phoneNo,setphoneNo] = useState<string>('');

    
    const onClickSubmit = () => {
        dispatch(addUser({ name: name, email: email, phoneNo: phoneNo }));
        setname('');
        setemail('');
        setphoneNo('');
    };

    useEffect(() => {
        dispatch(getUsers());
    },[dispatch]);

    return ( 
        <div className='' >
            <NavBar setroute={setroute} />
            <div style={{padding:'30px', minHeight:'90vh' }} >
                { route === RouteEnum.ADD
                ? <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}} > 
                    <FormComponent 
                        name={name}
                        setname={setname}
                        email={email}
                        setemail={setemail}
                        phoneNo={phoneNo}
                        setphoneNo={setphoneNo}
                        onClickSubmit={onClickSubmit}
                    />
                </div>
                : ( route === RouteEnum.VIEW
                    ? <View />
                    : <></>
                )
                }
            </div>
        </div>
    );
};

export default Home1;