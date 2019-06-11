import React from 'react';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Social from '../components/Social';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import useGetData from '../hooks/useGetData'




const App = () => {
    const data = useGetData();
    return (
        <Main>
            <Sidebar>
                <About
                 avatar = {data.avatar}
                 name = {data.name}
                 profession = {data.provession}
                 bio = {data.bio}
                 address = {data.address}
                 social = {data.social}
                 />
                <Social />
            </Sidebar>
            <Info>
                <Education />
                <Experience />
                <Certificates />            
                <Skills />
            </Info>
        </Main>
    );
}

export default App;