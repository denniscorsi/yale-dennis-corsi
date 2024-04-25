const Pmid = ({ pmid }) => {
  const link = "https://pubmed.ncbi.nlm.nih.gov/" + pmid;

  return (
    <a href={link} target="_blank">
      <p>{pmid}</p>
    </a>
  );
};

export default Pmid;
