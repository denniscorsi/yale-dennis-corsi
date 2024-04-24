import db from "./databaseAPI.js";

const pm = {};

pm.getNumRecords = async (term) => {
  const res = await fetch(
    `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${term}&retmax=1&retmode=json`
  );

  const data = await res.json();

  const numRecords = data.esearchresult.count;

  return numRecords;
};

pm.initiatePendingTask = async (numRecords) => {
  const task_id = await db.addPendingTask();
  return task_id;
};

pm.getIds = async (term, numRecords) => {
  console.log("fetching all ids");
};

export default pm;
