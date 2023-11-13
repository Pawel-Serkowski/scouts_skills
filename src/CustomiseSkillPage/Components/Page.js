import React, { useState, useRef } from "react";

import Header from "./Header";
import TasksTable from "./TasksTable";
import SaveAsPdfButton from "./SaveAsPdfButton";
import "./Page.css";

const Page = (props) => {
  const skill = props.skill;
  const [isDownloading, setIsDownloading] = useState(false);

  const pdf = useRef();

  const downloadHandler = () => {
    setIsDownloading((prev) => !prev);
  };

  return (
    <section className="customise-skill-page__page" id="pdf-view">
      <div ref={pdf} style={{ width: "100%" }}>
        <h1>KARTA PRÓBY NA SPRAWNOŚĆ</h1>
        <Header skill={skill} />
        <TasksTable skill={skill} isDownloading={isDownloading} />

        {!isDownloading && (
          <SaveAsPdfButton
            pdf={pdf}
            title={skill.title}
            download={downloadHandler}
          />
        )}
      </div>
    </section>
  );
};

export default Page;
