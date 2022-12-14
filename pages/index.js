import firstPrismaClient from "../lib/firstClient";
import secondPrismaClient from "../lib/secondClient";

const Home = () => {
  return (
    <div className="bg-red-300 w-full h-screen grid grid-cols-16">
      <div className="bg-green-200">1</div>
      <div className="bg-blue-200">2</div>
      <div className="bg-orange-200">3</div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const first = await firstPrismaClient.device.findMany();
  const second = await secondPrismaClient.admin.findMany();

  console.log("first: ", first);
  console.log("second: ", second);

  return {
    props: {},
  };
};
