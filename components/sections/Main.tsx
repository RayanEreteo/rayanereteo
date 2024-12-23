import Image from "next/image"

function Main() {
    return (
        <section>
            <div className="main-container w-[100vw] h-[100vh] text-white flex justify-center items-center flex-col">
                <h1 className="name-title font-extrabold text-[80px]">Rayan Ereteo</h1>
                <p className="subtext font-medium text-[40px]">Un développeur web full stack</p>
                <div className="contact-button text-[40px] font-light mt-[121px] text-center transition-all hover:bg-white hover:text-black">
                    <a href="https://youtube.com" className="border-4 p-4 block w-[420px]">Contacter</a>
                </div>
                <div className="social-media-container mt-[121px] w-[600px] flex flex-row justify-between">
                    <a href="https://github.com/RayanEreteo" target="_blank"><Image className="svg-white " src={"/github.svg"} alt="github" width={"100"} height={"100"}></Image></a>
                    <a href="https://www.linkedin.com/in/rayan-ereteo-6998b9254/" target="_blank"><Image className="svg-white " src={"/linkedin.svg"} alt="github" width={"100"} height={"100"}></Image></a>
                </div>
            </div>
        </section>
    )
}

export default Main