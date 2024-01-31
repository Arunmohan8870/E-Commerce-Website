import React, { Fragment } from 'react'
import MetaData from '../componets/MetaData'

export default function Admin() {
    return (
        <Fragment>
            <MetaData title={"ADMIN"} />
            <div className='bg-container'>
                <div className='admin-container '>
                    <div className='img-admin' role='button'>
                        <h2>ADMIN</h2>
                        <img src="./images/admin2.jpg" width={250} height={250} alt="" />

                        <h5>Arun pandi ( AP )</h5>
                        <h6 >junior web developer</h6>

                    </div>
                    <div className='admin-detail'>
                        <input type="text " placeholder='First name *                            ARUN' />
                        <input type="text " placeholder='Surname *                                Joes' />
                        <input type="text " placeholder='Short name *                            AP' />
                        <input type="text " placeholder='Email *                                       stantleyjoes@gmail.com' />
                        <input type="text " placeholder='Phone Number *                     6374360962' />
                        <input type="text " placeholder='Link *                                          udayjuniortamil000webhostapp.com' />
                    </div>
                   
                </div>
            </div>
        </Fragment>
    )
}
