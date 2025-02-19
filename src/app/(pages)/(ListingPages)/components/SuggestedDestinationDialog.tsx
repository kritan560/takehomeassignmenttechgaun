import { useHomepageStore } from "@/store/HomepageStore";
import { AllDestinationsReturnType } from "@/types/returnTypes";
import { FaMountainCity, FaTreeCity } from "react-icons/fa6";
import { MdTempleBuddhist } from "react-icons/md";
import { PiCityFill } from "react-icons/pi";

const SuggestedDestinationDialog = () => {
  const { openDestinationDialog, setAllDestinations } = useHomepageStore();

  async function handleSuggestedDestinationClick(tag: string | null) {
    if (tag) {
      const res = await fetch(`/api/filter/${tag}`, { method: "GET" });
      const data = (await res.json()) as AllDestinationsReturnType;

      setAllDestinations(data);
    } else {
      const res = await fetch("/api/filter", { method: "GET" });
      const data = await res.json();
      setAllDestinations(data);
    }
  }

  return (
    <>
      {openDestinationDialog && (
        <div className="absolute translate-y-2">
          <div className="w-96 border-l border-r border-stone-400 rounded-2xl p-6 shadow-lg bg-white">
            <p className="font-medium text-sm text-stone-600">
              Suggested destinations
            </p>

            <div
              onClick={() => handleSuggestedDestinationClick("city")}
              className="flex gap-x-4 mt-4 hover:bg-stone-100 cursor-pointer px-2 py-1 rounded-md transition "
            >
              <div className="bg-blue-100 p-2 rounded-md">
                <FaTreeCity size={35} className="text-blue-500" />
              </div>
              <div>
                <p className="font-semibold text-stone-600">City</p>
                <p className="from-neutral-400 text-sm text-stone-500">
                  For Natural Lover
                </p>
              </div>
            </div>

            <div
              onClick={() => handleSuggestedDestinationClick("mountain")}
              className="flex gap-x-4 mt-4 hover:bg-stone-100 cursor-pointer px-2 py-1 rounded-md transition "
            >
              <div className="bg-green-100 p-2 rounded-md">
                <FaMountainCity size={35} className="text-green-500" />
              </div>
              <div>
                <p className="font-semibold text-stone-600">Mountain</p>
                <p className="from-neutral-400 text-sm text-stone-500">
                  For Mountain Lover
                </p>
              </div>
            </div>

            <div
              onClick={() => handleSuggestedDestinationClick("modern")}
              className="flex gap-x-4 mt-4 hover:bg-stone-100 cursor-pointer px-2 py-1 rounded-md transition "
            >
              <div className="bg-orange-100 p-2 rounded-md">
                <PiCityFill size={35} className="text-orange-500" />
              </div>
              <div>
                <p className="font-semibold text-stone-600">Modern</p>
                <p className="from-neutral-400 text-sm text-stone-500">
                  For Modern Lover
                </p>
              </div>
            </div>

            <div
              onClick={() => handleSuggestedDestinationClick("temple")}
              className="flex gap-x-4 mt-4 hover:bg-stone-100 cursor-pointer px-2 py-1 rounded-md transition "
            >
              <div className="bg-red-100 p-2 rounded-md">
                <MdTempleBuddhist size={35} className="text-red-500" />
              </div>
              <div>
                <p className="font-semibold text-stone-600">Temple</p>
                <p className="from-neutral-400 text-sm text-stone-500">
                  For Temple Lover
                </p>
              </div>
            </div>

            <div
              onClick={() => handleSuggestedDestinationClick(null)}
              className="bg-red-100 rounded-lg px-4 py-1 mt-2 hover:bg-red-200 cursor-pointer"
            >
              <p className="text-red-500 text-sm font-semibold text-center hover:text-red-600">
                Clear Suggestions
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuggestedDestinationDialog;
