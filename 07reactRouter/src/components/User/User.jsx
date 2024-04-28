import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className=" text-center text-white p-4 bg-cyan-950">
      User: {userid}
    </div>
  );
}

export default User;
