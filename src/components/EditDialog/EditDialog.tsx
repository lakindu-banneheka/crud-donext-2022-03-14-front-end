import { Button, Modal } from 'antd';
import React, { FC, useState } from 'react';
import { editUser } from '../../features/userSlice';
import { UserInterface } from '../../modules/modules';
import { useAppDispatch } from '../../store/store';
import FormComponent from '../Form/FormComponent';

interface EditDialogProps {
    user: UserInterface;
};

const EditDialog: FC<EditDialogProps> = ({ user }) => {

    const [IsVisible,setIsVisible] = useState<boolean>(false);
    const [name,setname] = useState<string>(user.name);
    const [email,setemail] = useState<string>(user.email);
    const [phoneNo,setphoneNo] = useState<string>(user.phoneNo);


    const dispatch = useAppDispatch();
    const handleCancel = () => {
        setIsVisible(false);
    };

    const onClickEdit = () => {
        dispatch(editUser({ name: name, email: email, phoneNo: phoneNo, _id:user._id }));
        setIsVisible(false);
    };

    const handleOpenDialog = () => {
        setIsVisible(true);
    };

    return ( 
        <div>
            <Button 
                // type='primary' 
                onClick={handleOpenDialog} 
                // style={{padding:'2px 5px', margin:'5px', borderRadius:'3px', width:'50px'}} 
            >
                EDIT
            </Button>
            <Modal title="Edit User" visible={IsVisible} onCancel={handleCancel} footer={[]} width='650px' >
                <FormComponent
                    name={name}
                    setname={setname}
                    email={email}
                    setemail={setemail}
                    phoneNo={phoneNo}
                    setphoneNo={setphoneNo}
                    onClickSubmit={onClickEdit}
                />
            </Modal>
        </div>
    );
};

export default EditDialog;