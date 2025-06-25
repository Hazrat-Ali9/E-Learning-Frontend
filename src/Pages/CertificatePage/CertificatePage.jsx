import React, { useContext } from 'react'
import { courseContext } from '../../Contexts/CourseContext/CourseContext'
import { authContext } from '../../Contexts/AuthContex/AuthContext'
import Logo from '../../Components/Logo/Logo'

const CertificatePage = () => {

    const { user } = useContext(authContext)

    return (
        <div id='certificate'>
            <div className="container py-10">
                <div className="flex items-center flex-col gap-10 justify-center h-[700px] bg-gray-100">
                    <Logo/>
                    <h1 className='font-bold text-center text-3xl'>Congratulations {user?.displayName}</h1>
                    <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
                        <div className="text-center border-b pb-4 mb-6">
                            <h1 className="text-3xl font-bold text-gray-700">Certificate of Achievement</h1>
                            <p className="text-gray-500 mt-2">
                                This is to certify that {user?.displayName}
                            </p>
                        </div>
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800">{ }</h2>
                            <p className="text-gray-500 mt-2">has successfully completed Our Course</p>
                            <h3 className="text-xl font-medium text-gray-700 mt-1">{ }</h3>
                        </div>
                        <div className="text-center border-t pt-4">
                            <p className="text-gray-500 mt-2">By iSchool</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificatePage
