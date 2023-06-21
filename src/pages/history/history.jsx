import { useEffect, useState } from "react";
import CustomButton from "../../components/ui/button/button";
import HistoryCard from "../../components/ui/history-card/historyCard";
import { usePull } from "../../hooks/history-hooks/pullQuery";
import { useClear } from "../../hooks/history-hooks/clearData";
const History = () => {
  const { PullData } = usePull();
  const { ClearData } = useClear();
  const [historyData, setHistoryData] = useState(PullData());
  useEffect(() => {
    historyData;
  });
  return (
    <div className="pt-28 flex flex-col gap-3 mx-generalPad ">
      <div className="flex items-start justify-between">
        <h2 className="text-smallFont font-bold text-fontClr mb-4">
          Search history
        </h2>
        <CustomButton
          label={"clear all"}
          style={"search"}
          onClick={() => {
            ClearData();
            setHistoryData((prev) =>
              prev.filter((query) => query.id !== query.id)
            );
          }}
        />
      </div>
      {historyData.map((query) => {
        return (
          <HistoryCard
            id={query.id}
            key={query.id}
            label={query.query}
            setHistoryData={setHistoryData}
          />
        );
      })}
    </div>
  );
};
export default History;
