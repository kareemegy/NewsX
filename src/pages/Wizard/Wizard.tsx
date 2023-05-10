import Button from "../../components/button/button";

const Wizard = () => {
  return (
    <div className="bg-wizardBlue h-screen">
      <div className="container m-auto px-5 flex flex-col h-[90vh] w-[600px] justify-around items-center shadow-2xl mt-5  ">
        <div className="text-center">
          <h1 className="text-3xl mb-5 text-blue">Build Your Profile</h1>
          <p className="text-xl text-slate-500">
            This information will let us know more about you.
          </p>
        </div>
        <div className="relative w-full z-10">
          <div className="border bg-black  absolute top-[7px] right-[50px] w-[490px] -z-10">
            {" "}
          </div>
          <div className=" w-full flex justify-between items-center  ">
            <div className="flex flex-col items-center">
              <span className="block w-[8px] h-[8px] rounded-xl bg-slate-200 p-2"></span>
              <Button className="text-base text-slate-500">About</Button>
            </div>
            <div className="flex flex-col items-center">
              <span className="block w-[8px] h-[8px] rounded-xl bg-slate-500 p-2"></span>
              <Button className="text-base text-slate-500">Topics</Button>
            </div>
            <div className="flex flex-col items-center">
              <span className="block w-[8px] h-[8px] rounded-xl bg-slate-500 p-2"></span>
              <Button className="text-base text-slate-500">Preferences</Button>
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
          <div className="flex flex-col justify-center ">
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
