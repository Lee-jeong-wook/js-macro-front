import styled from 'styled-components';
import './App.css';
import { NaverLogin } from './components/NaverLogin';

function App() {
  return (
    <StyledContainer>
      <NaverLogin />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
