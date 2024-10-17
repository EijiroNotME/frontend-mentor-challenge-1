import React, { useContext } from "react";
import Cards from "./Cards";
import data from "../../assets/data.json";
import workImg from "../../assets/images/icon-work.svg";
import playImg from "../../assets/images/icon-play.svg";
import studyImg from "../../assets/images/icon-study.svg";
import exerciseImg from "../../assets/images/icon-exercise.svg";
import socialImg from "../../assets/images/icon-social.svg";
import selfCareImg from "../../assets/images/icon-self-care.svg";
import { ProfileContext } from "../../custom-hooks/useProfileContext";

const CardsView = () => {
  const { selectedValue } = useContext(ProfileContext);

  const style = [
    {
      title: "Work",
      imgType: workImg,
      colorType: "bg-orange-default",
    },
    {
      title: "Play",
      imgType: playImg,
      colorType: "bg-blue-default",
    },
    {
      title: "Study",
      imgType: studyImg,
      colorType: "bg-red-default",
    },
    {
      title: "Exercise",
      imgType: exerciseImg,
      colorType: "bg-green-default",
    },
    {
      title: "Social",
      imgType: socialImg,
      colorType: "bg-purple-default",
    },
    {
      title: "Self Care",
      imgType: selfCareImg,
      colorType: "bg-yellow-default",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {data.map((data) => {
        const cardStyle = style.find((s) => s.title === data.title) || {};

        return (
          <Cards
            key={data.title}
            title={data.title}
            current={data.timeframes[selectedValue].current}
            previous={data.timeframes[selectedValue].previous}
            colorType={cardStyle.colorType}
            imgType={cardStyle.imgType}
            imgTypeName={cardStyle.title}
          />
        );
      })}
    </div>
  );
};

export default CardsView;
