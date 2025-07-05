const Footer = props => {
  const { year, companyName } = props;
  return (
    <div className="bg-gray-800 text-white p-4 text-center mt-8 shadow-inner">
      <p className="text-sm font-light">
        © {year} {companyName}. All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
