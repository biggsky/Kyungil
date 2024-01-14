import React from 'react';
import {car} from "../img";

const Body3 = (name) =>{
    console.log(car);
    console.log(name.name);
    return (
        <>
            <div id='Body3Bigdiv'>
                <p id='titlename'>{name.name}</p>
                <div id='div1'>
                    <div className='four'>
                        <div id='four_top'><img src={car} alt="" /></div>
                        <div id='four_bottom'>
                            <p>NFT Really 서비스 소개</p>
                            <h4>NFTReally Service ▶</h4>
                        </div>
                    </div>
                    <div className='four'>
                        <div id='four_top'><img src={car} alt="" /></div>
                        <div id='four_bottom'>
                            <p>NFT Really 서비스 소개</p>
                            <h4>NFTReally Service ▶</h4>
                        </div>
                    </div>
                    <div className='four'>
                        <div id='four_top'><img src={car} alt="" /></div>
                        <div id='four_bottom'>
                            <p>NFT Really 서비스 소개</p>
                            <h4>NFTReally Service ▶</h4>
                        </div>
                    </div>
                    <div className='four'>
                        <div id='four_top'><img src={car} alt="" /></div>
                        <div id='four_bottom'>
                            <p>NFT Really 서비스 소개</p>
                            <h4>NFTReally Service ▶</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Body3