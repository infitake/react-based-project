import React from 'react';
//this is ui based component
const Infinity = (props) =>{
    //props are passed in this function
        const {infinity}= props;
        const InfinityList = infinity.map(infi => {
            return (
                <div className='infi' key={infi.id}>
                <div>name: {infi.name}</div>
                <div>class: {infi.classe}</div>
                <div>rollno: {infi.rollno}</div>
            </div>
            )
        }) ;
        return(
            <div className="InfinityList">
                { InfinityList }
            </div>
        );
}
export default Infinity;