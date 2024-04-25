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

pm.getIds = async (task_id, term, numRecords) => {
  const startTime = Date.now();

  console.log("fetching all ids");

  const res = await fetch(
    `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${term}&retmax=${numRecords}&retmode=json`
  );

  const data = await res.json();

  const idList = data.esearchresult.idlist;

  const endTime = Date.now();
  const runTime = (endTime - startTime) / 1000;

  db.addPmidsToTask(task_id, idList, runTime);
};

export default pm;
