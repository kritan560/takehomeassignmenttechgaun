import ListOfDestinations from "../../../../components/ListOfDestinations";

const Homepage = async () => {
  return (
    <div className="py-4 space-y-4">
      <p className="text-center font-serif text-sky-500 mb-6 shadow-md hover:shadow-lg transition text-xl md:text-4xl bg-sky-100 px-4 py-1 rounded-md">
        Explore Nepal&apos;s beauty and adventures.
      </p>
      <div className="mt-6 flex justify-center">
        <ListOfDestinations />
      </div>
    </div>
  );
};

export default Homepage;
