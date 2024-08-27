import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState("");

  const handle = async () => {
    const result = "Hahah";
    console.log(result);
    setData(result as unknown as string);
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <div>
      <img src={data} alt="" />
    </div>
  );
}
