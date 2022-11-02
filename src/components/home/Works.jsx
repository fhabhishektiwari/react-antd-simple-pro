import React, { useState } from 'react'
import { Button, Modal } from 'antd';

const AppWorks = () => {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true)  
      };

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false)
    }
    return (
        <div id='works' className='block worksBlock'>
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it's Work?</h2>
                    <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                </div>
                <div className="contentHolder">
                    <Button size="large" onClick={showModal}><i className="fas fa-play"></i></Button>
                </div>
                <Modal
                    title="Woocommerce Tutorial"
                    open={open}
                    onCancel={handleCancel}
                    footer={null}
                    destroyOnClose={true}
                >
                    <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
                </Modal>

            </div>
        </div>
    )
}

export default AppWorks
