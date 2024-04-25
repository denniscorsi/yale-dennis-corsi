import { useEffect } from "react";

const Results = ({ isLoading, setIsLoading, taskId }) => {
  const checkTask = () => {
    fetch(`/fetch/${taskId}`)
      .then((res) => res.json())
      .then((task) => {
        console.log(task);
        if (task.status === "processing") {
          setTimeout(checkTask, 200);
        } else {
          console.log("complete!");
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    checkTask();
  });

  return <p>Results</p>;
};

export default Results;
