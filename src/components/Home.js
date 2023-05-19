import React from 'react';

function App(props) {
    return (
        <div className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed main-class" style={{ height: "calc(100vh - 3em)", width: "calc(100vw - 3em)", position: "absolute" }}>
            <div className="h-full">
                {/* <!--Nav--> */}
                <div className="w-full container mx-auto">
                    <div className="w-full flex items-center justify-between">
                        <span className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                            VSL&nbsp;<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Funnel</span>
                        </span>
                    </div>
                </div>

                {/* <!--Main--> */}
                <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    {/* <!--Left Col--> */}
                    <div className="flex flex-col w-full xl:w-5/5 justify-center lg:items-start overflow-y-hidden">
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-center">
                                Main
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                                    Hero Message
                                </span>
                                to sell yourself!
                            </h1>
                            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-center">
                                Sub-hero message, not too long and not too short. Make it just right!
                            </p>
                        </div>

                        <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 xl:w-2/5" style={{ marginLeft: "30%" }}>
                            <div className="mb-4">
                                <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
                                    Login
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                    id="username"
                                    type="text"
                                    placeholder="username"
                                    style={{ marginBottom: "20px" }}
                                    value={props.username}
                                    onChange={(e) => {

                                        props.setUsername(e.target.value)
                                    }}
                                />
                                <input
                                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                    id="emailaddress"
                                    type="text"
                                    placeholder="email@email.com"
                                    value={props.email}
                                    onChange={(e) => props.setEmail(e.target.value)}
                                />
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <div style={{ width: "100%", textAlign: "right" }}>
                                    {/* <a href="./main.html"> */}
                                    <button
                                        className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-10 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                        type="button"
                                        onClick={() => props.goAction()}
                                    >
                                        Go
                                    </button>
                                    {/* </a> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!--Footer--> */}
                <div className="w-full pt-16 pb-6 text-sm text-center md:text-right fade-in" style={{ bottom: "0px", position: "absolute" }}>
                    <span className="text-gray-500 no-underline hover:no-underline">2023 &copy;</span>
                    Tyrese
                </div>
            </div>
        </div>
    )
}

export default App;
