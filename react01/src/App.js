import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
    return (
        <Wrapper>                        
            <Header />
            <Main chae="채가" work="밥먹기" />
            <Main chae="김가" work="술먹기" />
            <Main chae="박가" work="눕기" />
            <Main chae="이가" />
            <Footer />
        </Wrapper>
    )
}


export default App; 