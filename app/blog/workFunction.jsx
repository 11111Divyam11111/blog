"use client";
import { BiDislike, BiSolidLike, BiLike, BiSolidDislike } from "react-icons/bi";
import { useState } from "react";



export const Like = () => {
    const [like, setLike] = useState(false);

    
    const handleLike = () => {
        setLike(!like);
    }
    return (
        <div className="flex flex-row gap-1 text-sm absolute mb-0 ">
            {
                !like ? <button className="text-center justify-items-center absolute mb-0">
                    <BiLike width={60} onClick={handleLike} />
                </button>
                    :
                    <button className="text-center justify-items-center absolute mb-0">
                        < BiSolidLike Bwidth={50} style={{ color: 'blue' }} onClick={handleLike} />
                    </button>
            }
        </div>
    );
};

export const DisLike = () => {
    const [disLike, setDisLike] = useState(false);

    const handleDisLike = () => {
        setDisLike(!disLike);
    }
    return (
        <div className="flex flex-row gap-1 text-sm">
            {
                !disLike ? <button className="text-center justify-items-center absolute mb-0 ml-7">
                    <BiDislike width={60} onClick={handleDisLike} />
                </button>
                    :
                    <button className="text-center justify-items-center absolute mb-0 ml-7">
                        <BiSolidDislike Bwidth={50} style={{ color: 'red' }} onClick={handleDisLike} />
                    </button>
            }

            {/*<p className="text-center text-red-500">{exercise.dislike}</p>*/}

        </div>
    );
};
