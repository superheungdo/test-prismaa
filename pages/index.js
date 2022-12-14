import firstPrismaClient from "../lib/firstClient";
import secondPrismaClient from "../lib/secondClient";

const Home = ({ device, admin }) => {
  return (
    <div className="bg-red-300 w-full h-screen grid grid-cols-16">
      <div className="bg-green-200">
        {device.map((item) => (
          <div key={item.id}>name: {item.name}</div>
        ))}
      </div>
      <div className="bg-blue-200">
        {admin.map((item) => (
          <div key={item.id}>name: {item.name}</div>
        ))}
      </div>
      <div className="bg-orange-200">3</div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const device = await firstPrismaClient.device.findMany();
  const admin = await secondPrismaClient.admin.findMany();

  console.log("device: ", device);
  console.log("admin: ", admin);

  return {
    props: {
      device,
      admin,
    },
  };
};
