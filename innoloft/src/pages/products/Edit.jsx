import React, { useEffect, useState } from "react";
import Template from "../../components/custom/Template";
import EditSection from "../../components/EditSection";
import InputText from "../../components/custom/InputText";
import AccountInfo, { MainAccountInfo } from "../../components/AccountInfo";
import Address from "../../components/Address";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "../../app/reducers/productReducer";
import { useNavigate, useParams } from "react-router-dom";
import {
  useTrlListQuery,
  useUpdateProductMutation,
} from "../../api/innoloftApi";
import Select from "../../components/custom/Select";
const id = "6781";
const EditSections = ({ data, isFetching }) => {
  const { id: idRoute } = useParams();
  const navigate = useNavigate();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const { data: dataTrl, isFetching: isFetching2, error } = useTrlListQuery();
  const trlOptions = dataTrl?.map(({ name }) => name);

  //   idRoute = "1768";
  const {
    company,
    name: eTitle,
    description: eDescription,
    picture: eImage,
    video: eVideo,
    user,
    trl: eTrl,
    investmentEffort: eInvestmentEffort,
  } = data || {};
  const product = useSelector(productData);
  const [editProduct, setEditProduct] = useState({});
  const [changed, setChanged] = useState(false);
  const { name, description, picture, video, trl, investmentEffort } =
    editProduct;

  useEffect(() => {
    setEditProduct((prev) => {
      return {
        ...prev,
        name: eTitle || "",
        description: eDescription || "",
        picture: eImage || "",
        video: eVideo || "",
        trl: eTrl?.name || null,
        investmentEffort: eInvestmentEffort || "",
      };
    });
  }, [isFetching, isFetching2]);

  const { body, edit } = product;
  const tagsMap = [
    { name: "businessModel", options: [], defaultOption: "" },
    { name: "trl", options: trlOptions || [], defaultOption: trl },
  ];

  const onSelectFile = (ev) => {
    const selectedFile = ev.target.files;
    const [image] = Array.from(selectedFile).map((file) =>
      URL.createObjectURL(file)
    );
    setEditProduct((prev) => {
      return { ...prev, eImage: image };
    });
    setChanged(true);
  };

  const onChangeText = (ev) => {
    const { name, value } = ev.target;
    if (!name) {
      setEditProduct((prev) => {
        return { ...prev, description: value };
      });
    }
    setEditProduct((prev) => {
      return { ...prev, [name]: value };
    });
    setChanged(true);
  };
  console.log(data);

  const onSave = async () => {
    const body = { ...data, ...editProduct };

    try {
      await updateProduct({ id, body }).unwrap();
      // navigate("/products/view/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="">
        <EditSection>
          <div className="relative flex justify-center items-center w-[100%] h-[300px]">
            <div className="absolute z-10 ">
              <input
                className="text-blue-400 w-[200px]"
                type="file"
                name="eImage"
                onChange={onSelectFile}
                accept="image/png, image/jpg., image/jpeg, image/webp "
              />
            </div>
            <img
              className="absolute object-cover h-[100%] top-0"
              src={picture}
              alt="offer poster"
            />
          </div>
          <div className="px-2 mt-2">
            <InputText
              onChange={onChangeText}
              placeholder="Title"
              name="name"
              value={name}
            />
          </div>
          <div className="mt-3 px-2">
            <Template
              name="description"
              onChange={onChangeText}
              value={description}
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-200 px-2 py-1 rounded"
                disabled={!changed}
              >
                Cancel
              </button>
              <button
                className="ms-1 px-2 py-1 rounded bg-blue-600 text-gray-200"
                onClick={onSave}
                disabled={!changed}
              >
                Save
              </button>
            </div>
          </div>
        </EditSection>
        <EditSection>
          <h3 className="p-3 font-bold">Video</h3>
          <div className="mt-4 px-3">
            <InputText
              onChange={onChangeText}
              name="video"
              placeholder={"Add a youtube or vimeo link"}
              value={video}
            />
          </div>
        </EditSection>
        <EditSection>
          <h3 className="p-3 font-bold">Offer details</h3>
          <div className="px-3">
            <InputText
              onChange={onChangeText}
              placeholder="Cost"
              name="investmentEffort"
              value={investmentEffort}
            />
            {tagsMap.map(({ name, options, defaultOption }) => (
              <>
                <p key={name} className=" mt-3 p-1 rounded-md text-gray-600">
                  {name.toUpperCase()}
                </p>
                <Select
                  options={options}
                  defaultOption={defaultOption}
                  name={name}
                  handleChange={onChangeText}
                />
              </>
            ))}
          </div>
        </EditSection>
      </div>
    </div>
  );
};

function Edit({ data, isFetching }) {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-20 grid grid-cols-12">
      <div className="hidden md:block col-span-3">
        <AccountInfo user={data?.user} />
      </div>
      <div className="col-span-12 md:col-span-9">
        <div className="flex justify-between py-2">
          <h3 className="p-3 font-bold">Offer title</h3>
          <button
            onClick={() => navigate("/products/view")}
            className="bg-blue-600 text-white pt-0 px-2 rounded h-9"
          >
            View Offer
          </button>
        </div>
        <div className="grid grid-cols-6 gap-4 justify-between">
          <div className="col-span-12 md:col-span-4">
            <EditSections data={data} isFetching={isFetching} />
          </div>

          <div className="col-span-12 md:col-span-2">
            <MainAccountInfo company={data?.company} />
            <div className="mt-4">
              <Address map={false} company={data?.company} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
