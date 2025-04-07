// import path from "path";
//
// const handler = async (req, res) => {
//   const file = path.resolve("/files/BrianCordiscoCV_March2025.pdf");
//   const data = file.toString("base64");
//   return data;
// };

export const CV = () => {
  // const data = await handler();

  return (
    <div className="nav_buttons">
      <a
      // href={data}
      // target="_blank"
      // rel="noopener noreferrer"
      // locale="false"
      // className="resume_button"
      // download
      >
        Resume
      </a>
    </div>
  );
};
