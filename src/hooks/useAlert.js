import React, {useState} from 'react';

const useAlert = () => {
    const [alert, setAlert] = useState({show: false, text: '', type: 'danger'})

    return (
        <div>

        </div>
    );
};

export default useAlert;