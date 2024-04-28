import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
      Github user login id : {data[0].id}
    </div>
  );
}

export default Github;

export const githubinfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users`);
  const data = await res.json();
  return data;
};
