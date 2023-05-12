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
    <div className="bg-wizardBlue h-screen">
      <div className="container m-auto px-5 flex flex-col h-[90vh] w-[600px] justify-around items-center shadow-2xl mt-5">
        <div className="text-center">
          <h1 className="text-3xl mb-5 text-blue">Build Your Profile</h1>
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
              "border border-slate-500 absolute top-[7px] -z-10 transition-all delay-100 duration-300 ",
              {
                "w-[10px] left-[15px]": step === 1,
                "left-[16px] w-[250px]": step === 2,
                "left-[16px] w-[500px]": step === 3,
              }
            )}
          >
            {" "}
          </div>
          {/* left = 16  | right 50 | top 7  */}
          {/* slate-200 not clicked | slate-500 active clicked */}
          <div className=" w-full flex justify-between items-center ">
            <div className="flex flex-col items-center">
              <span
                className={cn("block w-[8px] h-[8px] rounded-xl  p-2 transition-all delay-100 duration-300  ", {
                  "bg-slate-500": activeButton === 1,
                  "bg-slate-200": activeButton !== 1,
                })}
              ></span>
              <Button handleClick={aboutStep} className="text-slate-500">
                About
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span
                className={cn("block w-[8px] h-[8px] rounded-xl  p-2 transition-all delay-100 duration-300 ", {
                  "bg-slate-500": activeButton === 2,
                  "bg-slate-200": activeButton !== 2,
                })}
              ></span>
              <Button handleClick={topicsStep} className="text-slate-500">
                Topics
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <span
                className={cn("block w-[8px] h-[8px] rounded-xl  p-2 transition-all delay-100 duration-300 ", {
                  "bg-slate-500": activeButton === 3,
                  "bg-slate-200": activeButton !== 3,
                })}
              ></span>
              <Button handleClick={preferencesStep} className="text-slate-500">
                Preferences
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center my-6">
            <h1 className="text-sm text-blue">
              Let's start with the basic information
            </h1>
            <p className="text-sm text-slate-500">
              Let us know your name and email address. Use an address you don't
              mind other users contacting you at
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-around px-[30px]">
              <div>
                <img
                  className="w-16 h-16 rounded-xl"
                  src="src/assets/images/team-2.jpg"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-slate-700" htmlFor="firstName">
                  FirstName
                </label>
                <input
                  className="w-full p-1 rounded-xl outline-none border border-slate-200"
                  type="text"
                  name="firstName"
                  placeholder="Eg. John"
                  id="firstName"
                />
                <label className="text-slate-700" htmlFor="lastName">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
