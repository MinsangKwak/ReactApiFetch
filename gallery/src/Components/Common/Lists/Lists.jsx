import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ButtonContainer from '../../Layout/Container/ButtonContainer';
import Button from '../Button/Button';

const ListsStyle = styled.ul`
    color:#61677C;
    border-top:1px solid #61677C;
    border-bottom:1px solid #61677C;
    padding:1rem 2rem;
`
const ListStyle = styled.li`
    list-style-type: circle;
    color:#61677C;
    font-size:1.4rem;
`


const Lists = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data); // 데이터 response.data 안에 들어있다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {

    fetchUsers();
    
    }, []);

    if (loading) return <div>Loading..</div>;
    if (error) return <div>Error!</div>;
    if (!users) return null;

    return(
        <div>
            <ListsStyle>
            {users.map(user => (
                <ListStyle key={user.id}>
                {user.username} ({user.name})
                </ListStyle>
            ))}
            </ListsStyle>
            <ButtonContainer>
                <Button onClick={fetchUsers}>RELOAD</Button>
            </ButtonContainer>
        </div>
    )
}

export default Lists;