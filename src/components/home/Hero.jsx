import React from 'react'
import { Button, Carousel } from 'antd'
import { FundProjectionScreenOutlined } from '@ant-design/icons';


const items=[
    {
        key:'1',
        title:'web and mobile payment for developers',
        content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Praesentium reiciendis neque quos animi consequatur!Unde voluptates aperiam eligendi voluptas esse!Lorem, ipsum dolor sit amet consectetur adipisicing elit.Praesentium reiciendis neque quos animi consequatur!Unde voluptates aperiam eligendi voluptas esse!'
    },
    {
        key:'2',
        title:'web and mobile payment for developers',
        content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Praesentium reiciendis neque quos animi consequatur!Unde voluptates aperiam eligendi voluptas esse!Lorem, ipsum dolor sit amet consectetur adipisicing elit.Praesentium reiciendis neque quos animi consequatur!Unde voluptates aperiam eligendi voluptas esse!'
    },
    {
        key:'3',
        title:'web and mobile payment for developers',
        content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Praesentium reiciendis neque quos animi consequatur!Unde voluptates aperiam eligendi voluptas esse!Lorem, ipsum dolor sit amet consectetur adipisicing elit.Praesentium reiciendis neque quos animi consequatur!Unde voluptates aperiam eligendi voluptas esse!'
    }
]



const AppHero = () => {
    return (
        <div id='hero' className='heroBlock'>
            <Carousel>
            {items.map((item,i)=>{
                return(
                    <div key={i} className='container-fluid'>
                        <div className='content'>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <div className='btnHolder'>
                                <Button type='primary' size='large'>Learn More</Button>
                                <Button size='large' icon={<FundProjectionScreenOutlined />}>Watch Demo</Button>
                            </div>
                        </div>
                    </div>
                )
            })}
            </Carousel>
        </div>
    )
}

export default AppHero
