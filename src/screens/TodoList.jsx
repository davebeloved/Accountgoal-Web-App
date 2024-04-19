import React, { useState } from "react";
import MapScreen from "../assets/map.png";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import Axios from "axios";

const TodoList = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        eventName: "",
        client: "",
        endDate: "",
        noEndDate: false,
        priority: "",
        reminder: false,
        note: ""
    });

    const handleToggle = () => {
        setIsChecked(!isChecked);
        setFormData(prevState => ({
            ...prevState,
            noEndDate: !prevState.noEndDate
        }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5000/api/todo/createTodoList", formData)
            .then((res) => {
                console.log(res.data);
                // Optionally, clear the form or show a success message
                setFormData({
                    eventName: "",
                    client: "",
                    endDate: "",
                    noEndDate: false,
                    priority: "",
                    reminder: false,
                    note: ""
                });
            })
            .catch((err) => {
                console.error(err);
                // Optionally, show an error message
            });
    };

    return (
        <div className="flex h-screen">
            <div className="">
                <img
                    src={MapScreen}
                    alt="map screen image"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-">
                <div className="justify-items-start p-4">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-x-10 items-center w-full">
                            <div>
                                <CiCalendarDate className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold font-inter">To-do List</h1>
                            </div>
                        </div>
                        <div>
                            <div className="mr-3">
                                <MdOutlineCancel className="w-8 h-8 text" />
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="px-10 mt-16">
                        <div className="flex flex-col gap-y-1 mt-14 md:mt-4">
                            <label className="font-inter text-[14px]" htmlFor="todo">
                                Todo<span className="text-[#ed0202]">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder=""
                                name="eventName"
                                value={formData.eventName}
                                onChange={handleChange}
                                className="border-2 rounded-2xl placeholder-text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
                            />
                        </div>
                        <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
                            <label className="font-inter text-[14px]" htmlFor="client">
                                Attach Client<span className="text-[#ed0202]">*</span>
                            </label>
                            <select
                                name="client"
                                value={formData.client}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Select Client</option>
                                <option value="Israel@accountsgoal.com">Israel@accountsgoal.com</option>
                                <option value="Israel@gloriation.com">Israel@gloriation.com</option>
                                <option value="Davidson@gloriation.com">Davidson@gloriation.com</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
                            <label className="font-inter text-[14px]" htmlFor="endDate">
                                End Date<span className="text-[#ed0202]">*</span>
                            </label>
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                className="border-2 rounded-2xl placeholder-text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
                            />
                        </div>
                        <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
                            <div className="flex items-center justify-between">
                                <label className="font-inter text-[14px]" htmlFor="noEndDate">
                                    No end date for task<span className="text-[#ed0202]">*</span>
                                </label>
                                <div
                                    className={`w-12 h-7 bg-gray-400 rounded-full relative cursor-pointer transition-colors duration-300 ${isChecked ? 'bg-gray-500' : ''}`}
                                    onClick={handleToggle}
                                >
                                    <div
                                        className={`w-6 h-6 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-1 transition-transform duration-300 ${isChecked ? 'translate-x-5' : ''}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center space-x-4 mt-14 md:mt-10">
                            <button
                                className="bg-red-500 hover:bg-blue-700 text-white font-bold rounded-full px-4 py-2"
                                type="button"
                                onClick={() => setFormData(prevState => ({ ...prevState, priority: "High" }))}
                            >
                                High Priority
                            </button>
                            <button
                                className="bg-yellow-500 hover:bg-blue-700 text-white font-bold rounded-full px-4 py-2"
                                type="button"
                                onClick={() => setFormData(prevState => ({ ...prevState, priority: "Medium" }))}
                            >
                                Medium Priority
                            </button>
                            <button
                                className="bg-green-500 hover:bg-blue-700 text-white font-bold rounded-full px-4 py-2"
                                type="button"
                                onClick={() => setFormData(prevState => ({ ...prevState, priority: "Low" }))}
                            >
                                Low Priority
                            </button>
                        </div>
                        <div className="flex flex-col gap-y-1 mt-14 md:mt-10">
                            <div className="flex items-center justify-between">
                                <label className="font-inter text-[14px]" htmlFor="reminder">
                                    Set Reminder<span className="text-[#ed0202]">*</span>
                                </label>
                                <div
                                    className={`w-12 h-7 bg-blue-500 rounded-full relative cursor-pointer transition-colors duration-300 ${isChecked ? 'bg-blue-500' : ''}`}
                                    onClick={handleToggle}
                                >
                                    <div
                                        className={`w-6 h-6 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-1 transition-transform duration-300 ${isChecked ? 'translate-x-5' : ''}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-1 mt-14 md:mt-4">
                            <label className="font-inter text-[14px]" htmlFor="note">
                                Type note<span className="text-[#ed0202]">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder=""
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                className="border-2 rounded-2xl placeholder-text-[#d7d7d7] px-3 py-2 border-[#dfdfdf] outline-none w-[461px] h-[54px]"
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-full focus:outline-none focus:shadow-outline mt-20 mx-auto block"
                            type="submit"
                        >
                            + Create Todo
                        </button>
                    </form>
                    <div className="mt-4">
                        <p className="text-center text-gray-500">Set Immediate appointment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
