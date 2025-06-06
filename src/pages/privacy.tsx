import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

const Privacy = () => {
  const paras = [
    {
      heading: "Agreement to Terms",
      paragraph:
        "By accessing or using the chatapp platform, you agree to be bound  by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform",
    },
    {
      heading: "Agreement to Terms",
      paragraph:
        "Permission is granted to temporarily access the platform for personal or business use This license does not include permission to modify, distribute, or create derivative works Misuse of the platform may result in termination of access",
    },
    {
      heading: "Agreement to Terms",
      paragraph:
        "Permission is granted to temporarily access the platform for personal or business use This license does not include permission to modify, distribute, or create derivative works Misuse of the platform may result in termination of access",
    },
  ];
  return (
    <div className="">
      <NavLink
        to={"/"}
        className="flex gap-2 items-center hover:bg-neutral-800 px-2 py-1 rounded-md w-fit m-6 transition transform ease-in-out duration-200">
        <ArrowLeft />
        <h1> Back</h1>
      </NavLink>
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-center text-4xl font-bold m-4">Terms of Service</h1>
        {paras.map((para, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold ">{para.heading}</h1>
            <p className="text-base text-muted-foreground mb-8">
              {para.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
