const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="max-w-5xl mx-auto w-full mt-10 px-4">
      <div className="text-muted-foreground">
        <hr />
      </div>
      <div className="flex justify-center my-10 text-sm text-muted-foreground">
        © {date} ChatApp. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
