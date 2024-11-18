import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import Tasklist from "../Tasklist/Tasklist";

const EmployeeDashboard = () => {
    return (
        <div className=" p-16 bg-[#1c1c1c] h-screen">
            <Header />
            <TaskListNumbers />
            <Tasklist />
        </div>
    )
}

export default EmployeeDashboard;