import firstPrismaClient from "../lib/firstClient";
import secondPrismaClient from "../lib/secondClient";

const Home = ({ firstUser, secondUser }) => {
  return (
    <div className="bg-red-300 w-full h-screen grid grid-cols-16">
      <div className="bg-green-200">
        <div>name: {firstUser.name}</div>
      </div>
      <div className="bg-blue-200">
        <div>name: {secondUser.username}</div>
      </div>
      <div className="bg-orange-200">3</div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const firstUser = await firstPrismaClient.user.findFirst();
  const secondUser = await secondPrismaClient.user.findFirst();

  console.log("firstUser: ", firstUser);
  console.log("secondUser: ", secondUser);

  return {
    props: {
      firstUser,
      secondUser,
    },
  };
};
