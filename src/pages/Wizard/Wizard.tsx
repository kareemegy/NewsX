import { useState } from "react";
import Button from "../../components/button/button";
import cn from "classnames";

const Wizard = () => {
  const [step, setStep] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const aboutStep = () => {
    setStep(1);
    setActiveButton(1);
  };
  const topicsStep = () => {
    setStep(2);
    setActiveButton(2);
  };
  const preferencesStep = () => {
    setStep(3);
    setActiveButton(3);
  };
  return (
    <div className=" h-screen bg-wizardBlue">
      <div className="container m-auto px-5 flex flex-col h-[90vh] w-[600px] justify-evenly items-center mt-5">
        <div className="text-center">
          <h1 className="text-3xl mb-5 text-wizardBlueDark">
            Build Your Profile
          </h1>
          <p className="text-xl text-slate-500">
            This information will let us know more about you.
          </p>
        </div>
        <div className="relative w-full z-10">
          <div className="border absolute top-[7px] right-[50px] w-[490px] -z-10">
            {" "}
          </div>
          <div
            className={cn(
              "border border-slate-500 absolute top-[7px] -z-10 transition-all delay-100 duration-300 ease-in ",
              {
                "w-[10px] left-[15px]": step === 1,
                "left-[16px] w-[250px]": step === 2,
                "left-[16px] w-[500px]": step === 3,
              }
            )}
          >
            {" "}
          </div>
          <div className=" w-full flex justify-between items-center">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "block w-[8px] h-[8px] rounded-xl  p-2 transition-all delay-100 duration-300  ease-in",
                  {
                    "bg-slate-500": activeButton === 1,
                    "bg-slate-200": activeButton !== 1,
                  }
                )}
              ></span>
              <Button handleClick={aboutStep} className="text-slate-500">
                About
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "block w-[8px] h-[8px] rounded-xl  p-2 transition-all delay-100 duration-300  ease-in",
                  {
                    "bg-slate-500": activeButton === 2,
                    "bg-slate-200": activeButton !== 2,
                  }
                )}
              ></span>
              <Button handleClick={topicsStep} className="text-slate-500">
                Topics
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "block w-[8px] h-[8px] rounded-xl  p-2 transition-all delay-100 duration-300 ease-in",
                  {
                    "bg-slate-500": activeButton === 3,
                    "bg-slate-200": activeButton !== 3,
                  }
                )}
              ></span>
              <Button handleClick={preferencesStep} className="text-slate-500">
                Preferences
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Info />
          <div className="flex justify-between mt-8">
            <Button
              handleClick={() => setStep(step - 1)}
              className="px-6 py-3  font-bold text-right  transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
            >
              PREV
            </Button>
            <Button
              handleClick={() => setStep(step + 1)}
              className={cn(
                "px-6 py-3 rounded-lg cursor-pointer text-white font-bold  transition-all hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs  bg-gradient-to-tl from-[#141727] to-[#3a416f] text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25"
              )}
            >
              NEXT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wizard;

const Info = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };
  return (
    <div className="shadow-2xl p-5 h-[450px] w-[750px] ">
      <div className="text-center mb-6">
        <h1 className="text-3xl mb-3 text-wizardBlueDark">
          Let's start with the basic information
        </h1>
        <p className="text-lg text-slate-500">
          Let us know your name and email address. Use an address you don't mind
          other users contacting you at
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-around px-[30px] w[50%]">
          <div>
            <label htmlFor="file-input">
              {file ? (
                <img
                  className="w-[150px] h-[150px] rounded-xl cursor-pointer"
                  src={URL.createObjectURL(file)}
                  alt="uploaded file"
                />
              ) : (
                <img
                  className="w-[150px] h-[150px] rounded-xl cursor-pointer shadow-xl"
                  src="src/assets/images/upload.jpg"
                  alt="temp img"
                />
              )}
            </label>
            <input
              id="file-input"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <div className="mb-1">
              <label className=" text-sm text-slate-700" htmlFor="firstName">
                FirstName
              </label>
              <input
                className="w-full p-1 rounded-xl outline-none border border-slate-200"
                type="text"
                name="firstName"
                placeholder="Eg. John"
                id="firstName"
              />
            </div>
            <div className="mb-1">
              <label className="text-sm text-slate-700" htmlFor="lastName">
                LastName
              </label>
              <input
                className="w-full p-2 rounded-xl outline-none border border-slate-200"
                type="text"
                name="lastName"
                placeholder="Eg. Doe"
                id="lastName"
              />
            </div>
            <div className="mb-1">
              <label className="text-sm text-slate-700" htmlFor="lastName">
                Address
              </label>
              <input
                className="w-full p-2 rounded-xl outline-none border border-slate-200"
                type="text"
                name="lastName"
                placeholder="Eg. 1234 Main St"
                id="lastName"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
