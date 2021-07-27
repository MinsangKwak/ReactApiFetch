import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import Button from './Button';
import axios from 'axios';


const StyledLists = styled.ul`
    /* list-style:none; */
    list-style-type: space-counter;
    color:#61677C;
    border-top:1px solid #61677C;
    border-bottom:1px solid #61677C;
    padding:1rem 2rem;
`
const StyledList = styled.li`
    list-style-type: circle;
    color:#61677C;
    font-size:1.4rem;
`

const Img = () => {

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
            setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
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
            <StyledLists>
            {users.map(user => (
                <StyledList key={user.id}>
                {user.username} ({user.name})
                </StyledList>
            ))}
            </StyledLists>
            <ButtonWrapper>
                <Button onClick={fetchUsers}>RELOAD</Button>
            </ButtonWrapper>
        </div>
    )
}

export default Img;