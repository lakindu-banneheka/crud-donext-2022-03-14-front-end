import { Button } from 'antd';
import React, { FC } from 'react';
import { RouteEnum } from '../../pages/Home1';

interface NavBarProps {
    setroute: React.Dispatch<React.SetStateAction<RouteEnum>>;
};

const NavBar: FC<NavBarProps> = ({ setroute }) => {
    return ( 
        <div className='navbar' style={{ background:'#cccccc', height:'60px',display:'flex',alignItems:'center',padding:'0px 50px', justifyContent:'end' }} >
            <div style={{ display:'flex',alignItems:'center',padding:'0px 0px',justifyContent:'space-between',width:'150px' }} >
                <Button onClick={()=>setroute(RouteEnum.ADD)} > ADD </Button>
                <Button onClick={()=>setroute(RouteEnum.VIEW)} > Users </Button>
            </div>
        </div>
    );
};

export default NavBar;