import ContactButton from "../ContactButton"

function Main() {
    return (
        <section>
            <div className="main-container w-[100vw] h-[100vh] text-white flex justify-center items-center flex-col">
                <h1 className="name-title font-extrabold text-[80px]">Rayan Ereteo</h1>
                <p className="subtext font-medium text-[40px]">Un développeur web full stack</p>
                <ContactButton></ContactButton>
            </div>
        </section>
    )
}

export default Main