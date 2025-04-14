import React, { useState, useEffect } from 'react';

const Header = () => {
    const [text, setText] = useState('');
    const fullText = 'W elcome to my personel web site!I am Ömer Faruk Baysal.';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText((prev) => {
                if (index < fullText.length) {
                    return prev + fullText[index];
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
            index++;
        }, 100); 

        return () => clearInterval(interval);
    }, []); 

    return (
        <header className="d-flex justify-content-center align-items-center text-center" style={{ fontFamily: "Courier New,sans-serif", fontSize: '30px', color: '#2c3e50', lineHeight: '1.5', minHeight: '100vh' }}>
            <div>
                <h1>{text}</h1>
            </div>
        </header>
        
        
    );
};

export default Header;
