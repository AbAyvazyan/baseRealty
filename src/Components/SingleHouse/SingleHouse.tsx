import "./SingleHouse.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import favicon from "../../assets/images/logo.png";

import {
  faBed,
  faHome,
  faBuilding,
  faArrowsAltV,
  faBath,
} from "@fortawesome/free-solid-svg-icons";

import SingleHouseSlider from "./SingleHouseSlider/SingleHouseSlider";
import * as React from "react";
import LittleHouseCard from "./LittleHouseCard/LittleHouseCard";
import HouseAdvantages from "./HouseAdvantages/HouseAdvantages";
import MapComponent from "../HouseMap/HouseMap";
import { useTranslation } from "react-i18next";

const addFaviconInTab = () => {
  const link: any =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "icon";
  link.href = favicon; // Replace with the actual path to your new favicon
  document.getElementsByTagName("head")[0].appendChild(link);
};

const SingleHouse = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bestOffer, setBestOffer] = useState<any>([]);

  const routeParameter = useParams();

  const { t } = useTranslation();

  const yourName = t("Your_Number");

  const [isLoading, setIsLoading] = useState(true);
  const [houseInfo, setHouseInfo] = useState<any>(null);

  useEffect(() => {
    if (routeParameter.code !== undefined) {
      fetch(
        `${process.env.REACT_APP_RUN_ENVIRONMENT}post/${routeParameter.code}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((response) => {
          setIsLoading(false);
          if (response !== undefined) {
            setHouseInfo(response);
          }
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setHouseInfo(null);
    }
  }, [routeParameter.code]);

  useEffect(() => {
    addFaviconInTab();

    fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}post/?&community=Կենտրոն`)
      .then((res) => res.json())
      .then((response) => setBestOffer(response.posts));
  }, []);

  const contactMeHandler = () => {
    if (!phoneNumber) {
      return;
    }

    fetch(`${process.env.REACT_APP_RUN_ENVIRONMENT}send_email/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header to JSON
      },
      body: JSON.stringify({
        phone: phoneNumber,
        post_id: houseInfo.id,
        to_email: "abayvazyan.webdev@gmail.com",
      }),
    }).then((res) => res.ok && setPhoneNumber(""));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!houseInfo) {
    return <div>No data found.</div>;
  }

  const isLand = houseInfo.property_type === "Հողատարածք";

  return (
    <section className={"single_house_section"}>
      <h1>
        {t(`${houseInfo.property_type} ${houseInfo.property_description}`)}
      </h1>

      <div className={"single_house"}>
        <article>
          <h3 className={"single_house_heading"}>
            <span>{t(houseInfo.address)}</span>
            <span>
              {t("Code")}:{houseInfo.cod}
            </span>
          </h3>
          <div
            style={{
              width: "100%",
              height: "600px",
              padding: "33px 0",
              marginBottom: "5vh",
            }}
          >
            <SingleHouseSlider imagesData={houseInfo.images} />
          </div>

          <div className={"single_house_options"}>
            <div>
              <div className={"single_house_option_icons"}>
                {!isLand && (
                  <span>
                    <FontAwesomeIcon icon={faBed} />
                    {houseInfo.room} {t("Rooms")}
                  </span>
                )}
                <span>
                  <FontAwesomeIcon icon={faHome} /> {houseInfo.total_area}{" "}
                  {t("M")}²
                </span>
                {!isLand && (
                  <span>
                    <FontAwesomeIcon icon={faBuilding} />{" "}
                    {houseInfo.floors_number}/{houseInfo.building_floors_number}
                  </span>
                )}
                {!isLand && (
                  <span>
                    <FontAwesomeIcon icon={faArrowsAltV} />{" "}
                    {houseInfo.celing_hegiht}
                    {t("M")}
                  </span>
                )}
                {!isLand && (
                  <span>
                    <FontAwesomeIcon icon={faBath} /> {houseInfo.bathroom_count}
                  </span>
                )}
              </div>
              <div>
                {!isLand && (
                  <span>
                    {t("Building_Type")} : {houseInfo.building_type}
                  </span>
                )}
                {!isLand && (
                  <span>
                    {t("Renovation")} : {houseInfo.state}
                  </span>
                )}
              </div>
            </div>
            <div>
              <span className={"single_house_price"}>
                {t("Price")}: ${houseInfo.price}
              </span>
            </div>
          </div>

          <div className={"single_house_about"}>
            <h3 style={{ textAlign: "center" }}>{t("About")}</h3>

            <p>{houseInfo.description} </p>
          </div>

          {!isLand && (
            <>
              <HouseAdvantages
                sectionName={"FACILITIES"}
                advantages={houseInfo.comunal}
              />
              <HouseAdvantages
                sectionName={"More_Information"}
                advantages={houseInfo.additional_conveniences}
              />
            </>
          )}

          <div className={"number_for_contact"}>
            <div>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={yourName}
              />
            </div>
            <div>
              <div onClick={contactMeHandler}>{t("Contact_Me")}</div>
            </div>
          </div>

          <div className={"single_house_map_part"}>
            <MapComponent address={houseInfo.address} />
          </div>
        </article>

        <aside>
          <h3 style={{ textAlign: "center" }}>{t("BEST_OFFERS!")}</h3>

          <div className={"single_house_aside_content"}>
            {bestOffer.length &&
              bestOffer.map((house: any, index: number) => {
                if (index < 3) {
                  return (
                    <LittleHouseCard
                      key={house.id}
                      id={house.id}
                      image={house.image}
                      address={house.addres}
                      code={house.cod}
                      price={house.price}
                    />
                  );
                }
                return null
              })}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SingleHouse;
