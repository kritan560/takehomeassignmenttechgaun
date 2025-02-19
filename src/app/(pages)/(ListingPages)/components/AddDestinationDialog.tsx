import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import CustomTextArea from "@/components/CustomTextArea";
import { useDestinationStore } from "@/store/DestinationStore";
import { useHomepageStore } from "@/store/HomepageStore";
import { SingleDestinationReturnType } from "@/types/returnTypes";
import { useState } from "react";
import toast from "react-hot-toast";

const AddDestinationDialog = () => {
  const {
    setDestination,
    setDestinationImage,
    setDestinationDescription,
    setDestinationTag,
    destination,
    destinationDescription,
    destinationImage,
    destinationTag,
  } = useDestinationStore();
  const {
    openAddDestinationDialog,
    setOpenAddDestinationDialog,
    setAllDestinations,
    allDestinations,
  } = useHomepageStore();
  const [disable, setDisable] = useState(false);

  async function handleSaveClick() {
    try {
      setDisable(true);

      const res = await fetch("/api/create-destination", {
        method: "POST",
        body: JSON.stringify({
          destination,
          destinationDescription,
          destinationImage,
          destinationTag,
        }),
        cache: "no-store",
      });

      const data = (await res.json()) as SingleDestinationReturnType;

      toast.success("Destination Added");

      setAllDestinations([...allDestinations, data]);
      setOpenAddDestinationDialog(false);

      if (res.ok) {
        setDisable(false);
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.success("Something went wrong");
    }
  }

  return (
    <div className="absolute -translate-x-full left-full translate-y-4">
      {openAddDestinationDialog && (
        <div className="px-4 py-2 bg-white border shadow-lg rounded-lg space-y-2 md:w-96 w-80">
          <h3 className="text-center text-lg font-semibold mb-6 mt-3">
            Create New Destination
          </h3>
          <CustomInput onChange={setDestination} name="Destination" />
          <CustomInput
            extraInfo="(Seperate Tag by comma)"
            onChange={setDestinationTag}
            name="Destination Tag"
          />
          <CustomTextArea
            onChange={setDestinationDescription}
            name="Destination Description"
          />
          <CustomInput
            name="Destination Image Url"
            onChange={setDestinationImage}
          />

          <Button disable={disable} onClick={handleSaveClick} name="Save" />
        </div>
      )}
    </div>
  );
};

export default AddDestinationDialog;
