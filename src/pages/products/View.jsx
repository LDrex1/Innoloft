import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import EditSection from "../../components/EditSection";
import AccountInfo, { MainAccountInfo } from "../../components/AccountInfo";
import Address from "../../components/Address";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tags from "../../components/Tags";
import { useTrlListQuery } from "../../api/innoloftApi";

function View({ data, isFetching }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    name,
    description,
    picture: image,
    video,
    user,
    trl,
    businessModels,
    investmentEffort,
    company,
  } = data || {};

  useEffect(() => {}, [isFetching]);
  const ViewSections = ({ data, isFetching }) => {
    const businessModelTags = businessModels?.map(({ name }) => name);
    const tagsMap = [
      { title: "Technology", tags: "" },
      { title: "Bussiness Model", tags: businessModelTags },
      { title: "TRL", tags: trl?.name || "" },
      { title: "Cost", tags: investmentEffort || "" },
    ];

    return (
      <div>
        <div className="">
          <EditSection>
            <div className="p-2">
              <h4 className="">{name}</h4>
            </div>
            <div className="flex mt-2 justify-center items-center w-[100%] h-[300px]">
              <img
                className="object-cover h-[100%] top-0"
                src={image}
                alt="offer poster"
              />
            </div>
            <div className="mt-4 p-2">
              <h4 className="font-bold">{name}</h4>
            </div>
            <div
              className="p-2"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </EditSection>
          <EditSection>
            <h3 className="p-3 font-bold">Video</h3>
            <div className="mt-4 px-3">
              <ReactPlayer url={video} controls light width={"100%"} />
            </div>
          </EditSection>
          <EditSection>
            <h3 className="p-3 font-bold">Offer details</h3>
            <div className="px-3 flex flex-wrap justify-between">
              {tagsMap.map(({ title, tags }) => (
                <Tags key={title} title={title} tags={tags} />
              ))}
            </div>
          </EditSection>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 md:px-20 grid grid-cols-12">
      <div className="hidden md:block col-span-3">
        <AccountInfo user={user} />
        {isFetching && "loading..."}
      </div>
      <div className="col-span-12 md:col-span-9">
        <div className="flex justify-between py-2">
          <h3 className="p-3 text-gray-500">Offers</h3>
          <button
            onClick={() => navigate("/products/edit")}
            className="bg-blue-600 text-white pt-0 px-2 py-1 rounded h-9"
          >
            Edit
          </button>
        </div>
        <div className="grid grid-cols-6 gap-4 justify-between">
          <div className="col-span-12 md:col-span-4">
            <ViewSections data={data} isFetching={isFetching} />
          </div>

          <div className="col-span-12 md:col-span-2">
            <MainAccountInfo company={company} />
            <div className="mt-4">
              <Address company={company} map={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
