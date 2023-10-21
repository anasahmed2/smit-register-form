import "./styles.css";

const InputComp = ({name, type, placeholder, label }) => {
   
    return (
        <>
            <div data-aos="fade" className="w-ful h-auto p-[10px]">
                <div className="w-ful h-auto pl-[30px] mt-[0] mb-[0] ml-[auto] mr-[auto]">
                    <p className="m-[0] text-green-500 highlight font-bold text-[1.2em]">{name}:</p>
                </div>
                <div className="w-ful h-auto pt-[7px] pb-[7px] pl-[20px] pr-[20px] rounded-[15px] flex justify-center items-center" style={{border:"1px solid #a2a2a2"}}>
                    <input
                        type={type}
                        className="w-[99%] h-auto text-gray-600 p-0 text-[1.5em] border-none bg-transparent" style={{outline:"none",'::placeholder': { color: 'red' }}}
                        placeholder={placeholder}
                    />  
                    <div className="w-[30px] h-[30px] flex justify-center items-center text-[#a2a2a2] text-[2em] pt-[10px]">*</div>
                </div>
            </div>
        </>
    );
};

const TextAreaComp = ({ label, placeholder }) => {
    return (
        <>
            <div className="w-ful h-auto p-[10px]">

                <div data-aos="fade" className="w-ful h-auto pl-[30px] mt-[0] mb-[0] ml-[auto] mr-[auto]">
                    <p className="m-[0] text-green-500 highlight font-bold text-[1.2em]">what's your mind</p>
                </div>
                <div className="textAreastar">
                    <textarea className="textArea1" placeholder={placeholder}></textarea>
                </div>
            </div>
        </>
    );
};

export { InputComp, TextAreaComp };