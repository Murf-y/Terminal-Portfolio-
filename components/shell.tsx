import { BeakerIcon } from '@heroicons/react/solid'
const Shell = () => {
    return (
        <div className="mx-16 mt-6">
            <div className="bg-blue-lighter h-12 px-5 rounded-t-2xl flex justify-end items-center">
                <BeakerIcon></BeakerIcon>
            </div>
            <div className="bg-blue-light min-h-fit h-[28rem] rounded-b-2xl"></div>
        </div>
    )
}

export default Shell