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




const App = () => {
    return(
        <Main>
            <Sidebar>
                <About>

                </About>
                <Social>

                </Social>
            </Sidebar>
            <Info>
                <Education>

                </Education>
                <Experience>

                </Experience>
                <Certificates>
                    
                </Certificates>
                <Skills>

                </Skills>
            </Info>
        </Main>
    );
};

export default App;