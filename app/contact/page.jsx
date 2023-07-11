'use client'

import { CldImage } from 'next-cloudinary'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-0 mx-auto max-w-7xl my-16 rounded shadow-lg">
                <div>
                    <CldImage
                        width="1280"
                        height="600"
                        src="52"
                        className="relative rounded"
                    />
                </div>
                <div className=" p-6 bg-slate-200 text-third text-lg font-semibold">
                    <h5 className="ml-3 my-3 text-3xl">
                        Doğadan Gelen Konforunuz...
                    </h5>
                    <form>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col p-3">
                                <span>İsim</span>
                                <input type="text" className="py-3 rounded" />
                            </div>

                            <div className="flex flex-col p-3">
                                <span>Soyad</span>
                                <input type="text" className="py-3 rounded" />
                            </div>
                        </div>

                        <div className="flex flex-col p-3">
                            <span>Email</span>
                            <input type="email" className="py-3 rounded" />
                        </div>

                        <div className="flex flex-col p-2">
                            <span>Mesajınız</span>
                            <input
                                type="email"
                                className="w-full h-[100px] rounded"
                            />
                        </div>

                        <input
                            type="submit"
                            className="my-3 p-3 rounded border bg-slate-400 ml-2 cursor pointer hover:text-slate-50 hover:bg-third"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page
