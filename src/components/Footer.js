const Footer = props => {
  const { year, companyName } = props;
  return (
    <div className="footer">
      <p className="footer-text">
        © {year} {companyName}
      </p>
    </div>
  );
};
export default Footer;
