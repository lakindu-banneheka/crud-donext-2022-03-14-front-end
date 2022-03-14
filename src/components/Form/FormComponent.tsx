import { Button } from 'antd';
import React, { FC } from 'react';

interface FormComponentProps {
    name: string;
    setname: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setemail: React.Dispatch<React.SetStateAction<string>>;
    phoneNo: string;
    setphoneNo: React.Dispatch<React.SetStateAction<string>>;
    onClickSubmit: () => void;
};

const FormComponent: FC<FormComponentProps> = ({ name, setname, email, setemail, phoneNo, setphoneNo, onClickSubmit }) => {

    return ( 
        <div 
            style={{
                background:'#fff', height:'400px',width:'600px', 
                display:'flex', alignItems:'start', justifyContent:'start', flexDirection:'column',
                padding:'10px 30px',  borderRadius:'10px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.1)'
                }} 
            >
            <div style={{ display:'flex', padding:'5px', fontSize:'30px', fontWeight:'650' }} >
                Title
            </div>
            <div style={{padding:'20px 5px 5px 5px', width:'320px'}} id='input_form' >
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}} >
                        <label>Name : </label>
                        <input type='text' required value={name} onChange={(e)=>setname(e.target.value)} />
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}} >
                        <label>Email : </label>
                        <input required type='email' value={email} onChange={(e)=>setemail(e.target.value)} />
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}} >
                        <label>Phone Number : </label>
                        <input required type='tel' value={phoneNo} onChange={(e)=>setphoneNo(e.target.value)} />
                    </div>
                    <div style={{display:'flex',justifyContent:'end',padding:'10px'}} >
                        <Button type="primary" htmlType="submit" onClick={onClickSubmit} >
                            Submit
                        </Button>
                    </div>
            </div>
        </div>
    );
};

export default FormComponent;