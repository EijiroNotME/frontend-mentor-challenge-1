import React, { useContext } from "react";
import { ProfileContext } from "../../custom-hooks/useProfileContext";

const ProfileSelector = () => {
  const { selectedValue, setSelectedValue } = useContext(ProfileContext);

  const selectorItems = [
    {
      id: 1,
      text: "Daily",
      value: "daily",
    },
    {
      id: 2,
      text: "Weekly",
      value: "weekly",
    },
    {
      id: 3,
      text: "Monthly",
      value: "monthly",
    },
  ];

  return (
    <div className="text-primary-text flex flex-row justify-evenly md:flex-col">
      {selectorItems.map((selectorItem) => (
        <ul key={selectorItem.id} className="cursor-pointer leading-8">
          <li
            onClick={() => setSelectedValue(selectorItem.value)}
            className={
              selectedValue === selectorItem.value
                ? "text-primary-text"
                : "text-primary-text/70"
            }
          >
            {selectorItem.text}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProfileSelector;
