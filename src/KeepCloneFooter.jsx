import React from 'react'

function KeepCloneFooter() {
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <h2>Google &copy; {year}</h2>
            </div>
        </>
    )
}

export default KeepCloneFooter
