import { Col, Row } from 'antd';
import React, { FC } from 'react';
import UserCard from '../../components/UserCard/UserCard';
import { useAppSelector } from '../../store/store';

interface ViewProps {
    
};

const View: FC<ViewProps> = () => {
    const userListSelector = useAppSelector(state => state.user.userList);
    return ( 
        <div>
            { userListSelector.map((user,i) => {
                return (
                    <Row key={i} gutter={[10,10]} >
                        <Col span={6} push={0}>
                            <UserCard user={user} />
                        </Col>
                    </Row>
                )})
            }
        </div>
    );
};

export default View;