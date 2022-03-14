import { Button, Card } from 'antd';
import React, { FC } from 'react';
import { deleteUser } from '../../features/userSlice';
import { UserInterface } from '../../modules/modules';
import { useAppDispatch } from '../../store/store';
import EditDialog from '../EditDialog/EditDialog';


interface UserCardProps {
    user: UserInterface;
};

const UserCard: FC<UserCardProps> = ({ user }) => {

    const dispatch = useAppDispatch();

    const styles = {
        div: {
            padding: '5px'
        }
    };

    const onClickDelete = () => {
        dispatch(deleteUser(user))
    };

    return ( 
        <div>
            <Card style={{width:'250px', height:'200px',background:'#dfdfdf', display:'flex', justifyContent:'center'}} >
                <div style={styles.div} >{user.name}</div>
                <div style={styles.div} >{user.email}</div>
                <div style={styles.div} >{user.phoneNo}</div>
                <div style={{width:'150px', display:'flex', justifyContent:'space-between'}} >
                    <EditDialog user={ user } />
                    <Button onClick={onClickDelete} >DELETE</Button>
                </div>
            </Card>
        </div>
    );
};

export default UserCard;