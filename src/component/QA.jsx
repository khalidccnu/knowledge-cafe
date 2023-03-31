import React from 'react';

const Qa = () => {
    return (
        <section className="py-5">
            <div className="container">
                <h3 className="font-semibold text-xl text-center mb-5">Q/A</h3>
                <div className="max-w-lg mx-auto space-y-3">
                    <div className="collapse border border-sky-900 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 mr-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                            <h5 className="w-11/12">What is the difference between state and props?</h5>
                        </div>
                        <div className="collapse-content">
                            <ul className="list-disc pl-24 pr-10 py-10 space-y-2 text-base">
                                <li>State is managed within the component but Props gets passed to the component.</li>
                                <li>State can be changed(mutable) but Props are read only and cannot be changed (immutable).</li>
                                <li>State can used to display changes with the component but Props are used to communicate between components.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse border border-sky-900 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 mr-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                            <h5 className="w-11/12">How does useState work under the hood?</h5>
                        </div>
                        <div className="collapse-content">
                            <p className="pl-24 pr-10 py-10 text-base">useState is React Hook that allows to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. When returns updated state value, then triggers a re-render of component.</p>
                        </div>
                    </div>
                    <div className="collapse border border-sky-900 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 mr-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                            <h5 className="w-11/12">What does useEffect do?</h5>
                        </div>
                        <div className="collapse-content">
                            <ul className="list-disc pl-24 pr-10 py-10 space-y-2 text-base">
                                <li>Making a request to an API for data from a backend server.</li>
                                <li>To interact with browser APIs.</li>
                                <li>Using unpredictable timing functions like setTimeout or setInterval.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse border border-sky-900 rounded-lg">
                        <input type="checkbox" />
                        <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 mr-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                            <h5 className="w-11/12">How React works under the hood?</h5>
                        </div>
                        <div className="collapse-content">
                            <p className="pl-24 pr-10 py-10 text-base">React basically maintains a tree. This tree is able to do efficient diff computations on the nodes. React takes HTML code as a tree. In fact, that is exactly how the browser treats DOM. It allows to effectively re-construct DOM in JavaScript and push only those changes to the DOM which have actually occurred by Diff Algorithm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qa;