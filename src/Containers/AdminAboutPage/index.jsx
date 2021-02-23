import React from "react";
import TextAreaFrom from "../../components/TextAreaFrom";
import TextInput from "../../components/TextInput";
import LocationInputs from "../../components/LocationInputs";
import ImageUploader from "../../components/ImageUploader";
import SelectDays from "../../components/SelectDays";
import SelectTime from "../../components/SelectTime";
import SelectAmenities from "../../components/SelectAmenities";
import SelectFeatured from "../../components/SelectFeatured";
import PrivateLessonCardContainer from "../../components/PrivateLessonCardContainer";
import FaqFrom from "../../components/FaqFrom";
const AdminAboutPage = ({isMobileScreen}) => {
 
  return (
    <div className="container">
      <TextInput title={"Title"} wordsValue={200} />
        <TextAreaFrom title={"Description"} wordsValue={200} />
        <TextAreaFrom title={"Special mention"} wordsValue={200} />
        <ImageUploader title={"Gallery"} />
        <LocationInputs title={"Location"} />
        <SelectDays title={"Open Days"} />
        <SelectTime title={"Open Hours"} />
        <SelectAmenities title={"Amenities"} />
        <SelectFeatured title={"Features"} isMobileScreen={isMobileScreen} />
        <div className="form-group-container">
          <div className="form-body p-2">
            <PrivateLessonCardContainer
              isMobileScreen={isMobileScreen}
              find={false}
            />
          </div>
        </div>
        <FaqFrom />
    </div>
  );
};

export default AdminAboutPage;
