import {useEffect, useState} from "react";
import SavingSection from "./Savings";
// import { useNavigate } from "react-router-dom";

function DashBoardPage() {
    // let navigate = useNavigate();

    return (
        <div >
            <header className="bg-primary p-4 flex">
                <div className="w-4/12"/>
                <div className="w-4/12 align-middle text-center">
                    <h1 className="text-3xl font-semibold">Luminara</h1>
                    <p className="mt-2">
                        Lightening the Path to Sustainable Energy Excellence
                    </p>
                </div>
                <div className="w-3/12"/>
                <div className="avatar placeholder w-1/12">
                    <div className="bg-neutral text-neutral-content rounded-full">
                        <span className="text-xs">AA</span>
                    </div>
                </div>
            </header>
            <SavingSection></SavingSection>
        </div>


    );
}

export default DashBoardPage;
