const pmController = {};

pmController.initiateSearch = (req, res, next) => {
  const { term } = req.query;

  // Eventually can use a database for holding thign including genreating a unique task id
  const task_id = Math.floor(Math.random() * 1000000);

  // Initially request just one record, in order to get the number fo records to return
  fetch(
    `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${term}&retmax=1&retmode=json`
  )
    .then((res) => res.json())
    .then((data) => {
      const records = data.esearchresult.count;
      const response = {
        records: records,
        query: term,
        task_id: task_id
      };
      console.log(response);
      res.locals.response = response;
      next();
    });
};

pmController.completeSearch = (req, res, next) => {

  // Call next right away in order to send response back to client immediately. 
  next();

  

}

export default pmController;
